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
import {SampPlayer} from "./SampPlayer";
import {KEY, BODY_PARTS} from "./SampEnum";
import {SampPlayers} from "./SampPlayers";

export const OnGameModeInit = (func: () => void): void => {
    SampEvents.OnGameModeInit(func);
};
export const OnGameModeExit = (func: () => void): void => {
    SampEvents.OnGameModeExit(func);
};
export const OnFilterScriptInit = (func: () => void): void => {
    SampEvents.OnFilterScriptInit(func);
};
export const OnFilterScriptExit = (func: () => void): void => {
    SampEvents.OnFilterScriptExit(func);
};
export const OnPlayerConnect = (func: (player: SampPlayer) => void): void => {
    SampEvents.OnPlayerConnect(func);
};
export const OnPlayerDisconnect = (func: (player: SampPlayer, reason: number) => void): void => {
    SampEvents.OnPlayerDisconnect(func);
};
export const OnPlayerSpawn = (func: (player: SampPlayer) => void): void => {
    SampEvents.OnPlayerSpawn(func);
};
export const OnPlayerDeath = (func: (player: SampPlayer, killerid: SampPlayer, reason: number) => void): void => {
    SampEvents.OnPlayerDeath(func);
};
export const OnVehicleSpawn = (func: (vehicleid: number) => void): void => {
    SampEvents.OnVehicleSpawn(func);
};
export const OnVehicleDeath = (func: (vehicleid: number, killerid: SampPlayer) => void): void => {
    SampEvents.OnVehicleDeath(func);
};
export const OnPlayerText = (func: (player: SampPlayer, text: string) => void): void => {
    SampEvents.OnPlayerText(func);
};
export const OnPlayerCommandText = (func: (player: SampPlayer, cmdtext: string) => void): void => {
    SampEvents.OnPlayerCommandText(func);
};
export const OnPlayerRequestClass = (func: (player: SampPlayer, classid: number) => void): void => {
    SampEvents.OnPlayerRequestClass(func);
};
export const OnPlayerEnterVehicle = (func: (player: SampPlayer, vehicleid: number, ispassenger: number) => void): void => {
    SampEvents.OnPlayerEnterVehicle(func);
};
export const OnPlayerExitVehicle = (func: (player: SampPlayer, vehicleid: number) => void): void => {
    SampEvents.OnPlayerExitVehicle(func);
};
export const OnPlayerStateChange = (func: (player: SampPlayer, newstate: number, oldstate: number) => void): void => {
    SampEvents.OnPlayerStateChange(func);
};
export const OnPlayerEnterCheckpoint = (func: (player: SampPlayer) => void): void => {
    SampEvents.OnPlayerEnterCheckpoint(func);
};
export const OnPlayerLeaveCheckpoint = (func: (player: SampPlayer) => void): void => {
    SampEvents.OnPlayerLeaveCheckpoint(func);
};
export const OnPlayerEnterRaceCheckpoint = (func: (player: SampPlayer) => void): void => {
    SampEvents.OnPlayerEnterRaceCheckpoint(func);
};
export const OnPlayerLeaveRaceCheckpoint = (func: (player: SampPlayer) => void): void => {
    SampEvents.OnPlayerLeaveRaceCheckpoint(func);
};
export const OnRconCommand = (func: (cmd: string) => void): void => {
    SampEvents.OnRconCommand(func);
};
export const OnPlayerRequestSpawn = (func: (player: SampPlayer) => void): void => {
    SampEvents.OnPlayerRequestSpawn(func);
};
export const OnObjectMoved = (func: (objectid: number) => void): void => {
    SampEvents.OnObjectMoved(func);
};
export const OnPlayerObjectMoved = (func: (player: SampPlayer, objectid: number) => void): void => {
    SampEvents.OnPlayerObjectMoved(func);
};
export const OnPlayerPickUpPickup = (func: (player: SampPlayer, pickupid: number) => void): void => {
    SampEvents.OnPlayerPickUpPickup(func);
};
export const OnVehicleMod = (func: (player: SampPlayer, vehicleid: number, componentid: number) => void): void => {
    SampEvents.OnVehicleMod(func);
};
export const OnEnterExitModShop = (func: (player: SampPlayer, enterexit: number, interiorid: number) => void): void => {
    SampEvents.OnEnterExitModShop(func);
};
export const OnVehiclePaintjob = (func: (player: SampPlayer, vehicleid: number, paintjobid: number) => void): void => {
    SampEvents.OnVehiclePaintjob(func);
};
export const OnVehicleRespray = (func: (player: SampPlayer, vehicleid: number, color1: number, color2: number) => void): void => {
    SampEvents.OnVehicleRespray(func);
};
export const OnVehicleDamageStatusUpdate = (func: (vehicleid: number, player: SampPlayer) => void): void => {
    SampEvents.OnVehicleDamageStatusUpdate(func);
};
export const OnUnoccupiedVehicleUpdate = (func: (vehicleid: number, player: SampPlayer, passenger_seat: number, new_x: number, new_y: number, new_z: number, vel_x: number, vel_y: number, vel_z: number) => void): void => {
    SampEvents.OnUnoccupiedVehicleUpdate(func);
};
export const OnPlayerSelectedMenuRow = (func: (player: SampPlayer, row: number) => void): void => {
    SampEvents.OnPlayerSelectedMenuRow(func);
};
export const OnPlayerExitedMenu = (func: (player: SampPlayer) => void): void => {
    SampEvents.OnPlayerExitedMenu(func);
};
export const OnPlayerInteriorChange = (func: (player: SampPlayer, newinteriorid: number, oldinteriorid: number) => void): void => {
    SampEvents.OnPlayerInteriorChange(func);
};
export const OnPlayerKeyStateChange = (func: (player: SampPlayer, newkeys: KEY, oldkeys: KEY) => void): void => {
    SampEvents.OnPlayerKeyStateChange(func);
};
export const OnRconLoginAttempt = (func: (ip: string, password: string, success: number) => void): void => {
    SampEvents.OnRconLoginAttempt(func);
};
export const OnPlayerUpdate = (func: (player: SampPlayer) => void): void => {
    SampEvents.OnPlayerUpdate(func);
};
export const OnPlayerStreamIn = (func: (player: SampPlayer, forplayer: SampPlayer) => void): void => {
    SampEvents.OnPlayerStreamIn(func);
};
export const OnPlayerStreamOut = (func: (player: SampPlayer, forplayer: SampPlayer) => void): void => {
    SampEvents.OnPlayerStreamOut(func);
};
export const OnVehicleStreamIn = (func: (vehicleid: number, forplayer: SampPlayer) => void): void => {
    SampEvents.OnVehicleStreamIn(func);
};
export const OnVehicleStreamOut = (func: (vehicleid: number, forplayer: SampPlayer) => void): void => {
    SampEvents.OnVehicleStreamOut(func);
};
export const OnActorStreamIn = (func: (actorid: number, forplayer: SampPlayer) => void): void => {
    SampEvents.OnActorStreamIn(func);
};
export const OnActorStreamOut = (func: (actorid: number, forplayer: SampPlayer) => void): void => {
    SampEvents.OnActorStreamOut(func);
};
export const OnDialogResponse = (func: (player: SampPlayer, dialogid: number, response: number, listitem: number, inputtext: string) => void): void => {
    SampEvents.OnDialogResponse(func);
};
export const OnPlayerTakeDamage = (func: (player: SampPlayer, issuerid: number, amount: number, weaponid: number, bodypart: BODY_PARTS) => void): void => {
    SampEvents.OnPlayerTakeDamage(func);
};
export const OnPlayerGiveDamage = (func: (player: SampPlayer, damagedid: number, amount: number, weaponid: number, bodypart: number) => void): void => {
    SampEvents.OnPlayerGiveDamage(func);
};
export const OnPlayerGiveDamageActor = (func: (player: SampPlayer, damaged_actorid: number, amount: number, weaponid: number, bodypart: number) => void): void => {
    SampEvents.OnPlayerGiveDamageActor(func);
};
export const OnPlayerClickMap = (func: (player: SampPlayer, fX: number, fY: number, fZ: number) => void): void => {
    SampEvents.OnPlayerClickMap(func);
};
export const OnPlayerClickTextDraw = (func: (player: SampPlayer, clickedid: number) => void): void => {
    SampEvents.OnPlayerClickTextDraw(func);
};
export const OnPlayerClickPlayerTextDraw = (func: (player: SampPlayer, playertextid: number) => void): void => {
    SampEvents.OnPlayerClickPlayerTextDraw(func);
};
export const OnIncomingConnection = (func: (player: SampPlayer, ip_address: string, port: number) => void): void => {
    SampEvents.OnIncomingConnection(func);
};
export const OnTrailerUpdate = (func: (player: SampPlayer, vehicleid: number) => void): void => {
    SampEvents.OnTrailerUpdate(func);
};
export const OnVehicleSirenStateChange = (func: (player: SampPlayer, vehicleid: number, newstate: number) => void): void => {
    SampEvents.OnVehicleSirenStateChange(func);
};
export const OnPlayerFinishedDownloading = (func: (player: SampPlayer, virtualworld: number) => void): void => {
    SampEvents.OnPlayerFinishedDownloading(func);
};
export const OnPlayerClickPlayer = (func: (player: SampPlayer, clickedplayer: SampPlayer, source: number) => void): void => {
    SampEvents.OnPlayerClickPlayer(func);
};
export const OnPlayerSelectObject = (func: (player: SampPlayer, type: number, objectid: number, modelid: number, fX: number, fY: number, fZ: number) => void): void => {
    SampEvents.OnPlayerSelectObject(func);
};
export const OnPlayerWeaponShot = (func: (player: SampPlayer, weaponid: number, hittype: number, hitid: number, fX: number, fY: number, fZ: number) => void): void => {
    SampEvents.OnPlayerWeaponShot(func);
};
export const OnClientCheckResponse = (func: (player: SampPlayer, actionid: number, memaddr: number, retndata: number) => void): void => {
    SampEvents.OnClientCheckResponse(func);
};
export const OnScriptCash = (func: (player: SampPlayer, amount: number, source: number) => void): void => {
    SampEvents.OnScriptCash(func);
};


