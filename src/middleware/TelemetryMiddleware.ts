import {Options, PacketMiddleware} from "../EssentialClient";
import {Packet} from "../packets/Packet";

export class TelemetryMiddleware implements PacketMiddleware {
    disallowedPackets: string[] = [
        "mod.ClientModsAnnouncePacket",
        "telemetry.ClientTelemetryPacket",
    ]

    onPacket(packet: Packet, options: Options) {
        if (this.disallowedPackets.includes(packet.name) && !options.allowTelemetry) {
            if (options.randomizeTelemetry) {
                switch (packet.name) {
                    case "mod.ClientModsAnnouncePacket":
                        packet.data = {
                            "b": "69.420.69",
                            "a": [
                                ...this.generateFakeMD5Checksums(Math.floor(Math.random() * 10) + 5)
                            ],
                            "c": "WATERMELON",
                            "d": "watermelonloader:0.69.420"
                        }
                        break;
                    case "telemetry.ClientTelemetryPacket":
                        packet.data = {
                            "key": "WATER_MELON",
                            "metadata": {
                                "name": "w.a.t.e.r.m.e.l.o.n",
                            }
                        }
                        break;
                }
            } else {
                return true;
            }
        }

        return packet;
    }

    private generateFakeMD5Checksums(numberOfChecksums: number) {
        const checksums = []
        for (let i = 0; i < numberOfChecksums; i++) {
            checksums.push(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))
        }
        return checksums
    }
}