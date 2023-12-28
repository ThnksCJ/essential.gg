import {Packet} from "../Packet";

export class ConnectionRegisterPacketTypeIdPacket extends Packet<{
    packetName: string;
    packetId: number;
}> {
    constructor(packetName: string, packetId: number) {
        super("connection.ConnectionRegisterPacketTypeIdPacket", {
            packetName,
            packetId
        });
    }
}