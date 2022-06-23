/*
MIT License

Copyright (c) 2020 Peter Szombati

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */
import * as SampFunctions from "./SampFunctions";
import {FIGHT_STYLE, WEAPONSKILL} from "./SampEnum";

import {SMART_DIALOG_CALLBACK} from "./SampInterface";
import {SmartDialogFunctions} from "./SmartDialog";

export class SampPlayerNativeFunctions {
    public playerid: number;

    constructor(playerid: number) {
        this.playerid = playerid;
    }

    SendClientMessage(color: string, message: string): number {
        return SampFunctions.SendClientMessage(this.playerid, color, message);
    }

    SendPlayerMessageToPlayer(senderid: number, message: string): number {
        return SampFunctions.SendPlayerMessageToPlayer(this.playerid, senderid, message);
    }

    SendDeathMessageToPlayer(killer: number, killee: number, weapon: number): number {
        return SampFunctions.SendDeathMessageToPlayer(this.playerid, killer, killee, weapon);
    }

    GameTextForPlayer(string: string, time: number, style: number): number {
        return SampFunctions.GameTextForPlayer(this.playerid, string, time, style);
    }

    IsPlayerNPC(): number {
        return SampFunctions.IsPlayerNPC(this.playerid);
    }

    IsPlayerAdmin(): number {
        return SampFunctions.IsPlayerAdmin(this.playerid);
    }

    Kick(): number {
        return SampFunctions.Kick(this.playerid);
    }

    Ban(): number {
        return SampFunctions.Ban(this.playerid);
    }

    BanEx(reason: string): number {
        return SampFunctions.BanEx(this.playerid, reason);
    }

    GetPlayerNetworkStats(retstr_size: number): string {
        return SampFunctions.GetPlayerNetworkStats(this.playerid, retstr_size);
    }

    GetPlayerVersion(len: number): string {
        return SampFunctions.GetPlayerVersion(this.playerid, len);
    }

    NetStats_GetConnectedTime(): number {
        return SampFunctions.NetStats_GetConnectedTime(this.playerid);
    }

    NetStats_MessagesReceived(): number {
        return SampFunctions.NetStats_MessagesReceived(this.playerid);
    }

    NetStats_BytesReceived(): number {
        return SampFunctions.NetStats_BytesReceived(this.playerid);
    }

    NetStats_MessagesSent(): number {
        return SampFunctions.NetStats_MessagesSent(this.playerid);
    }

    NetStats_BytesSent(): number {
        return SampFunctions.NetStats_BytesSent(this.playerid);
    }

    NetStats_MessagesRecvPerSecond(): number {
        return SampFunctions.NetStats_MessagesRecvPerSecond(this.playerid);
    }

    NetStats_PacketLossPercent(): number {
        return SampFunctions.NetStats_PacketLossPercent(this.playerid);
    }

    NetStats_ConnectionStatus(): number {
        return SampFunctions.NetStats_ConnectionStatus(this.playerid);
    }

    NetStats_GetIpPort(ip_port_len: number): string {
        return SampFunctions.NetStats_GetIpPort(this.playerid, ip_port_len);
    }

    ShowMenuForPlayer(menuid: number): number {
        return SampFunctions.ShowMenuForPlayer(menuid, this.playerid);
    }

    HideMenuForPlayer(menuid: number): number {
        return SampFunctions.HideMenuForPlayer(menuid, this.playerid);
    }

    GetPlayerMenu(): number {
        return SampFunctions.GetPlayerMenu(this.playerid);
    }

    TextDrawShowForPlayer(text: number): number {
        return SampFunctions.TextDrawShowForPlayer(this.playerid, text);
    }

    TextDrawHideForPlayer(text: number): number {
        return SampFunctions.TextDrawHideForPlayer(this.playerid, text);
    }

    GangZoneShowForPlayer(zone: number, color: string): number {
        return SampFunctions.GangZoneShowForPlayer(this.playerid, zone, color);
    }

    GangZoneHideForPlayer(zone: number): number {
        return SampFunctions.GangZoneHideForPlayer(this.playerid, zone);
    }

    GangZoneFlashForPlayer(zone: number, flashcolor: string): number {
        return SampFunctions.GangZoneFlashForPlayer(this.playerid, zone, flashcolor);
    }

