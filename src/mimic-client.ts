import {EssentialClient} from "./EssentialClient";
import {ConnectionKeepAlivePacket} from "./packets/impl/ConnectionKeepAlivePacket";

const essentialClient = new EssentialClient({
    username: "CatboyThnks_CJ"
});

essentialClient.on('packetReceive', async (name: string, typeId: number, packet: any) => {
    switch (essentialClient.incomingPackets.getByKey(packet.typeId)) {
        case "connection.ConnectionKeepAlivePacket": {
            const keepAlivePacket = new ConnectionKeepAlivePacket();

            await essentialClient.sendPacket(keepAlivePacket, keepAlivePacket.uuid);
        }
    }
});

essentialClient.on('packetSend', (name: string, typeId: number, packet: any) => {
    console.log(name, typeId, packet);
})

essentialClient.initialize();