export class SampEvents {
    static OnGameModeInit(func: () => void) {
        samp.on('OnGameModeInit', func);
    }

    static OnGameModeExit(func: () => void) {
        samp.on('OnGameModeExit', func);
    }

    static OnFilterScriptInit(func: () => void) {
        samp.on('OnFilterScriptInit', func);
    }

    static OnFilterScriptExit(func: () => void) {
        samp.on('OnFilterScriptExit', func);
    }

    static OnPlayerConnect(func: (player: SampPlayer) => void) {
        samp.on('OnPlayerConnect', ((playerid) => func(SampPlayers.getNewClass(playerid))));
    }

    static OnPlayerDisconnect(func: (player: SampPlayer, reason: number) => void) {
        samp.on('OnPlayerDisconnect', ((playerid, reason) => func(SampPlayers.removeClass(playerid), reason)));
    }

    static OnPlayerSpawn(func: (player: SampPlayer) => void) {
        samp.on('OnPlayerSpawn', ((playerid) => func(SampPlayers.getClass(playerid))));
    }

    static OnPlayerDeath(func: (player: SampPlayer, killerid: SampPlayer, reason: number) => void) {
        samp.on('OnPlayerDeath', ((playerid, killerid, reason) => func(SampPlayers.getClass(playerid), SampPlayers.getClass(killerid), reason)));
    }