    GangZoneStopFlashForPlayer(zone: number): number {
        return SampFunctions.GangZoneStopFlashForPlayer(this.playerid, zone);
    }

    Attach3DTextLabelToPlayer(id: number, OffsetX: number, OffsetY: number, OffsetZ: number): number {
        return SampFunctions.Attach3DTextLabelToPlayer(id, this.playerid, OffsetX, OffsetY, OffsetZ);
    }

    CreatePlayer3DTextLabel(text: string, color: string, X: number, Y: number, Z: number, DrawDistance: number, attachedplayer: number, attachedvehicle: number, testLOS: number): number {
        return SampFunctions.CreatePlayer3DTextLabel(this.playerid, text, color, X, Y, Z, DrawDistance, attachedplayer, attachedvehicle, testLOS);
    }

    DeletePlayer3DTextLabel(id: number): number {
        return SampFunctions.DeletePlayer3DTextLabel(this.playerid, id);
    }

    UpdatePlayer3DTextLabelText(id: number, color: string, text: string): number {
        return SampFunctions.UpdatePlayer3DTextLabelText(this.playerid, id, color, text);
    }

    ShowPlayerSmartDialog(style: number, caption: string, info: string, button1: string, button2: string, callback: SMART_DIALOG_CALLBACK): void {
        return SmartDialogFunctions.ShowPlayerSmartDialog(this.playerid, style, caption, info, button1, button2, callback);
    }

    ShowPlayerDialog(dialogid: number, style: number, caption: string, info: string, button1: string, button2: string): number {
        return SampFunctions.ShowPlayerDialog(this.playerid, dialogid, style, caption, info, button1, button2);
    }

    gpci(maxlen: number): string {
        return SampFunctions.gpci(this.playerid, maxlen);
    }

    AttachObjectToPlayer(objectid: number, OffsetX: number, OffsetY: number, OffsetZ: number, RotX: number, RotY: number, RotZ: number): number {
        return SampFunctions.AttachObjectToPlayer(objectid, this.playerid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ);
    }

    EditObject(objectid: number): number {
        return SampFunctions.EditObject(this.playerid, objectid);
    }

    EditPlayerObject(objectid: number): number {
        return SampFunctions.EditPlayerObject(this.playerid, objectid);
    }

    SelectObject(): number {
        return SampFunctions.SelectObject(this.playerid);
    }

    CancelEdit(): number {
        return SampFunctions.CancelEdit(this.playerid);
    }

    CreatePlayerObject(modelid: number, X: number, Y: number, Z: number, rX: number, rY: number, rZ: number, DrawDistance: number): number {
        return SampFunctions.CreatePlayerObject(this.playerid, modelid, X, Y, Z, rX, rY, rZ, DrawDistance);
    }

    AttachPlayerObjectToVehicle(objectid: number, vehicleid: number, fOffsetX: number, fOffsetY: number, fOffsetZ: number, fRotX: number, fRotY: number, RotZ: number): number {
        return SampFunctions.AttachPlayerObjectToVehicle(this.playerid, objectid, vehicleid, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, RotZ);
    }

    SetPlayerObjectPos(objectid: number, X: number, Y: number, Z: number): number {
        return SampFunctions.SetPlayerObjectPos(this.playerid, objectid, X, Y, Z);
    }

    GetPlayerObjectPos(objectid: number): Array<any> {
        return SampFunctions.GetPlayerObjectPos(this.playerid, objectid);
    }

    SetPlayerObjectRot(objectid: number, RotX: number, RotY: number, RotZ: number): number {
        return SampFunctions.SetPlayerObjectRot(this.playerid, objectid, RotX, RotY, RotZ);
    }

    GetPlayerObjectRot(objectid: number): Array<any> {
        return SampFunctions.GetPlayerObjectRot(this.playerid, objectid);
    }

    GetPlayerObjectModel(objectid: number): number {
        return SampFunctions.GetPlayerObjectModel(this.playerid, objectid);
    }

    SetPlayerObjectNoCameraCol(objectid: number): number {
        return SampFunctions.SetPlayerObjectNoCameraCol(this.playerid, objectid);
    }

    IsValidPlayerObject(objectid: number): number {
        return SampFunctions.IsValidPlayerObject(this.playerid, objectid);
    }

