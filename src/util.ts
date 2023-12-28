import {Packet} from "./packets/Packet";
import {createHash, randomBytes} from 'crypto';
import axios from "axios";
import {Authflow} from "prismarine-auth";
import {DetangledPacket} from "./EssentialClient";

const SHARED_CONSTANT = Buffer.from('173be201d4e5591dcef37bcaf701d136', 'hex');

export function sha1(source: Buffer): Buffer {
    return createHash('sha1').update(source).digest();
}

export function generateSharedSecret(): Buffer {
    return randomBytes(16);
}

export function computeHash(sharedSecret: Buffer): string | null {
    if (sharedSecret.length !== 16) {
        return null;
    }
    let buf: Buffer = Buffer.concat([sharedSecret, SHARED_CONSTANT]);
    return sha1(buf).toString('hex');
}

export function remapPacketData(packet: Packet) {
    const remappedPacketData: { [key: string]: any } = {};

    Object.keys(packet.data).forEach((key, index) => {
        remappedPacketData[String.fromCharCode(97 + index)] = packet.data[key];
    })

    return remappedPacketData;
}

export function packetToBuffer(packetTypeId: number, packetUUIDbytes: Buffer, packet: any) {
    const packetBytes = Buffer.from(JSON.stringify(packet), 'utf-8');

    const byteArray = Buffer.alloc(4 + 4 + packetUUIDbytes.length + 4 + packetBytes.length);
    let offset = 0;

    byteArray.writeInt32BE(packetTypeId, offset);
    offset += 4;

    byteArray.writeInt32BE(packetUUIDbytes.length, offset);
    offset += 4;

    packetUUIDbytes.copy(byteArray, offset);
    offset += packetUUIDbytes.length;

    byteArray.writeInt32BE(packetBytes.length, offset);
    offset += 4;

    packetBytes.copy(byteArray, offset);

    return byteArray;
}

export function detanglePacket(array: any): DetangledPacket {
    let offset = 0;

    const packetTypeId = array.readInt32BE(offset);
    offset += 4;

    const packetIdLength = array.readInt32BE(offset);
    offset += 4;

    const packetId = array.slice(offset, offset + packetIdLength).toString('utf-8');
    offset += packetIdLength;

    const packetLength = array.readInt32BE(offset);
    offset += 4;

    const packet = JSON.parse(array.slice(offset, offset + packetLength).toString('utf-8'));

    return {
        name: "",
        id: packetTypeId,
        uuid: packetId,
        data: packet,
    };
}

export async function startSessionSequence(username: string, serverHash: string | null) {
    if (serverHash == null) {
        console.error("Failed to compute session hash.");
        return;
    }

    const {token} = await (new Authflow(username, './cache')).getMinecraftJavaToken()
    const uuid = "aea9b1c78d5b49708db3422db664c6e6"

    const statusCode = await joinServer(token, uuid, serverHash);

    return statusCode == 204;
}

export async function joinServer(token: string, uuid: string, serverHash: string) {
    try {
        console.log("Attempting to join session : " + serverHash)

        const url = 'https://sessionserver.mojang.com/session/minecraft/join';
        const headers = {
            'Content-Type': 'application/json; charset=UTF-8',
        };

        const data = {
            accessToken: token,
            selectedProfile: uuid,
            serverId: serverHash,
        };

        const response = await axios.post(url, data, {headers}).then((res) => {
            return res;
        })

        console.log("Successfully joined session : " + serverHash);

        return response.status;
    } catch (error: any) {
        console.error(error.response.data);
        return -1;
    }
}

export class BidirectionalMap<K, V> {
    private keyToValueMap: Map<K, V> = new Map<K, V>();
    private valueToKeyMap: Map<V, K> = new Map<V, K>();

    public set(key: K, value: V): void {
        this.keyToValueMap.set(key, value);
        this.valueToKeyMap.set(value, key);
    }

    public getByKey(key: K): V | undefined {
        return this.keyToValueMap.get(key);
    }

    public getByValue(value: V): K | undefined {
        return this.valueToKeyMap.get(value);
    }
}