    static OnVehicleSpawn(func: (vehicleid: number) => void) {
        samp.on('OnVehicleSpawn', func);
    }

    static OnVehicleDeath(func: (vehicleid: number, killerid: SampPlayer) => void) {
        samp.on('OnVehicleDeath', ((vehicleid, playerid) => func(vehicleid, SampPlayers.getClass(playerid))));
    }

    static OnPlayerText(func: (player: SampPlayer, text: string) => void) {
        samp.on('OnPlayerText', ((playerid, text) => func(SampPlayers.getClass(playerid), text)));
    }

    static OnPlayerCommandText(func: (player: SampPlayer, cmdtext: string) => void) {
        samp.on('OnPlayerCommandText', ((playerid, cmdtext) => func(SampPlayers.getClass(playerid), cmdtext)));
    }

    static OnPlayerRequestClass(func: (player: SampPlayer, classid: number) => void) {
        samp.on('OnPlayerRequestClass', ((playerid, classid) => func(SampPlayers.getClass(playerid), classid)));
    }

    static OnPlayerEnterVehicle(func: (player: SampPlayer, vehicleid: number, ispassenger: number) => void) {
        samp.on('OnPlayerEnterVehicle', ((playerid, vehicleid, ispassenger) => func(SampPlayers.getClass(playerid), vehicleid, ispassenger)));
    }