    DestroyPlayerObject(objectid: number): number {
        return SampFunctions.DestroyPlayerObject(this.playerid, objectid);
    }

    MovePlayerObject(objectid: number, X: number, Y: number, Z: number, Speed: number, RotX: number, RotY: number, RotZ: number): number {
        return SampFunctions.MovePlayerObject(this.playerid, objectid, X, Y, Z, Speed, RotX, RotY, RotZ);
    }

    StopPlayerObject(objectid: number): number {
        return SampFunctions.StopPlayerObject(this.playerid, objectid);
    }

    IsPlayerObjectMoving(objectid: number): number {
        return SampFunctions.IsPlayerObjectMoving(this.playerid, objectid);
    }

    SetPlayerObjectMaterial(objectid: number, materialindex: number, modelid: number, txdname: string, texturename: string, materialcolor: string): number {
        return SampFunctions.SetPlayerObjectMaterial(this.playerid, objectid, materialindex, modelid, txdname, texturename, materialcolor);
    }

    SetPlayerObjectMaterialText(objectid: number, text: string, materialindex: number, materialsize: number, fontface: string, fontsize: number, bold: number, fontcolor: string, backcolor: string, textalignment: number): number {
        return SampFunctions.SetPlayerObjectMaterialText(this.playerid, objectid, text, materialindex, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment);
    }

    SetSpawnInfo(team: number, skin: number, x: number, y: number, z: number, rotation: number, weapon1: number, weapon1_ammo: number, weapon2: number, weapon2_ammo: number, weapon3: number, weapon3_ammo: number): number {
        return SampFunctions.SetSpawnInfo(this.playerid, team, skin, x, y, z, rotation, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo);
    }

    SpawnPlayer(): number {
        return SampFunctions.SpawnPlayer(this.playerid);
    }

    SetPlayerPos(x: number, y: number, z: number): number {
        return SampFunctions.SetPlayerPos(this.playerid, x, y, z);
    }

    SetPlayerPosFindZ(x: number, y: number, z: number): number {
        return SampFunctions.SetPlayerPosFindZ(this.playerid, x, y, z);
    }

    GetPlayerPos(): Array<any> {
        return SampFunctions.GetPlayerPos(this.playerid);
    }

    SetPlayerFacingAngle(ang: number): number {
        return SampFunctions.SetPlayerFacingAngle(this.playerid, ang);
    }

    GetPlayerFacingAngle(): number {
        return SampFunctions.GetPlayerFacingAngle(this.playerid);
    }

    IsPlayerInRangeOfPoint(range: number, x: number, y: number, z: number): number {
        return SampFunctions.IsPlayerInRangeOfPoint(this.playerid, range, x, y, z);
    }

    GetPlayerDistanceFromPoint(X: number, Y: number, Z: number): number {
        return SampFunctions.GetPlayerDistanceFromPoint(this.playerid, X, Y, Z);
    }

    IsPlayerStreamedIn(forplayerid: number): number {
        return SampFunctions.IsPlayerStreamedIn(this.playerid, forplayerid);
    }

    SetPlayerInterior(interiorid: number): number {
        return SampFunctions.SetPlayerInterior(this.playerid, interiorid);
    }

    GetPlayerInterior(): number {
        return SampFunctions.GetPlayerInterior(this.playerid);
    }

    SetPlayerHealth(health: number): number {
        return SampFunctions.SetPlayerHealth(this.playerid, health);
    }

    GetPlayerHealth(): number {
        return SampFunctions.GetPlayerHealth(this.playerid);
    }

    SetPlayerArmour(armour: number): number {
        return SampFunctions.SetPlayerArmour(this.playerid, armour);
    }

    GetPlayerArmour(): number {
        return SampFunctions.GetPlayerArmour(this.playerid);
    }

    SetPlayerAmmo(weaponslot: number, ammo: number): number {
        return SampFunctions.SetPlayerAmmo(this.playerid, weaponslot, ammo);
    }

    GetPlayerAmmo(): number {
        return SampFunctions.GetPlayerAmmo(this.playerid);
    }

    GetPlayerWeaponState(): number {
        return SampFunctions.GetPlayerWeaponState(this.playerid);
    }

    GetPlayerTargetPlayer(): number {
        return SampFunctions.GetPlayerTargetPlayer(this.playerid);
    }

