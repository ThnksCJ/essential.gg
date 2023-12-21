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

---

### ChatChannelMemberRemovePacket

---

### ChatChannelMessageDeletePacket

---

### ChatChannelUpdatePacket

---

### ClientChatChannelCreatePacket

---

### ClientChatChannelMessageCreatePacket

---

### ClientChatChannelMessageReadStatePacket

---

### ClientChatChannelMessageReportPacket

---

### ClientChatChannelMessagesRetrievePacket

---

### ClientChatChannelMessageUpdatePacket

---

### ClientChatChannelMutePacket

---

### ServerChannelMemberActionResponsePacket

---

### ServerChatChannelAddPacket

---

### ServerChatChannelClearPacket

---

### ServerChatChannelMessagePacket

---

### ServerChatChannelMessageReportPacket

---

### ServerChatChannelMessageReportReasonsPacket

---

### ServerChatChannelRemovePacket

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

The server will send a keep alive packet to the client every ~30 seconds. If the client
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