    static OnPlayerExitVehicle(func: (player: SampPlayer, vehicleid: number) => void) {
        samp.on('OnPlayerExitVehicle', ((playerid, vehicleid) => func(SampPlayers.getClass(playerid), vehicleid)));
    }

    static OnPlayerStateChange(func: (player: SampPlayer, newstate: number, oldstate: number) => void) {
        samp.on('OnPlayerStateChange', ((playerid, newstate, oldstate) => func(SampPlayers.getClass(playerid), newstate, oldstate)));
    }

    static OnPlayerEnterCheckpoint(func: (player: SampPlayer) => void) {
        samp.on('OnPlayerEnterCheckpoint', ((playerid) => func(SampPlayers.getClass(playerid))));
    }

    static OnPlayerLeaveCheckpoint(func: (player: SampPlayer) => void) {
        samp.on('OnPlayerLeaveCheckpoint', ((playerid) => func(SampPlayers.getClass(playerid))));
    }

    static OnPlayerEnterRaceCheckpoint(func: (player: SampPlayer) => void) {
        samp.on('OnPlayerEnterRaceCheckpoint', ((playerid) => func(SampPlayers.getClass(playerid))));
    }

    static OnPlayerLeaveRaceCheckpoint(func: (player: SampPlayer) => void) {
        samp.on('OnPlayerLeaveRaceCheckpoint', ((playerid) => func(SampPlayers.getClass(playerid))));
    }

    static OnRconCommand(func: (cmd: string) => void) {
        samp.on('OnRconCommand', func);
    }

    static OnPlayerRequestSpawn(func: (player: SampPlayer) => void) {
        samp.on('OnPlayerRequestSpawn', ((playerid) => func(SampPlayers.getClass(playerid))));
    }

    static OnObjectMoved(func: (objectid: number) => void) {
        samp.on('OnObjectMoved', func);
    }

    static OnPlayerObjectMoved(func: (player: SampPlayer, objectid: number) => void) {
        samp.on('OnPlayerObjectMoved', ((playerid, objectid) => func(SampPlayers.getClass(playerid), objectid)));
    }

    static OnPlayerPickUpPickup(func: (player: SampPlayer, pickupid: number) => void) {
        samp.on('OnPlayerPickUpPickup', ((playerid, pickupid) => func(SampPlayers.getClass(playerid), pickupid)));
    }

    static OnVehicleMod(func: (player: SampPlayer, vehicleid: number, componentid: number) => void) {
        samp.on('OnVehicleMod', ((playerid, vehicleid, componentid) => func(SampPlayers.getClass(playerid), vehicleid, componentid)));
    }

    static OnEnterExitModShop(func: (player: SampPlayer, enterexit: number, interiorid: number) => void) {
        samp.on('OnEnterExitModShop', ((playerid, enterexit, interiorid) => func(SampPlayers.getClass(playerid), enterexit, interiorid)));
    }

    static OnVehiclePaintjob(func: (player: SampPlayer, vehicleid: number, paintjobid: number) => void) {
        samp.on('OnVehiclePaintjob', ((playerid, vehicleid, paintjobid) => func(SampPlayers.getClass(playerid), vehicleid, paintjobid)));
    }

    static OnVehicleRespray(func: (player: SampPlayer, vehicleid: number, color1: number, color2: number) => void) {
        samp.on('OnVehicleRespray', ((playerid, vehicleid, color1, color2) => func(SampPlayers.getClass(playerid), vehicleid, color1, color2)));
    }

    static OnVehicleDamageStatusUpdate(func: (vehicleid: number, player: SampPlayer) => void) {
        samp.on('OnVehicleDamageStatusUpdate', ((vehicleid, playerid) => func(vehicleid, SampPlayers.getClass(playerid))));
    }