    GetPlayerTargetActor(): number {
        return SampFunctions.GetPlayerTargetActor(this.playerid);
    }

    SetPlayerTeam(teamid: number): number {
        return SampFunctions.SetPlayerTeam(this.playerid, teamid);
    }

    GetPlayerTeam(): number {
        return SampFunctions.GetPlayerTeam(this.playerid);
    }

    SetPlayerScore(score: number): number {
        return SampFunctions.SetPlayerScore(this.playerid, score);
    }

    GetPlayerScore(): number {
        return SampFunctions.GetPlayerScore(this.playerid);
    }

    GetPlayerDrunkLevel(): number {
        return SampFunctions.GetPlayerDrunkLevel(this.playerid);
    }

    SetPlayerDrunkLevel(level: number): number {
        return SampFunctions.SetPlayerDrunkLevel(this.playerid, level);
    }

    SetPlayerColor(color: string): number {
        return SampFunctions.SetPlayerColor(this.playerid, color);
    }

    GetPlayerColor(): number {
        return SampFunctions.GetPlayerColor(this.playerid);
    }

    SetPlayerSkin(skinid: number): number {
        return SampFunctions.SetPlayerSkin(this.playerid, skinid);
    }

    GetPlayerSkin(): number {
        return SampFunctions.GetPlayerSkin(this.playerid);
    }

    GivePlayerWeapon(weaponid: number, ammo: number): number {
        return SampFunctions.GivePlayerWeapon(this.playerid, weaponid, ammo);
    }

    ResetPlayerWeapons(): number {
        return SampFunctions.ResetPlayerWeapons(this.playerid);
    }

    SetPlayerArmedWeapon(weaponid: number): number {
        return SampFunctions.SetPlayerArmedWeapon(this.playerid, weaponid);
    }

    GetPlayerWeaponData(slot: number): Array<any> {
        return SampFunctions.GetPlayerWeaponData(this.playerid, slot);
    }

    GivePlayerMoney(money: number): number {
        return SampFunctions.GivePlayerMoney(this.playerid, money);
    }

    ResetPlayerMoney(): number {
        return SampFunctions.ResetPlayerMoney(this.playerid);
    }

    SetPlayerName(name: string): number {
        return SampFunctions.SetPlayerName(this.playerid, name);
    }

    GetPlayerMoney(): number {
        return SampFunctions.GetPlayerMoney(this.playerid);
    }

    GetPlayerState(): number {
        return SampFunctions.GetPlayerState(this.playerid);
    }

    GetPlayerIp(len: number): string {
        return SampFunctions.GetPlayerIp(this.playerid, len);
    }

    GetPlayerPing(): number {
        return SampFunctions.GetPlayerPing(this.playerid);
    }

    GetPlayerWeapon(): number {
        return SampFunctions.GetPlayerWeapon(this.playerid);
    }

    GetPlayerKeys(): Array<any> {
        return SampFunctions.GetPlayerKeys(this.playerid);
    }

    GetPlayerName(len: number): string {
        return SampFunctions.GetPlayerName(this.playerid, len);
    }

    SetPlayerTime(hour: number, minute: number): number {
        return SampFunctions.SetPlayerTime(this.playerid, hour, minute);
    }

    GetPlayerTime(): Array<any> {
        return SampFunctions.GetPlayerTime(this.playerid);
    }

    TogglePlayerClock(toggle: number): number {
        return SampFunctions.TogglePlayerClock(this.playerid, toggle);
    }

    SetPlayerWeather(weather: number): number {
        return SampFunctions.SetPlayerWeather(this.playerid, weather);
    }

    ForceClassSelection(): number {
        return SampFunctions.ForceClassSelection(this.playerid);
    }

    SetPlayerWantedLevel(level: number): number {
        return SampFunctions.SetPlayerWantedLevel(this.playerid, level);
    }

    GetPlayerWantedLevel(): number {
        return SampFunctions.GetPlayerWantedLevel(this.playerid);
    }

    SetPlayerFightingStyle(style: FIGHT_STYLE): number {
        return SampFunctions.SetPlayerFightingStyle(this.playerid, style);
    }

    GetPlayerFightingStyle(): FIGHT_STYLE {
        return SampFunctions.GetPlayerFightingStyle(this.playerid);
    }

