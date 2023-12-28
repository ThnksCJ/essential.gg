import {EssentialClient} from "../EssentialClient";
import WebSocket from "ws";
import {detanglePacket} from "../util";

class MitM {
    private proxy: WebSocket.Server;
    private essentialGG: EssentialClient;

    constructor() {
        this.proxy = new WebSocket.Server({
            port: 8080,
            perMessageDeflate: false
        });
        this.essentialGG = new EssentialClient({
            username: "CatboyThnks_CJ",
            allowTelemetry: false,
            randomizeTelemetry: true
        });

        this.proxy.on('headers', function (headers) {
            headers.push('Essential-Protocol-Version: 3');
        });

        this.essentialGG.on('open', () => {
            console.log("Connected to", this.essentialGG?.url)

            this.proxy.on('connection', this.proxyOnConnection.bind(this))
        });

        this.proxy.on('listening', () => console.log("Proxy listening on port 8080"));

        this.essentialGG.initialize();
    }

    proxyOnConnection(client: WebSocket) {
        this.essentialGG.rawPacketQueue.forEach((packet) => {
            client.send(packet)
        })

        this.essentialGG.hasUsedRawPacketQueue = true;

        client.on('message', (data) => {
            let packet = detanglePacket(data);

            if (packet.id === 0) {
                this.essentialGG.outgoingPackets.set(packet.data["a"], packet.data["b"]);
            }

            packet.name = this.essentialGG.outgoingPackets.getByValue(packet.id) || "UnknownPacket";

            this.essentialGG.sendDetangledPacket(packet);
        })

        this.essentialGG.on('rawPacketReceive', (data) => {
            client.send(data);
        })
    }
}

new MitM();