    static OnUnoccupiedVehicleUpdate(func: (vehicleid: number, player: SampPlayer, passenger_seat: number, new_x: number, new_y: number, new_z: number, vel_x: number, vel_y: number, vel_z: number) => void) {
        samp.on('OnUnoccupiedVehicleUpdate', ((vehicleid, playerid, passenger_seat, new_x, new_y, new_z, vel_x, vel_y, vel_z) => func(vehicleid, SampPlayers.getClass(playerid), passenger_seat, new_x, new_y, new_z, vel_x, vel_y, vel_z)));
    }

    static OnPlayerSelectedMenuRow(func: (player: SampPlayer, row: number) => void) {
        samp.on('OnPlayerSelectedMenuRow', ((playerid, row) => func(SampPlayers.getClass(playerid), row)));
    }

    static OnPlayerExitedMenu(func: (player: SampPlayer) => void) {
        samp.on('OnPlayerExitedMenu', ((playerid) => func(SampPlayers.getClass(playerid))));
    }

    static OnPlayerInteriorChange(func: (player: SampPlayer, newinteriorid: number, oldinteriorid: number) => void) {
        samp.on('OnPlayerInteriorChange', ((playerid, newinteriorid, oldinteriorid) => func(SampPlayers.getClass(playerid), newinteriorid, oldinteriorid)));
    }

    static OnPlayerKeyStateChange(func: (player: SampPlayer, newkeys: KEY, oldkeys: KEY) => void) {
        samp.on('OnPlayerKeyStateChange', ((playerid, newkeys, oldkeys) => func(SampPlayers.getClass(playerid), newkeys, oldkeys)));
    }

    static OnRconLoginAttempt(func: (ip: string, password: string, success: number) => void) {
        samp.on('OnRconLoginAttempt', func);
    }

    static OnPlayerUpdate(func: (player: SampPlayer) => void) {
        samp.on('OnPlayerUpdate', ((playerid) => func(SampPlayers.getClass(playerid))));
    }

    static OnPlayerStreamIn(func: (player: SampPlayer, forplayer: SampPlayer) => void) {
        samp.on('OnPlayerStreamIn', ((playerid, forplayerid) => func(SampPlayers.getClass(playerid), SampPlayers.getClass(forplayerid))));
    }

    static OnPlayerStreamOut(func: (player: SampPlayer, forplayer: SampPlayer) => void) {
        samp.on('OnPlayerStreamOut', ((playerid, forplayerid) => func(SampPlayers.getClass(playerid), SampPlayers.getClass(forplayerid))));
    }

    static OnVehicleStreamIn(func: (vehicleid: number, forplayer: SampPlayer) => void) {
        samp.on('OnVehicleStreamIn', ((vehicleid, forplayerid) => func(vehicleid, SampPlayers.getClass(forplayerid))));
    }

    static OnVehicleStreamOut(func: (vehicleid: number, forplayer: SampPlayer) => void) {
        samp.on('OnVehicleStreamOut', ((vehicleid, forplayerid) => func(vehicleid, SampPlayers.getClass(forplayerid))));
    }

    static OnActorStreamIn(func: (actorid: number, forplayer: SampPlayer) => void) {
        samp.on('OnActorStreamIn', ((actorid, forplayerid) => func(actorid, SampPlayers.getClass(forplayerid))));
    }

    static OnActorStreamOut(func: (actorid: number, forplayer: SampPlayer) => void) {
        samp.on('OnActorStreamOut', ((actorid, forplayerid) => func(actorid, SampPlayers.getClass(forplayerid))));
    }

    static OnDialogResponse(func: (player: SampPlayer, dialogid: number, response: number, listitem: number, inputtext: string) => void) {
        samp.on('OnDialogResponse', ((playerid, dialogid, response, listitem, inputtext) => func(SampPlayers.getClass(playerid), dialogid, response, listitem, inputtext)));
    }

    static OnPlayerTakeDamage(func: (player: SampPlayer, issuerid: number, amount: number, weaponid: number, bodypart: BODY_PARTS) => void) {
        samp.on('OnPlayerTakeDamage', ((playerid, issuerid, amount, weaponid, bodypart) => func(SampPlayers.getClass(playerid), issuerid, amount, weaponid, bodypart)));
    }