    SetPlayerVelocity(X: number, Y: number, Z: number): number {
        return SampFunctions.SetPlayerVelocity(this.playerid, X, Y, Z);
    }

    GetPlayerVelocity(): Array<any> {
        return SampFunctions.GetPlayerVelocity(this.playerid);
    }

    PlayCrimeReportForPlayer(suspectid: number, crime: number): number {
        return SampFunctions.PlayCrimeReportForPlayer(this.playerid, suspectid, crime);
    }

    PlayAudioStreamForPlayer(url: string, posX: number, posY: number, posZ: number, distance: number, usepos: number): number {
        return SampFunctions.PlayAudioStreamForPlayer(this.playerid, url, posX, posY, posZ, distance, usepos);
    }

    StopAudioStreamForPlayer(): number {
        return SampFunctions.StopAudioStreamForPlayer(this.playerid);
    }

    SetPlayerShopName(shopname: string): number {
        return SampFunctions.SetPlayerShopName(this.playerid, shopname);
    }

    SetPlayerSkillLevel(skill: WEAPONSKILL, level: number): number {
        return SampFunctions.SetPlayerSkillLevel(this.playerid, skill, level);
    }

    GetPlayerSurfingVehicleID(): number {
        return SampFunctions.GetPlayerSurfingVehicleID(this.playerid);
    }

    GetPlayerSurfingObjectID(): number {
        return SampFunctions.GetPlayerSurfingObjectID(this.playerid);
    }

    RemoveBuildingForPlayer(modelid: number, fX: number, fY: number, fZ: number, fRadius: number): number {
        return SampFunctions.RemoveBuildingForPlayer(this.playerid, modelid, fX, fY, fZ, fRadius);
    }

    GetPlayerLastShotVectors(): Array<any> {
        return SampFunctions.GetPlayerLastShotVectors(this.playerid);
    }

    SetPlayerAttachedObject(index: number, modelid: number, bone: number, fOffsetX: number, fOffsetY: number, fOffsetZ: number, fRotX: number, fRotY: number, fRotZ: number, fScaleX: number, fScaleY: number, fScaleZ: number, materialcolor1: number, materialcolor2: number): number {
        return SampFunctions.SetPlayerAttachedObject(this.playerid, index, modelid, bone, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, fRotZ, fScaleX, fScaleY, fScaleZ, materialcolor1, materialcolor2);
    }

    RemovePlayerAttachedObject(index: number): number {
        return SampFunctions.RemovePlayerAttachedObject(this.playerid, index);
    }

    IsPlayerAttachedObjectSlotUsed(index: number): number {
        return SampFunctions.IsPlayerAttachedObjectSlotUsed(this.playerid, index);
    }

    EditAttachedObject(index: number): number {
        return SampFunctions.EditAttachedObject(this.playerid, index);
    }

    CreatePlayerTextDraw(x: number, y: number, text: string): number {
        return SampFunctions.CreatePlayerTextDraw(this.playerid, x, y, text);
    }

    PlayerTextDrawDestroy(text: number): void {
        SampFunctions.PlayerTextDrawDestroy(this.playerid, text);
    }

    PlayerTextDrawLetterSize(text: number, x: number, y: number): number {
        return SampFunctions.PlayerTextDrawLetterSize(this.playerid, text, x, y);
    }

    PlayerTextDrawTextSize(text: number, x: number, y: number): number {
        return SampFunctions.PlayerTextDrawTextSize(this.playerid, text, x, y);
    }

    PlayerTextDrawAlignment(text: number, alignment: number): number {
        return SampFunctions.PlayerTextDrawAlignment(this.playerid, text, alignment);
    }

    PlayerTextDrawColor(text: number, color: string): number {
        return SampFunctions.PlayerTextDrawColor(this.playerid, text, color);
    }

    PlayerTextDrawUseBox(text: number, use: 0 | 1): number {
        return SampFunctions.PlayerTextDrawUseBox(this.playerid, text, use);
    }

    PlayerTextDrawBoxColor(text: number, color: string): number {
        return SampFunctions.PlayerTextDrawBoxColor(this.playerid, text, color);
    }

    PlayerTextDrawSetShadow(text: number, size: number): number {
        return SampFunctions.PlayerTextDrawSetShadow(this.playerid, text, size);
    }

