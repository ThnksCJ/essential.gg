# Table of Contents
1. [How the login works](#how-the-login-works)
2. [Registering Packets](#registering-packets)

## How the login works:

<img src="../images/essential auth.png" alt="image">

## Registering Packets:

Before either end sends a packet it needs to register the packet on the receiving end. This is done by
first sending a [connection.ConnectionRegisterPacketTypeIdPacket](./packets.md#connectionregisterpackettypeidpacket)
which contains the packet type id and the packet type name. The receiving end then registers the packet type id
and packet type name in a map.
