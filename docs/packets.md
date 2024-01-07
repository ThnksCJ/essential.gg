# Table of Contents

- [chat.](#chat-packets)
    - [ChatChannelMemberAddPacket](#chatchannelmemberaddpacket)
    - [ChatChannelMemberRemovePacket](#chatchannelmemberremovepacket)
    - [ChatChannelMessageDeletePacket](#chatchannelmessagedeletepacket)
    - [ChatChannelUpdatePacket](#chatchannelupdatepacket)
    - [ClientChatChannelCreatePacket](#clientchatchannelcreatepacket)
    - [ClientChatChannelMessageCreatePacket](#clientchatchannelmessagecreatepacket)
    - [ClientChatChannelMessageReadStatePacket](#clientchatchannelmessagereadstatepacket)
    - [ClientChatChannelMessageReportPacket](#clientchatchannelmessagereportpacket)
    - [ClientChatChannelMessagesRetrievePacket](#clientchatchannelmessagesretrievepacket)
    - [ClientChatChannelMessageUpdatePacket](#clientchatchannelmessageupdatepacket)
    - [ClientChatChannelMutePacket](#clientchatchannelmutepacket)
    - [ServerChannelMemberActionResponsePacket](#serverchannelmemberactionresponsepacket)
    - [ServerChatChannelAddPacket](#serverchatchanneladdpacket)
    - [ServerChatChannelClearPacket](#serverchatchannelclearpacket)
    - [ServerChatChannelMessagePacket](#serverchatchannelmessagepacket)
    - [ServerChatChannelMessageReportPacket](#serverchatchannelmessagereportpacket)
    - [ServerChatChannelMessageReportReasonsPacket](#serverchatchannelmessagereportreasonspacket)
    - [ServerChatChannelRemovePacket](#serverchatchannelremovepacket)
- [checkout.](#checkout-packets)
    - [ClientCheckoutClaimCoinsPacket](#clientcheckoutclaimcoinspacket)
    - [ClientCheckoutCoinBundlePacket](#clientcheckoutcoinbundlepacket)
    - [ClientCheckoutCosmeticsPacket](#clientcheckoutcosmeticspacket)
    - [ClientCheckoutDynamicCoinBundlePacket](#clientcheckoutdynamiccoinbundlepacket)
    - [ClientCheckoutPartnerCodeRequestDataPacket](#clientcheckoutpartnercoderequestdatapacket)
    - [ClientCheckoutStoreBundlePacket](#clientcheckoutstorebundlepacket)
    - [ServerCheckoutClaimCoinsResponsePacket](#servercheckoutclaimcoinsresponsepacket)
    - [ServerCheckoutPartnerCodeDataPacket](#servercheckoutpartnercodedatapacket)
    - [ServerCheckoutUrlPacket](#servercheckouturlpacket)
- [coins.](#coins-packets)
    - [ClientCoinBundleOptionsPacket](#clientcoinbundleoptionspacket)
    - [ClientCoinsBalancePacket](#clientcoinsbalancepacket)
    - [ServerCoinBundleOptionsPacket](#servercoinbundleoptionspacket)
    - [ServerCoinsBalancePacket](#servercoinsbalancepacket)
- [connection.](#connection-packets)
    - [ClientConnectionDisconnectPacket](#clientconnectiondisconnectpacket)
    - [ClientConnectionLoginPacket](#clientconnectionloginpacket)
    - [ConnectionKeepAlivePacket](#connectionkeepalivepacket)
    - [ConnectionRegisterPacketTypeIdPacket](#connectionregisterpackettypeidpacket)
    - [ServerConnectionReconnectPacket](#serverconnectionreconnectpacket)
- [cosmetic.](#cosmetic-packets)
    - [capes.](#cosmetic-capes-packets)
        - [ClientCosmeticCapesUnlockedPacket](#clientcosmeticcapesunlockedpacket)
    - [catagories.](#cosmetic-catagories-packets)
        - [ClientCosmeticCategoriesRequestPacket](#clientcosmeticcategoriesrequestpacket)
        - [ServerCosmeticCategoriesPopulatePacket](#servercosmeticcategoriespopulatepacket)
    - [emote.](#cosmetic-emote-packets)
        - [ClientCosmeticEmoteWheelSelectPacket](#clientcosmeticemotewheelselectpacket)
        - [ClientCosmeticEmoteWheelUpdatePacket](#clientcosmeticemotewheelupdatepacket)
        - [ServerCosmeticEmoteWheelPopulatePacket](#servercosmeticemotewheelpopulatepacket)
    - [outfit.](#cosmetic-outfit-packets)
        - [ClientCosmeticOutfitCosmeticSettingsUpdatePacket](#clientcosmeticoutfitcosmeticsettingsupdatepacket)
        - [ClientCosmeticOutfitCreatePacket](#clientcosmeticoutfitcreatepacket)
        - [ClientCosmeticOutfitDeletePacket](#clientcosmeticoutfitdeletepacket)
        - [ClientCosmeticOutfitEquippedCosmeticsUpdatePacket](#clientcosmeticoutfitequippedcosmeticsupdatepacket)
        - [ClientCosmeticOutfitNameUpdatePacket](#clientcosmeticoutfitnameupdatepacket)
        - [ClientCosmeticOutfitSelectedRequestPacket](#clientcosmeticoutfitselectedrequestpacket)
        - [ClientCosmeticOutfitSelectPacket](#clientcosmeticoutfitselectpacket)
        - [ClientCosmeticOutfitSkinUpdatePacket](#clientcosmeticoutfitskinupdatepacket)
        - [ClientCosmeticOutfitUpdateFavoriteStatePacket](#clientcosmeticoutfitupdatefavoritestatepacket)
        - [ServerCosmeticOutfitPopulatePacket](#servercosmeticoutfitpopulatepacket)
        - [ServerCosmeticOutfitSelectedResponsePacket](#servercosmeticoutfitselectedresponsepacket)
    - [ClientCosmeticAnimationTriggerPacket](#clientcosmeticanimationtriggerpacket)
    - [ClientCosmeticCheckoutPacket](#clientcosmeticcheckoutpacket)
    - [ClientCosmeticRequestPacket](#clientcosmeticrequestpacket)
    - [ClientCosmeticRequestUnlockStatePacket](#clientcosmeticrequestunlockstatepacket)
    - [ClientCosmeticsUserEquippedVisibilityTogglePacket](#clientcosmeticsuserequippedvisibilitytogglepacket)
    - [ServerCosmeticAnimationTriggerPacket](#servercosmeticanimationtriggerpacket)
    - [ServerCosmeticPlayerSettingsPacket](#servercosmeticplayersettingspacket)
    - [ServerCosmeticsPopulatePacket](#servercosmeticspopulatepacket)
    - [ServerCosmeticsRevokePurchasePacket](#servercosmeticsrevokepurchasepacket)
    - [ServerCosmeticsSkinTexturePacket](#servercosmeticsskintexturepacket)
    - [ServerCosmeticsUserEquippedPacket](#servercosmeticsuserequippedpacket)
    - [ServerCosmeticsUserEquippedVisibilityPacket](#servercosmeticsuserequippedvisibilitypacket)
    - [ServerCosmeticsUserUnlockedPacket](#servercosmeticsuserunlockedpacket)
    - [ServerCosmeticTypesPopulatePacket](#servercosmetictypespopulatepacket)
- [currency.](#currency-packets)
    - [ClientCurrencyOptionsPacket](#clientcurrencyoptionspacket)
    - [ServerCurrencyOptionsPacket](#servercurrencyoptionspacket)
- [ice.](#ice-packets)
    - [IceCandidatePacket](#icecandidatepacket)
    - [IceSessionPacket](#icesessionpacket)
- [media.](#media-packets)
    - [ClientMediaCreatePacket](#clientmediacreatepacket)
    - [ClientMediaDeleteRequestPacket](#clientmediadeleterequestpacket)
    - [ClientMediaGetUploadUrlPacket](#clientmediagetuploadurlpacket)
    - [ClientMediaRequestPacket](#clientmediarequestpacket)
    - [ClientMediaUpdatePacket](#clientmediaupdatepacket)
    - [ServerMediaPopulatePacket](#servermediapopulatepacket)
    - [ServerMediaUploadUrlPacket](#servermediauploadurlpacket)
- [mod.](#mod-packets)
    - [ClientModsAnnouncePacket](#clientmodsannouncepacket)
    - [ServerRevenueSplitPacket](#serverrevenuesplitpacket)
- [multiplayer.](#multiplayer-packets)
    - [ServerMultiplayerJoinServerPacket](#servermultiplayerjoinserverpacket)
- [notices.](#notices-packets)
    - [ClientNoticeDismissPacket](#clientnoticedismisspacket)
    - [ClientNoticeRequestPacket](#clientnoticerequestpacket)
    - [ServerNoticePopulatePacket](#servernoticepopulatepacket)
    - [ServerNoticeRemovePacket](#servernoticeremovepacket)
- [pingproxy.](#pingproxy-packets)
    - [ClientPingProxyPacket](#clientpingproxypacket)
    - [ServerPingProxyResponsePacket](#serverpingproxyresponsepacket)
- [profile.](#profile-packets)
    - [trustedhosts.](#profile-trustedhosts-packets)
        - [ClientProfileTrustedHostsCreatePacket](#clientprofiletrustedhostscreatepacket)
        - [ClientProfileTrustedHostsDeletePacket](#clientprofiletrustedhostsdeletepacket)
        - [ServerProfileTrustedHostsClearPacket](#serverprofiletrustedhostsclearpacket)
        - [ServerProfileTrustedHostsPopulatePacket](#serverprofiletrustedhostspopulatepacket)
        - [ServerProfileTrustedHostsRemovePacket](#serverprofiletrustedhostsremovepacket)
    - [ClientProfileActivityPacket](#clientprofileactivitypacket)
    - [ServerProfileActivityPacket](#serverprofileactivitypacket)
    - [ServerProfileStatusPacket](#serverprofilestatuspacket)
- [relationships.](#relationships-packets)
    - [privacy.](#relationships-privacy-packets)
        - [FriendRequestPrivacySettingPacket](#friendrequestprivacysettingpacket)
    - [ClientRelationshipCreatePacket](#clientrelationshipcreatepacket)
    - [RelationshipDeletePacket](#relationshipdeletepacket)
    - [ServerRelationshipCreateFailedResponsePacket](#serverrelationshipcreatefailedresponsepacket)
    - [ServerRelationshipDeletePacket](#serverrelationshipdeletepacket)
    - [ServerRelationshipPopulatePacket](#serverrelationshippopulatepacket)
    - [ServerUuidNameMapPacket](#serveruuidnamemappacket)
- [response.](#response-packets)
    - [ResponseActionPacket](#responseactionpacket)
- [serverdiscovery.](#serverdiscovery-packets)
    - [ClientServerDiscoveryRequestPopulatePacket](#clientserverdiscoveryrequestpopulatepacket)
    - [ServerServerDiscoveryPopulatePacket](#serverserverdiscoverypopulatepacket)
- [skin.](#skin-packets)
    - [ClientSkinCreatePacket](#clientskincreatepacket)
    - [ClientSkinDeletePacket](#clientskindeletepacket)
    - [ClientSkinUpdateDataPacket](#clientskinupdatedatapacket)
    - [ClientSkinUpdateFavoriteStatePacket](#clientskinupdatefavoritestatepacket)
    - [ClientSkinUpdateLastUsedStatePacket](#clientskinupdatelastusedstatepacket)
    - [ClientSkinUpdateNamePacket](#clientskinupdatenamepacket)
    - [ServerSkinPopulatePacket](#serverskinpopulatepacket)
- [social.](#social-packets)
    - [ClientSocialDiscordRequestJoinServerResponsePacket](#clientsocialdiscordrequestjoinserverresponsepacket)
    - [SocialDiscordRequestJoinServerPacket](#socialdiscordrequestjoinserverpacket)
    - [SocialInviteToServerCancelPacket](#socialinvitetoservercancelpacket)
    - [SocialInviteToServerPacket](#socialinvitetoserverpacket)
- [subscription.](#subscription-packets)
    - [SubscriptionUpdatePacket](#subscriptionupdatepacket)
- [telemetry.](#telemetry-packets)
    - [ClientTelemetryPacket](#clienttelemetrypacket)
- [upnp.](#upnp-packets)
    - [ClientUPnPSessionClosePacket](#clientupnpsessionclosepacket)
    - [ClientUPnPSessionCreatePacket](#clientupnpsessioncreatepacket)
    - [ClientUPnPSessionInvitesAddPacket](#clientupnpsessioninvitesaddpacket)
    - [ClientUPnPSessionInvitesRemovePacket](#clientupnpsessioninvitesremovepacket)
    - [ClientUPnPSessionPingProxyUpdatePacket](#clientupnpsessionpingproxyupdatepacket)
    - [ClientUPnPSessionUpdatePacket](#clientupnpsessionupdatepacket)
    - [ServerUPnPSessionInviteAddPacket](#serverupnpsessioninviteaddpacket)
    - [ServerUPnPSessionPopulatePacket](#serverupnpsessionpopulatepacket)
    - [ServerUPnPSessionRemovePacket](#serverupnpsessionremovepacket)
- [wardrobe.](#wardrobe-packets)
    - [ClientWardrobeSettingsPacket](#clientwardrobesettingspacket)
    - [ClientWardrobeStoreBundleRequestPacket](#clientwardrobestorebundlerequestpacket)
    - [ServerWardrobeSettingsPacket](#serverwardrobesettingspacket)
    - [ServerWardrobeStoreBundlePacket](#serverwardrobestorebundlepacket)

---

## Chat Packets

### ChatChannelMemberAddPacket

Add member/members to a channel

```json
{
  "channelId": long,
  "members": UUID[]
}
```

#### Serialized Schema

```json
{
  "a": long,
  "b": UUID[]
}
```

---

### ChatChannelMemberRemovePacket

Remove member/members from a channel

```json
{
  "channelId": long,
  "members": UUID[]
}
```

#### Serialized Schema

```json
{
  "a": long,
  "b": UUID[]
}
```

---

### ChatChannelMessageDeletePacket

Client deleting a message

```json
{
  "channelId": long,
  "messageId": long
}
```

#### Serialized Schema

```json
{
  "a": long,
  "b": long
}
```

---

### ChatChannelUpdatePacket

Update an already existing channel's name or topic

```json
{
  "channelId": long,
  "name": string | null,
  "topic": string | null
}
```

#### Serialized Schema

```json
{
    "a": long,
    "b": string | null,
    "c": string | null
}
```

---

### ClientChatChannelCreatePacket

Creates a new channel with the given members, or creates a new DM with the given member

```json
{
  "type": "ANNOUNCEMENT | TEXT | DIRECT_MESSAGE | GROUP_DIRECT_MESSAGE",
  "name": string,
  "members": UUID[]
}
```

#### Serialized Schema

```json
{
  "a": "ANNOUNCEMENT | TEXT | DIRECT_MESSAGE | GROUP_DIRECT_MESSAGE",
  "b": string,
  "c": UUID[]
}
```

---

### ClientChatChannelMessageCreatePacket

Client sending a message to a channel, or replying to a message in a channel

```json
{
  "channelId": long,
  "content": string,
  "replyTargetId": long | null
}
```

#### Serialized Schema

```json
{
  "a": long,
  "b": string,
  "c": long | null
}
```

---

### ClientChatChannelMessageReadStatePacket

Sent when the client reads a new message in a channel

```json
{
  "channelId": long,
  "messageId": long,
  "state": boolean
}
```

#### Serialized Schema

```json
{
  "a": long,
  "b": long,
  "c": boolean
}
```

---

### ClientChatChannelMessageReportPacket

Client reports a message in a channel

```json
{
  "channelId": long,
  "messageId": long,
  "reason": string
}
```

#### Serialized Schema

```json
{
  "a": long,
  "b": long,
  "c": string
}
```

---

### ClientChatChannelMessagesRetrievePacket

Client requests messages from a channel, can be used to retrieve messages before or after a certain time.

```json
{
    "channelId": long,
    "before": long | null,
    "after": long | null,
    "limit": int
}
```

#### Serialized Schema

```json
{
    "a": long,
    "b": long | null,
    "c": long | null,
    "d": int
}
```

---

### ClientChatChannelMessageUpdatePacket

When a user edits a message

```json
{
    "channelId": long,
    "messageId": long,
    "content": string
}
```

#### Serialized Schema

```json
{
    "a": long,
    "b": long,
    "c": string
}
```

---

### ClientChatChannelMutePacket

When `muted` is `true`, the server wont send "push" notifications to the client for the channel.

```json
{
    "channelId": long,
    "muted": boolean
}
```

#### Serialized Schema

```json
{
    "a": long,
    "b": boolean
}
```

---

### ServerChannelMemberActionResponsePacket

```json
{
    "results": [
      {
        "UUID": boolean
      }
    ]
}
```

#### Serialized Schema

```json
{
    "a": [
      {
        "UUID": boolean
      }
    ]
}
```

---

### ServerChatChannelAddPacket

```json
{
  "channels": [
    {
      "id": long,
      "type": "ANNOUNCEMENT | TEXT | DIRECT_MESSAGE | GROUP_DIRECT_MESSAGE",
      "name": string,
      "topic": string | null,
      "settings": {
        "userLimit": int,
      },
      "members": Set<UUID>,
      "createdInfo": {
        "at": DateTime,
        "by": UUID
      },
      "closedInfo": {
        "at": DateTime,
        "by": UUID,
        "reason": string,
      } | null,
      "muted": boolean
    }
  ]
}
```

#### Serialized Schema

```json
{
    "a": [
      {
        "a": long,
        "b": "ANNOUNCEMENT | TEXT | DIRECT_MESSAGE | GROUP_DIRECT_MESSAGE",
        "c": string,
        "d": string | null,
        "e": {
          "a": int
        },
        "f": Set<UUID>,
        "g": {
          "a": DateTime,
          "b": UUID
        },
        "h": {
          "a": DateTime,
          "b": UUID,
          "c": string
        } | null,
        "i": boolean
      }
    ]
}
```

---

### ServerChatChannelClearPacket

This has no payload. Not sure why it exists yet.

---

### ServerChatChannelMessagePacket

```json
{
    "messages": [
        {
            "id": long,
            "channelId": long,
            "sender": UUID,
            "contents": string,
            "read": boolean,
            "replyTargetId": long | null,
            "lastEditTime": long | null
        }
    ]
}
```

#### Serialized Schema

```json
{
    "a": [
        {
            "a": long,
            "b": long,
            "c": UUID,
            "d": string,
            "e": boolean,
            "f": long | null,
            "g": long | null
        }
    ]
}
```

---

### ServerChatChannelMessageReportPacket

```json
{
    "report": {
        "id": long,
        "channelId": long,
        "messageId": long,
        "reason": string,
        "createdInfo": {
            "at": DateTime,
            "by": UUID
        },
        "closed": boolean,
        "reportVerdict": {
            "by": string,
            "at": DateTime,
            "reason": string | null,
            "verdict": "NO_ACTION | DELETE_MESSAGES | DELETE_USER_MESSAGES"
        }, | null
    }
}
```

#### Serialized Schema

```json
{
    "a": {
        "a": long,
        "b": long,
        "c": long,
        "d": string,
        "e": {
            "a": DateTime,
            "b": UUID
        },
        "f": boolean,
        "g": {
            "a": string,
            "b": DateTime,
            "c": string | null,
            "d": "NO_ACTION | DELETE_MESSAGES | DELETE_USER_MESSAGES"
        } | null
    }
}
```

---

### ServerChatChannelMessageReportReasonsPacket

This is sent to the client when they connect to the server. It contains the reasons that can be used to report a message.
I'm guessing this is supposed to have multiple languages, but it only has english. (At-least for now)

```json
{
    "reasons": {
      "HARASSMENT": {
        "en_US": "Bullying / Harassment"
      },
      "ILLEGAL_ACTIVITY": {
        "en_US": "Illegal Activity"
      },
      "INAPPROPRIATE_CONTENT": {
        "en_US": "Inappropriate Content"
      }
    }
}
```

#### Serialized Schema

```json
{
    "a": {
      "HARASSMENT": {
        "en_US": "Bullying / Harassment"
      },
      "ILLEGAL_ACTIVITY": {
        "en_US": "Illegal Activity"
      },
      "INAPPROPRIATE_CONTENT": {
        "en_US": "Inappropriate Content"
      }
    }
}
```

---

### ServerChatChannelRemovePacket

```json
{
    "channelIds": [
        long
    ]
}
```

#### Serialized Schema

```json
{
    "a": [
        long
    ]
}
```

---

## Checkout Packets

### ClientCheckoutClaimCoinsPacket

---

### ClientCheckoutCoinBundlePacket

---

### ClientCheckoutCosmeticsPacket

---

### ClientCheckoutDynamicCoinBundlePacket

---

### ClientCheckoutPartnerCodeRequestDataPacket

---

### ClientCheckoutStoreBundlePacket

---

### ServerCheckoutClaimCoinsResponsePacket

---

### ServerCheckoutPartnerCodeDataPacket

---

### ServerCheckoutUrlPacket

---

## Coins Packets

### ClientCoinBundleOptionsPacket

---

### ClientCoinsBalancePacket

---

### ServerCoinBundleOptionsPacket

---

### ServerCoinsBalancePacket

---

## Connection Packets

### ClientConnectionDisconnectPacket

---

### ServerConnectionReconnectPacket

---

### ConnectionRegisterPacketTypeIdPacket

Before sending a new packet, you must register the packet and set an id for it.
This id will be used to identify the packet when it is received. Typically, the id
increments by 1 for each packet registered.

```json
{
  "className": string,
  "packetId": number
}
```

#### Serialized Schema

```json
{
  "a": string,
  "b": number
}
```

---

### ClientConnectionLoginPacket

After connecting to the server, the client must send a
login packet to authenticate itself. The server will
respond with a [ResponseActionPacket](#connection-packets).

```json
{
  "username": string,
  "sharedSecret": byte[]
}
```

#### Serialized Schema

```json
{
  "a": string,
  "b": byte[]
}
```

---

### ConnectionKeepAlivePacket

The server will send a keep alive packet to the client every ~60 seconds. If the client
does not respond the server will assume the client is dead.

---

## Cosmetic Packets

### ClientCosmeticAnimationTriggerPacket

---

### ClientCosmeticCheckoutPacket

---

### ClientCosmeticRequestPacket

---

### ClientCosmeticRequestUnlockStatePacket

---

### ClientCosmeticsUserEquippedVisibilityTogglePacket

---

### ServerCosmeticAnimationTriggerPacket

---

### ServerCosmeticPlayerSettingsPacket

---

### ServerCosmeticsPopulatePacket

---

### ServerCosmeticsRevokePurchasePacket

---

### ServerCosmeticsSkinTexturePacket

---

### ServerCosmeticsUserEquippedPacket

---

### ServerCosmeticsUserEquippedVisibilityPacket

---

### ServerCosmeticsUserUnlockedPacket

---

### ServerCosmeticTypesPopulatePacket

---

## Cosmetic Capes Packets

### ClientCosmeticCapesUnlockedPacket

---

## Cosmetic Catagories Packets

### ClientCosmeticCategoriesRequestPacket

---

### ServerCosmeticCategoriesPopulatePacket

---

## Cosmetic Emote Packets

### ClientCosmeticEmoteWheelSelectPacket

---

### ClientCosmeticEmoteWheelUpdatePacket

---

### ServerCosmeticEmoteWheelPopulatePacket

## Cosmetic Outfit Packets

### ClientCosmeticOutfitCosmeticSettingsUpdatePacket

---

### ClientCosmeticOutfitCreatePacket

---

### ClientCosmeticOutfitDeletePacket

---

### ClientCosmeticOutfitEquippedCosmeticsUpdatePacket

---

### ClientCosmeticOutfitNameUpdatePacket

---

### ClientCosmeticOutfitSelectedRequestPacket

When a new player joins a server (can be local or remote), the client will 
send this packet with the players uuid to get the cosmetics for that player.

See [ServerCosmeticOutfitSelectedResponsePacket](#servercosmeticoutfitselectedresponsepacket) for the response.

```json
{
  "uuid": UUID
}
```

#### Serialized Schema

```json
{
  "a": UUID
}
```

---

### ClientCosmeticOutfitSelectPacket

---

### ClientCosmeticOutfitSkinUpdatePacket

---

### ClientCosmeticOutfitUpdateFavoriteStatePacket

---

### ServerCosmeticOutfitPopulatePacket

---

### ServerCosmeticOutfitSelectedResponsePacket

The server will send this packet to the client in response to a 
[ClientCosmeticOutfitSelectedRequestPacket](#clientcosmeticoutfitselectedrequestpacket). 
Keep in mind that the `equippedCosmetics` field is a map of `CosmeticSlot` to `Cosmetic` name.
So there can only be 1 entry per `CosmeticSlot`.

```json
{
  "uuid": UUID,
  "skinTexture": string,
  "equippedCosmetics": {
    "CAPE": string,
    "JACKET": string,
    "LEFT_SLEEVE": string,
    "RIGHT_SLEEVE": string,
    "LEFT_PANTS_LEG": string,
    "RIGHT_PANTS_LEG": string,
    "HAT": string
  }
}
```

#### Serialized Schema

```json
{
  "uuid": UUID,
  "skinTexture": string,
  "equippedCosmetics": {
    "CAPE": string,
    "JACKET": string,
    "LEFT_SLEEVE": string,
    "RIGHT_SLEEVE": string,
    "LEFT_PANTS_LEG": string,
    "RIGHT_PANTS_LEG": string,
    "HAT": string
  }
}
```

---

## Currency Packets

### ClientCurrencyOptionsPacket

---

### ServerCurrencyOptionsPacket

---

## Ice Packets

### IceCandidatePacket

---

### IceSessionPacket

---

## Media Packets

### ClientMediaCreatePacket

---

### ClientMediaDeleteRequestPacket

---

### ClientMediaGetUploadUrlPacket

---

### ClientMediaRequestPacket

---

### ClientMediaUpdatePacket

---

### ServerMediaPopulatePacket

---

### ServerMediaUploadUrlPacket

---

## Mod Packets

### ClientModsAnnouncePacket$Platform

---

### ClientModsAnnouncePacket

---

### ServerRevenueSplitPacket

---

## Multiplayer Packets

### ServerMultiplayerJoinServerPacket

---

## Notices Packets

### ClientNoticeDismissPacket

---

### ClientNoticeRequestPacket

---

### ServerNoticePopulatePacket

---

### ServerNoticeRemovePacket

---

## Pingproxy Packets

### ClientPingProxyPacket

---

### ServerPingProxyResponsePacket

---

## Profile Packets

### ClientProfileActivityPacket

---

### ServerProfileActivityPacket

---

### ServerProfileStatusPacket

---

## Profile Trustedhosts Packets

### ClientProfileTrustedHostsCreatePacket

---

### ClientProfileTrustedHostsDeletePacket

---

### ServerProfileTrustedHostsClearPacket

---

### ServerProfileTrustedHostsPopulatePacket

---

### ServerProfileTrustedHostsRemovePacket

---

## Relationships Packets

### ClientRelationshipCreatePacket

---

### RelationshipDeletePacket

---

### ServerRelationshipCreateFailedResponsePacket

---

### ServerRelationshipDeletePacket

---

### ServerRelationshipPopulatePacket

---

### ServerUuidNameMapPacket

---

## Relationships Privacy Packets

---

### FriendRequestPrivacySettingPacket

---

## Response Packets

### ResponseActionPacket

Server response to a client action.

```json
{
  "successful": boolean,
  "errorMessage": string
}
```

#### Serialized Schema

```json
{
  "a": boolean,
  "b": string
}
```

---

## Serverdiscovery Packets

### ClientServerDiscoveryRequestPopulatePacket

---

### ServerServerDiscoveryPopulatePacket

---

## Skin Packets

### ClientSkinCreatePacket

---

### ClientSkinDeletePacket

---

### ClientSkinUpdateDataPacket

---

### ClientSkinUpdateFavoriteStatePacket

---

### ClientSkinUpdateLastUsedStatePacket

---

### ClientSkinUpdateNamePacket

---

### ServerSkinPopulatePacket

---

## Social Packets

### ClientSocialDiscordRequestJoinServerResponsePacket

---

### SocialDiscordRequestJoinServerPacket

---

### SocialInviteToServerCancelPacket

---

### SocialInviteToServerPacket

---

## Subscription Packets

### SubscriptionUpdatePacket

---

## Telemetry Packets

### ClientTelemetryPacket

---

## Upnp Packets

### ClientUPnPSessionClosePacket

---

### ClientUPnPSessionCreatePacket

---

### ClientUPnPSessionInvitesAddPacket

---

### ClientUPnPSessionInvitesRemovePacket

---

### ClientUPnPSessionPingProxyUpdatePacket

---

### ClientUPnPSessionUpdatePacket

---

### ServerUPnPSessionInviteAddPacket

---

### ServerUPnPSessionPopulatePacket

---

### ServerUPnPSessionRemovePacket

---

## Wardrobe Packets

### ClientWardrobeSettingsPacket

---

### ClientWardrobeStoreBundleRequestPacket

---

### ServerWardrobeSettingsPacket

---

### ServerWardrobeStoreBundlePacket