    PlayerTextDrawSetOutline(text: number, size: number): number {
        return SampFunctions.PlayerTextDrawSetOutline(this.playerid, text, size);
    }

    PlayerTextDrawBackgroundColor(text: number, color: string): number {
        return SampFunctions.PlayerTextDrawBackgroundColor(this.playerid, text, color);
    }

    PlayerTextDrawFont(text: number, font: number): number {
        return SampFunctions.PlayerTextDrawFont(this.playerid, text, font);
    }

    PlayerTextDrawSetProportional(text: number, set: number): number {
        return SampFunctions.PlayerTextDrawSetProportional(this.playerid, text, set);
    }

    PlayerTextDrawSetSelectable(text: number, set: number): number {
        return SampFunctions.PlayerTextDrawSetSelectable(this.playerid, text, set);
    }

    PlayerTextDrawShow(text: number): number {
        return SampFunctions.PlayerTextDrawShow(this.playerid, text);
    }

    PlayerTextDrawHide(text: number): number {
        return SampFunctions.PlayerTextDrawHide(this.playerid, text);
    }

    PlayerTextDrawSetString(text: number, string: string): number {
        return SampFunctions.PlayerTextDrawSetString(this.playerid, text, string);
    }

    PlayerTextDrawSetPreviewModel(text: number, modelindex: number): number {
        return SampFunctions.PlayerTextDrawSetPreviewModel(this.playerid, text, modelindex);
    }

    PlayerTextDrawSetPreviewRot(text: number, fRotX: number, fRotY: number, fRotZ: number, fZoom: number): number {
        return SampFunctions.PlayerTextDrawSetPreviewRot(this.playerid, text, fRotX, fRotY, fRotZ, fZoom);
    }

    PlayerTextDrawSetPreviewVehCol(text: number, color1: number, color2: number): number {
        return SampFunctions.PlayerTextDrawSetPreviewVehCol(this.playerid, text, color1, color2);
    }

    SetPVarInt(varname: string, int_value: number): number {
        return SampFunctions.SetPVarInt(this.playerid, varname, int_value);
    }

    GetPVarInt(varname: string): number {
        return SampFunctions.GetPVarInt(this.playerid, varname);
    }

    SetPVarString(varname: string, string_value: string): number {
        return SampFunctions.SetPVarString(this.playerid, varname, string_value);
    }

    GetPVarString(varname: string, len: number): string {
        return SampFunctions.GetPVarString(this.playerid, varname, len);
    }

    SetPVarFloat(varname: string, float_value: number): number {
        return SampFunctions.SetPVarFloat(this.playerid, varname, float_value);
    }

    GetPVarFloat(varname: string): number {
        return SampFunctions.GetPVarFloat(this.playerid, varname);
    }

    DeletePVar(varname: string): number {
        return SampFunctions.DeletePVar(this.playerid, varname);
    }

    GetPVarsUpperIndex(): number {
        return SampFunctions.GetPVarsUpperIndex(this.playerid);
    }

    GetPVarNameAtIndex(index: number, ret_len: number): string {
        return SampFunctions.GetPVarNameAtIndex(this.playerid, index, ret_len);
    }

    GetPVarType(varname: string): number {
        return SampFunctions.GetPVarType(this.playerid, varname);
    }

    SetPlayerChatBubble(text: string, color: string, drawdistance: number, expiretime: number): number {
        return SampFunctions.SetPlayerChatBubble(this.playerid, text, color, drawdistance, expiretime);
    }

    PutPlayerInVehicle(vehicleid: number, seatid: number): number {
        return SampFunctions.PutPlayerInVehicle(this.playerid, vehicleid, seatid);
    }

    GetPlayerVehicleID(): number {
        return SampFunctions.GetPlayerVehicleID(this.playerid);
    }

    GetPlayerVehicleSeat(): number {
        return SampFunctions.GetPlayerVehicleSeat(this.playerid);
    }

    RemovePlayerFromVehicle(): number {
        return SampFunctions.RemovePlayerFromVehicle(this.playerid);
    }

    TogglePlayerControllable(toggle: number): number {
        return SampFunctions.TogglePlayerControllable(this.playerid, toggle);
    }