    static OnPlayerGiveDamage(func: (player: SampPlayer, damagedid: number, amount: number, weaponid: number, bodypart: number) => void) {
        samp.on('OnPlayerGiveDamage', ((playerid, damagedid, amount, weaponid, bodypart) => func(SampPlayers.getClass(playerid), damagedid, amount, weaponid, bodypart)));
    }

    static OnPlayerGiveDamageActor(func: (player: SampPlayer, damaged_actorid: number, amount: number, weaponid: number, bodypart: number) => void) {
        samp.on('OnPlayerGiveDamageActor', ((playerid, damaged_actorid, amount, weaponid, bodypart) => func(SampPlayers.getClass(playerid), damaged_actorid, amount, weaponid, bodypart)));
    }

    static OnPlayerClickMap(func: (player: SampPlayer, fX: number, fY: number, fZ: number) => void) {
        samp.on('OnPlayerClickMap', ((playerid, fX, fY, fZ) => func(SampPlayers.getClass(playerid), fX, fY, fZ)));
    }

    static OnPlayerClickTextDraw(func: (player: SampPlayer, clickedid: number) => void) {
        samp.on('OnPlayerClickTextDraw', ((playerid, clickedid) => func(SampPlayers.getClass(playerid), clickedid)));
    }

    static OnPlayerClickPlayerTextDraw(func: (player: SampPlayer, playertextid: number) => void) {
        samp.on('OnPlayerClickPlayerTextDraw', ((playerid, playertextid) => func(SampPlayers.getClass(playerid), playertextid)));
    }

    static OnIncomingConnection(func: (player: SampPlayer, ip_address: string, port: number) => void) {
        samp.on('OnIncomingConnection', ((playerid, ip_address, port) => func(SampPlayers.getClass(playerid), ip_address, port)));
    }

    static OnTrailerUpdate(func: (player: SampPlayer, vehicleid: number) => void) {
        samp.on('OnTrailerUpdate', ((playerid, vehicleid) => func(SampPlayers.getClass(playerid), vehicleid)));
    }

    static OnVehicleSirenStateChange(func: (player: SampPlayer, vehicleid: number, newstate: number) => void) {
        samp.on('OnVehicleSirenStateChange', ((playerid, vehicleid, newstate) => func(SampPlayers.getClass(playerid), vehicleid, newstate)));
    }

    static OnPlayerFinishedDownloading(func: (player: SampPlayer, virtualworld: number) => void) {
        samp.on('OnPlayerFinishedDownloading', ((playerid, virtualworld) => func(SampPlayers.getClass(playerid), virtualworld)));
    }

    static OnPlayerClickPlayer(func: (player: SampPlayer, clickedplayer: SampPlayer, source: number) => void) {
        samp.on('OnPlayerClickPlayer', ((playerid, clickedplayerid, source) => func(SampPlayers.getClass(playerid), SampPlayers.getClass(clickedplayerid), source)));
    }

    static OnPlayerSelectObject(func: (player: SampPlayer, type: number, objectid: number, modelid: number, fX: number, fY: number, fZ: number) => void) {
        samp.on('OnPlayerSelectObject', ((playerid, type, objectid, modelid, fX, fY, fZ) => func(SampPlayers.getClass(playerid), type, objectid, modelid, fX, fY, fZ)));
    }

    static OnPlayerWeaponShot(func: (player: SampPlayer, weaponid: number, hittype: number, hitid: number, fX: number, fY: number, fZ: number) => void) {
        samp.on('OnPlayerWeaponShot', ((playerid, weaponid, hittype, hitid, fX, fY, fZ) => func(SampPlayers.getClass(playerid), weaponid, hittype, hitid, fX, fY, fZ)));
    }

    static OnClientCheckResponse(func: (player: SampPlayer, actionid: number, memaddr: number, retndata: number) => void) {
        samp.on('OnClientCheckResponse', ((playerid, actionid, memaddr, retndata) => func(SampPlayers.getClass(playerid), actionid, memaddr, retndata)));
    }

    static OnScriptCash(func: (player: SampPlayer, amount: number, source: number) => void) {
        samp.on('OnScriptCash', ((playerid, amount, source) => func(SampPlayers.getClass(playerid), amount, source)));
    }
}