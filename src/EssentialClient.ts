import WebSocket from "ws";
import {Packet} from "./packets/Packet";
import {ConnectionRegisterPacketTypeIdPacket} from "./packets/impl/ConnectionRegisterPacketTypeIdPacket";
import {
    BidirectionalMap,
    computeHash,
    detanglePacket,
    generateSharedSecret,
    packetToBuffer,
    remapPacketData,
    startSessionSequence
} from "./util";

import EventEmitter from "events";
import {TelemetryMiddleware} from "./middleware/TelemetryMiddleware";

interface EssentialClientEvents {
    /** Emitted when a raw packet is received. (Raw) */
    'rawPacketReceive': (data: WebSocket.RawData) => void;
    /** Emitted when a packet is received. (Parsed) */
    'packetReceive': (name: string, typeId: number, id: string, data: any) => void;
    /** Emitted when a packet is sent. (Parsed) */
    'packetSend': (name: string, typeId: number, data: any) => void;

    /** Emitted when registering session with mojang fails. */
    'sessionErrorEvent': (reason: string, failed: boolean) => void;

    /** Emitted when the websocket is opened. */
    'open': () => void;
}

export declare interface EssentialClient {
    on<U extends keyof EssentialClientEvents>(event: U, listener: EssentialClientEvents[U]): this;

    emit<U extends keyof EssentialClientEvents>(event: U, ...args: Parameters<EssentialClientEvents[U]>): boolean;
}

export interface DetangledPacket {
    /** The name of the packet. (includes package name) */
    name: string;
    /** The type id of the packet. */
    id: number;
    /** the uuid of the packet (literally just a string (dont use it like ever)). */
    uuid: string;
    /** The data of the packet. {"a", "b", "c"...} */
    data: any;
    /** Should it be cancelled? */
    cancelled?: boolean;
}

type PacketMiddlewareReturnValue = object | false | true | void | Packet[];

export interface PacketMiddleware {
    onPacket(packet: Packet, options: Options): PacketMiddlewareReturnValue | Promise<PacketMiddlewareReturnValue>;
}

interface PacketMiddlewareProcessResult {
    isCancelled: boolean;
    packetData: object;
}

export interface Options {
    username: string;
    allowTelemetry?: boolean;
    randomizeTelemetry?: boolean;
    toServerMiddleware?: PacketMiddleware[]
    toClientMiddleware?: PacketMiddleware[]
}

export class EssentialClient extends EventEmitter {
    /** id -> name */
    public incomingPackets: BidirectionalMap<number, string> = new BidirectionalMap<number, string>();
    /** name -> id */
    public outgoingPackets: BidirectionalMap<string, number> = new BidirectionalMap<string, number>();

    public readonly options: Options;

    /** Used internally to keep track of packets that were received before a client connected. */
    public rawPacketQueue: WebSocket.RawData[] = [];

    /** Used internally to keep track of whether the rawPacketQueue has been used. (Should still write to it) */
    public hasUsedRawPacketQueue: boolean = false;
    private essentialGG: WebSocket | null = null;
    private knownPackets: [string, number][] = [
        ["connection.ConnectionRegisterPacketTypeIdPacket", 0]
    ]

    /** used internally to keep track of packets ids */
    private currentPacketTypeId: number = 0;

    private readonly sharedSecret: Buffer;
    private readonly sessionHash: string | null;
    private readonly authToken: string;

    constructor(options: Options) {
        super();

        this.options = {
            username: options.username,
            allowTelemetry: options.allowTelemetry ?? false,
            randomizeTelemetry: options.randomizeTelemetry ?? false,
            toServerMiddleware: options.toServerMiddleware ?? [],
            toClientMiddleware: options.toClientMiddleware ?? []
        }

        this.options.toServerMiddleware?.push(
            new TelemetryMiddleware()
        )

        this.sharedSecret = generateSharedSecret();
        this.sessionHash = computeHash(this.sharedSecret);

        const name = Buffer.from(this.options.username, 'utf-8');
        const colon = Buffer.from(":");
        this.authToken = Buffer.from(Buffer.concat([name, colon, this.sharedSecret])).toString('base64');
    }

    get url() {
        return this.essentialGG?.url;
    }