    PlayerPlaySound(soundid: number, x: number, y: number, z: number): number {
        return SampFunctions.PlayerPlaySound(this.playerid, soundid, x, y, z);
    }

    ApplyAnimation(animlib: string, animname: string, fDelta: number, loop: number, lockx: number, locky: number, freeze: number, time: number, forcesync: number): number {
        return SampFunctions.ApplyAnimation(this.playerid, animlib, animname, fDelta, loop, lockx, locky, freeze, time, forcesync);
    }

    ClearAnimations(forcesync: number): number {
        return SampFunctions.ClearAnimations(this.playerid, forcesync);
    }

    GetPlayerAnimationIndex(): number {
        return SampFunctions.GetPlayerAnimationIndex(this.playerid);
    }

    GetPlayerSpecialAction(): number {
        return SampFunctions.GetPlayerSpecialAction(this.playerid);
    }

    SetPlayerSpecialAction(actionid: number): number {
        return SampFunctions.SetPlayerSpecialAction(this.playerid, actionid);
    }

    DisableRemoteVehicleCollisions(disable: number): number {
        return SampFunctions.DisableRemoteVehicleCollisions(this.playerid, disable);
    }

    SetPlayerCheckpoint(x: number, y: number, z: number, size: number): number {
        return SampFunctions.SetPlayerCheckpoint(this.playerid, x, y, z, size);
    }

    DisablePlayerCheckpoint(): number {
        return SampFunctions.DisablePlayerCheckpoint(this.playerid);
    }

    SetPlayerRaceCheckpoint(type: number, x: number, y: number, z: number, nextx: number, nexty: number, nextz: number, size: number): number {
        return SampFunctions.SetPlayerRaceCheckpoint(this.playerid, type, x, y, z, nextx, nexty, nextz, size);
    }

    DisablePlayerRaceCheckpoint(): number {
        return SampFunctions.DisablePlayerRaceCheckpoint(this.playerid);
    }

    SetPlayerWorldBounds(x_max: number, x_min: number, y_max: number, y_min: number): number {
        return SampFunctions.SetPlayerWorldBounds(this.playerid, x_max, x_min, y_max, y_min);
    }

    SetPlayerMarkerForPlayer(showplayerid: number, color: string): number {
        return SampFunctions.SetPlayerMarkerForPlayer(this.playerid, showplayerid, color);
    }

    ShowPlayerNameTagForPlayer(showplayerid: number, show: number): number {
        return SampFunctions.ShowPlayerNameTagForPlayer(this.playerid, showplayerid, show);
    }

    SetPlayerMapIcon(iconid: number, x: number, y: number, z: number, markertype: number, color: string, style: number): number {
        return SampFunctions.SetPlayerMapIcon(this.playerid, iconid, x, y, z, markertype, color, style);
    }

    RemovePlayerMapIcon(iconid: number): number {
        return SampFunctions.RemovePlayerMapIcon(this.playerid, iconid);
    }

    AllowPlayerTeleport(allow: number): number {
        return SampFunctions.AllowPlayerTeleport(this.playerid, allow);
    }

    SetPlayerCameraPos(x: number, y: number, z: number): number {
        return SampFunctions.SetPlayerCameraPos(this.playerid, x, y, z);
    }

    SetPlayerCameraLookAt(x: number, y: number, z: number, cut: number): number {
        return SampFunctions.SetPlayerCameraLookAt(this.playerid, x, y, z, cut);
    }

    SetCameraBehindPlayer(): number {
        return SampFunctions.SetCameraBehindPlayer(this.playerid);
    }

    GetPlayerCameraPos(): Array<any> {
        return SampFunctions.GetPlayerCameraPos(this.playerid);
    }

    GetPlayerCameraFrontVector(): Array<any> {
        return SampFunctions.GetPlayerCameraFrontVector(this.playerid);
    }

    GetPlayerCameraMode(): number {
        return SampFunctions.GetPlayerCameraMode(this.playerid);
    }

    EnablePlayerCameraTarget(enable: number): number {
        return SampFunctions.EnablePlayerCameraTarget(this.playerid, enable);
    }

    GetPlayerCameraTargetObject(): number {
        return SampFunctions.GetPlayerCameraTargetObject(this.playerid);
    }

