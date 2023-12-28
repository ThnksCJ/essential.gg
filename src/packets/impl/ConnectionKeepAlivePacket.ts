import {Packet} from "../Packet";

export class ConnectionKeepAlivePacket extends Packet<{}> {
    constructor() {
        super("connection.ConnectionKeepAlivePacket");
    }
}