    public async initialize() {
        if (!await startSessionSequence(this.options.username, this.sessionHash)) {
            this.emit('sessionErrorEvent', "Failed to join session", true);
            return;
        }

        console.log("----------------------------------------------");
        console.log("Using: ")
        console.log(" - Shared Secret : " + this.sharedSecret.toString('hex'));
        console.log(" - Session Hash  : " + this.sessionHash);
        console.log(" - Authorization : " + this.authToken);
        console.log("----------------------------------------------");

        await this.initWebSocket();
    }

    async onOpen() {
        this.emit('open');

        this.knownPackets.forEach((packet) => {
            this.incomingPackets.set(packet[1], packet[0]);
            this.outgoingPackets.set(packet[0], packet[1]);
        })
    }

    async onMessage(data: WebSocket.RawData) {
        let packet = detanglePacket(data);

        if (packet.id === 0) {
            this.incomingPackets.set(packet.data["b"], packet.data["a"]);
        }

        packet.name = this.incomingPackets.getByKey(packet.id) || "UnknownPacket";

        const {isCancelled, packetData} = await this.processMiddlewareList(this.options.toClientMiddleware!, packet);

        if (isCancelled) return;
        packet.data = packetData;

        if (!this.hasUsedRawPacketQueue)
            this.rawPacketQueue.push(data);

        this.emit('rawPacketReceive', data);
        this.emit('packetReceive', packet.name, packet.id, packet.uuid, packet.data);
    }

    onClose(code: number, data: any) {
        console.log(code + " : " + data);
    }

    public async sendPacket(packet: Packet, packetUUID: string | null) {
        const {isCancelled, packetData} = await this.processMiddlewareList(this.options.toServerMiddleware!, packet);

        if (isCancelled) return;
        packet.data = packetData;

        const packetUUIDBytes = packetUUID != null ? Buffer.from(packetUUID.toString(), 'utf-8') : Buffer.alloc(0);

        const packetTypeId = this.outgoingPackets.getByKey(packet.name) ?? await (async () => {
            const newId = ++this.currentPacketTypeId;
            await this.sendPacket(new ConnectionRegisterPacketTypeIdPacket(packet.name, newId), null);
            this.outgoingPackets.set(packet.name, newId);
            return newId;
        })();

        const packetBytes = packetToBuffer(packetTypeId, packetUUIDBytes, remapPacketData(packet));

        try {
            this.emit('packetSend', packet.name, packetTypeId, packet.data);

            this.essentialGG?.send(packetBytes);
        } catch (e) {
            console.error(`Error occurred when sending out packet '${packet}'.`);
        }
    }

    public sendDetangledPacket(packet: DetangledPacket) {
        this.sendPacket({
            name: packet.name,
            uuid: packet.uuid,
            data: packet.data
        }, packet.uuid);
    }

    async processMiddlewareList(middlewareList: PacketMiddleware[], currentPacket: Packet): Promise<PacketMiddlewareProcessResult> {
        let returnValue: PacketMiddlewareReturnValue;
        let packetData: any = currentPacket.data;
        let isCancelled = false;

        for (const middleware of middlewareList) {
            const middlewareFunc = middleware.onPacket(currentPacket, this.options);

            returnValue = (middlewareFunc instanceof Promise ? await middlewareFunc : middlewareFunc);
            isCancelled = isCancelled ? returnValue !== true : returnValue === false;

            if (returnValue !== undefined && returnValue !== false && returnValue !== true) {
                if (typeof returnValue === "object" && returnValue.hasOwnProperty("data")) {
                    packetData = (returnValue as Packet).data;
                } else {
                    packetData = returnValue;
                }
            }
        }

        return {
            isCancelled,
            packetData
        };
    }

    private async initWebSocket() {
        this.essentialGG = new WebSocket("wss://connect.essential.gg/v1", {
            protocolVersion: 13,
            headers: {
                'Essential-Max-Protocol-Version': 3,
                "Authorization": `Basic ${this.authToken}`
            },
            perMessageDeflate: false
        });

        this.essentialGG.on('unexpected-response', (req, res) => {
            console.error(res.statusCode + ' : ' + res.statusMessage);
        });

        this.essentialGG.on('open', this.onOpen.bind(this));
        this.essentialGG.on('close', this.onClose.bind(this));
        this.essentialGG.on('message', this.onMessage.bind(this));
    }
}