    GetPlayerCameraTargetVehicle(): number {
        return SampFunctions.GetPlayerCameraTargetVehicle(this.playerid);
    }

    GetPlayerCameraTargetPlayer(): number {
        return SampFunctions.GetPlayerCameraTargetPlayer(this.playerid);
    }

    GetPlayerCameraTargetActor(): number {
        return SampFunctions.GetPlayerCameraTargetActor(this.playerid);
    }

    GetPlayerCameraAspectRatio(): number {
        return SampFunctions.GetPlayerCameraAspectRatio(this.playerid);
    }

    GetPlayerCameraZoom(): number {
        return SampFunctions.GetPlayerCameraZoom(this.playerid);
    }

    AttachCameraToObject(objectid: number): number {
        return SampFunctions.AttachCameraToObject(this.playerid, objectid);
    }

    AttachCameraToPlayerObject(playerobjectid: number): number {
        return SampFunctions.AttachCameraToPlayerObject(this.playerid, playerobjectid);
    }

    InterpolateCameraPos(FromX: number, FromY: number, FromZ: number, ToX: number, ToY: number, ToZ: number, time: number, cut: number): number {
        return SampFunctions.InterpolateCameraPos(this.playerid, FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut);
    }

    InterpolateCameraLookAt(FromX: number, FromY: number, FromZ: number, ToX: number, ToY: number, ToZ: number, time: number, cut: number): number {
        return SampFunctions.InterpolateCameraLookAt(this.playerid, FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut);
    }

    IsPlayerConnected(): number {
        return SampFunctions.IsPlayerConnected(this.playerid);
    }

    IsPlayerInVehicle(vehicleid: number): number {
        return SampFunctions.IsPlayerInVehicle(this.playerid, vehicleid);
    }

    IsPlayerInAnyVehicle(): number {
        return SampFunctions.IsPlayerInAnyVehicle(this.playerid);
    }

    IsPlayerInCheckpoint(): number {
        return SampFunctions.IsPlayerInCheckpoint(this.playerid);
    }

    IsPlayerInRaceCheckpoint(): number {
        return SampFunctions.IsPlayerInRaceCheckpoint(this.playerid);
    }

    SetPlayerVirtualWorld(worldid: number): number {
        return SampFunctions.SetPlayerVirtualWorld(this.playerid, worldid);
    }

    GetPlayerVirtualWorld(): number {
        return SampFunctions.GetPlayerVirtualWorld(this.playerid);
    }

    EnableStuntBonusForPlayer(enable: number): number {
        return SampFunctions.EnableStuntBonusForPlayer(this.playerid, enable);
    }

    TogglePlayerSpectating(toggle: number): number {
        return SampFunctions.TogglePlayerSpectating(this.playerid, toggle);
    }

    PlayerSpectatePlayer(targetplayerid: number, mode: number): number {
        return SampFunctions.PlayerSpectatePlayer(this.playerid, targetplayerid, mode);
    }

    PlayerSpectateVehicle(targetvehicleid: number, mode: number): number {
        return SampFunctions.PlayerSpectateVehicle(this.playerid, targetvehicleid, mode);
    }

    StartRecordingPlayerData(recordtype: number, recordname: string): number {
        return SampFunctions.StartRecordingPlayerData(this.playerid, recordtype, recordname);
    }

    StopRecordingPlayerData(): number {
        return SampFunctions.StopRecordingPlayerData(this.playerid);
    }

    SelectTextDraw(hovercolor: string): number {
        return SampFunctions.SelectTextDraw(this.playerid, hovercolor);
    }

    CancelSelectTextDraw(): number {
        return SampFunctions.CancelSelectTextDraw(this.playerid);
    }

    CreateExplosionForPlayer(X: number, Y: number, Z: number, type: number, Radius: number): number {
        return SampFunctions.CreateExplosionForPlayer(this.playerid, X, Y, Z, type, Radius);
    }

    SendClientCheck(type: number, memAddr: number, memOffset: number, byteCount: number): number {
        return SampFunctions.SendClientCheck(this.playerid, type, memAddr, memOffset, byteCount);
    }

    SetVehicleParamsForPlayer(vehicleid: number, objective: number, doorslocked: number): number {
        return SampFunctions.SetVehicleParamsForPlayer(vehicleid, this.playerid, objective, doorslocked);
    }
}
