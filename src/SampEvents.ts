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
import {SampVehicles} from "./SampVehicles";
import {SampVehicle} from "./SampVehicle";

export const OnGameModeInit = (func: () => void)  => {
    samp.on('OnGameModeInit', func);
}

export const OnGameModeExit = (func: () => void)  => {
    samp.on('OnGameModeExit', func);
}

export const OnFilterScriptInit = (func: () => void)  => {
    samp.on('OnFilterScriptInit', func);
}

export const OnFilterScriptExit = (func: () => void)  => {
    samp.on('OnFilterScriptExit', func);
}

export const OnPlayerConnect = (func: (player: SampPlayer) => void)  => {
    samp.on('OnPlayerConnect', ((playerid) => func(SampPlayers.getNewClass(playerid))));
}

export const OnPlayerDisconnect = (func: (player: SampPlayer, reason: number) => void)  => {
    samp.on('OnPlayerDisconnect', ((playerid, reason) => func(SampPlayers.removeClass(playerid), reason)));
}

export const OnPlayerSpawn = (func: (player: SampPlayer) => void)  => {
    samp.on('OnPlayerSpawn', ((playerid) => func(SampPlayers.getClass(playerid))));
}

export const OnPlayerDeath = (func: (player: SampPlayer, killerid: SampPlayer, reason: number) => void)  => {
    samp.on('OnPlayerDeath', ((playerid, killerid, reason) => func(SampPlayers.getClass(playerid), SampPlayers.getClass(killerid), reason)));
}

export const OnVehicleSpawn = (func: (vehicle: SampVehicle) => void)  => {
    samp.on('OnVehicleSpawn', (vehicleid) => func(SampVehicles.getNewClass(vehicleid)));
}

export const OnVehicleDeath = (func: (vehicle: SampVehicle, killer: SampPlayer) => void)  => {
    samp.on('OnVehicleDeath', ((vehicleid, playerid) => func(SampVehicles.removeClass(vehicleid), SampPlayers.getClass(playerid))));
}

export const OnPlayerText = (func: (player: SampPlayer, text: string) => void)  => {
    samp.on('OnPlayerText', ((playerid, text) => func(SampPlayers.getClass(playerid), text)));
}

export const OnPlayerCommandText = (func: (player: SampPlayer, cmdtext: string) => void)  => {
    samp.on('OnPlayerCommandText', ((playerid, cmdtext) => func(SampPlayers.getClass(playerid), cmdtext)));
}

export const OnPlayerRequestClass = (func: (player: SampPlayer, classid: number) => void)  => {
    samp.on('OnPlayerRequestClass', ((playerid, classid) => func(SampPlayers.getClass(playerid), classid)));
}

export const OnPlayerEnterVehicle = (func: (player: SampPlayer, vehicle: SampVehicle, ispassenger: number) => void)  => {
    samp.on('OnPlayerEnterVehicle', ((playerid, vehicleid, ispassenger) => func(SampPlayers.getClass(playerid), SampVehicles.getClass(vehicleid), ispassenger)));
}

export const OnPlayerExitVehicle = (func: (player: SampPlayer, vehicle: SampVehicle) => void)  => {
    samp.on('OnPlayerExitVehicle', ((playerid, vehicleid) => func(SampPlayers.getClass(playerid), SampVehicles.getClass(vehicleid))));
}

export const OnPlayerStateChange = (func: (player: SampPlayer, newstate: number, oldstate: number) => void)  => {
    samp.on('OnPlayerStateChange', ((playerid, newstate, oldstate) => func(SampPlayers.getClass(playerid), newstate, oldstate)));
}

export const OnPlayerEnterCheckpoint = (func: (player: SampPlayer) => void)  => {
    samp.on('OnPlayerEnterCheckpoint', ((playerid) => func(SampPlayers.getClass(playerid))));
}

export const OnPlayerLeaveCheckpoint = (func: (player: SampPlayer) => void)  => {
    samp.on('OnPlayerLeaveCheckpoint', ((playerid) => func(SampPlayers.getClass(playerid))));
}

export const OnPlayerEnterRaceCheckpoint = (func: (player: SampPlayer) => void)  => {
    samp.on('OnPlayerEnterRaceCheckpoint', ((playerid) => func(SampPlayers.getClass(playerid))));
}

export const OnPlayerLeaveRaceCheckpoint = (func: (player: SampPlayer) => void)  => {
    samp.on('OnPlayerLeaveRaceCheckpoint', ((playerid) => func(SampPlayers.getClass(playerid))));
}

export const OnRconCommand = (func: (cmd: string) => void)  => {
    samp.on('OnRconCommand', func);
}

export const OnPlayerRequestSpawn = (func: (player: SampPlayer) => void)  => {
    samp.on('OnPlayerRequestSpawn', ((playerid) => func(SampPlayers.getClass(playerid))));
}

export const OnObjectMoved = (func: (objectid: number) => void)  => {
    samp.on('OnObjectMoved', func);
}

export const OnPlayerObjectMoved = (func: (player: SampPlayer, objectid: number) => void)  => {
    samp.on('OnPlayerObjectMoved', ((playerid, objectid) => func(SampPlayers.getClass(playerid), objectid)));
}

export const OnPlayerPickUpPickup = (func: (player: SampPlayer, pickupid: number) => void)  => {
    samp.on('OnPlayerPickUpPickup', ((playerid, pickupid) => func(SampPlayers.getClass(playerid), pickupid)));
}

export const OnVehicleMod = (func: (player: SampPlayer, vehicle: SampVehicle, componentid: number) => void)  => {
    samp.on('OnVehicleMod', ((playerid, vehicleid, componentid) => func(SampPlayers.getClass(playerid), SampVehicles.getClass(vehicleid), componentid)));
}

export const OnEnterExitModShop = (func: (player: SampPlayer, enterexit: number, interiorid: number) => void)  => {
    samp.on('OnEnterExitModShop', ((playerid, enterexit, interiorid) => func(SampPlayers.getClass(playerid), enterexit, interiorid)));
}

export const OnVehiclePaintjob = (func: (player: SampPlayer, vehicle: SampVehicle, paintjobid: number) => void)  => {
    samp.on('OnVehiclePaintjob', ((playerid, vehicleid, paintjobid) => func(SampPlayers.getClass(playerid), SampVehicles.getClass(vehicleid), paintjobid)));
}

export const OnVehicleRespray = (func: (player: SampPlayer, vehicle: SampVehicle, color1: number, color2: number) => void)  => {
    samp.on('OnVehicleRespray', ((playerid, vehicleid, color1, color2) => func(SampPlayers.getClass(playerid), SampVehicles.getClass(vehicleid), color1, color2)));
}

export const OnVehicleDamageStatusUpdate = (func: (vehicle: SampVehicle, player: SampPlayer) => void)  => {
    samp.on('OnVehicleDamageStatusUpdate', ((vehicleid, playerid) => func(SampVehicles.getClass(vehicleid), SampPlayers.getClass(playerid))));
}

export const OnUnoccupiedVehicleUpdate = (func: (vehicle: SampVehicle, player: SampPlayer, passenger_seat: number, new_x: number, new_y: number, new_z: number, vel_x: number, vel_y: number, vel_z: number) => void)  => {
    samp.on('OnUnoccupiedVehicleUpdate', ((vehicleid, playerid, passenger_seat, new_x, new_y, new_z, vel_x, vel_y, vel_z) => func(SampVehicles.getClass(vehicleid), SampPlayers.getClass(playerid), passenger_seat, new_x, new_y, new_z, vel_x, vel_y, vel_z)));
}

export const OnPlayerSelectedMenuRow = (func: (player: SampPlayer, row: number) => void)  => {
    samp.on('OnPlayerSelectedMenuRow', ((playerid, row) => func(SampPlayers.getClass(playerid), row)));
}

export const OnPlayerExitedMenu = (func: (player: SampPlayer) => void)  => {
    samp.on('OnPlayerExitedMenu', ((playerid) => func(SampPlayers.getClass(playerid))));
}

export const OnPlayerInteriorChange = (func: (player: SampPlayer, newinteriorid: number, oldinteriorid: number) => void)  => {
    samp.on('OnPlayerInteriorChange', ((playerid, newinteriorid, oldinteriorid) => func(SampPlayers.getClass(playerid), newinteriorid, oldinteriorid)));
}

export const OnPlayerKeyStateChange = (func: (player: SampPlayer, newkeys: KEY, oldkeys: KEY) => void)  => {
    samp.on('OnPlayerKeyStateChange', ((playerid, newkeys, oldkeys) => func(SampPlayers.getClass(playerid), newkeys, oldkeys)));
}

export const OnRconLoginAttempt = (func: (ip: string, password: string, success: number) => void)  => {
    samp.on('OnRconLoginAttempt', func);
}

export const OnPlayerUpdate = (func: (player: SampPlayer) => void)  => {
    samp.on('OnPlayerUpdate', ((playerid) => func(SampPlayers.getClass(playerid))));
}

export const OnPlayerStreamIn = (func: (player: SampPlayer, forplayer: SampPlayer) => void)  => {
    samp.on('OnPlayerStreamIn', ((playerid, forplayerid) => func(SampPlayers.getClass(playerid), SampPlayers.getClass(forplayerid))));
}

export const OnPlayerStreamOut = (func: (player: SampPlayer, forplayer: SampPlayer) => void)  => {
    samp.on('OnPlayerStreamOut', ((playerid, forplayerid) => func(SampPlayers.getClass(playerid), SampPlayers.getClass(forplayerid))));
}

export const OnVehicleStreamIn = (func: (vehicle: SampVehicle, forplayer: SampPlayer) => void)  => {
    samp.on('OnVehicleStreamIn', ((vehicleid, forplayerid) => func(SampVehicles.getClass(vehicleid), SampPlayers.getClass(forplayerid))));
}

export const OnVehicleStreamOut = (func: (vehicle: SampVehicle, forplayer: SampPlayer) => void)  => {
    samp.on('OnVehicleStreamOut', ((vehicleid, forplayerid) => func(SampVehicles.getClass(vehicleid), SampPlayers.getClass(forplayerid))));
}

export const OnActorStreamIn = (func: (actorid: number, forplayer: SampPlayer) => void)  => {
    samp.on('OnActorStreamIn', ((actorid, forplayerid) => func(actorid, SampPlayers.getClass(forplayerid))));
}

export const OnActorStreamOut = (func: (actorid: number, forplayer: SampPlayer) => void)  => {
    samp.on('OnActorStreamOut', ((actorid, forplayerid) => func(actorid, SampPlayers.getClass(forplayerid))));
}

export const OnDialogResponse = (func: (player: SampPlayer, dialogid: number, response: number, listitem: number, inputtext: string) => void)  => {
    samp.on('OnDialogResponse', ((playerid, dialogid, response, listitem, inputtext) => func(SampPlayers.getClass(playerid), dialogid, response, listitem, inputtext)));
}

export const OnPlayerTakeDamage = (func: (player: SampPlayer, issuerid: number, amount: number, weaponid: number, bodypart: BODY_PARTS) => void)  => {
    samp.on('OnPlayerTakeDamage', ((playerid, issuerid, amount, weaponid, bodypart) => func(SampPlayers.getClass(playerid), issuerid, amount, weaponid, bodypart)));
}

export const OnPlayerGiveDamage = (func: (player: SampPlayer, damagedid: number, amount: number, weaponid: number, bodypart: number) => void)  => {
    samp.on('OnPlayerGiveDamage', ((playerid, damagedid, amount, weaponid, bodypart) => func(SampPlayers.getClass(playerid), damagedid, amount, weaponid, bodypart)));
}

export const OnPlayerGiveDamageActor = (func: (player: SampPlayer, damaged_actorid: number, amount: number, weaponid: number, bodypart: number) => void)  => {
    samp.on('OnPlayerGiveDamageActor', ((playerid, damaged_actorid, amount, weaponid, bodypart) => func(SampPlayers.getClass(playerid), damaged_actorid, amount, weaponid, bodypart)));
}

export const OnPlayerClickMap = (func: (player: SampPlayer, fX: number, fY: number, fZ: number) => void)  => {
    samp.on('OnPlayerClickMap', ((playerid, fX, fY, fZ) => func(SampPlayers.getClass(playerid), fX, fY, fZ)));
}

export const OnPlayerClickTextDraw = (func: (player: SampPlayer, clickedid: number) => void)  => {
    samp.on('OnPlayerClickTextDraw', ((playerid, clickedid) => func(SampPlayers.getClass(playerid), clickedid)));
}

export const OnPlayerClickPlayerTextDraw = (func: (player: SampPlayer, playertextid: number) => void)  => {
    samp.on('OnPlayerClickPlayerTextDraw', ((playerid, playertextid) => func(SampPlayers.getClass(playerid), playertextid)));
}

export const OnIncomingConnection = (func: (player: SampPlayer, ip_address: string, port: number) => void)  => {
    samp.on('OnIncomingConnection', ((playerid, ip_address, port) => func(SampPlayers.getClass(playerid), ip_address, port)));
}

export const OnTrailerUpdate = (func: (player: SampPlayer, vehicle: SampVehicle) => void)  => {
    samp.on('OnTrailerUpdate', ((playerid, vehicleid) => func(SampPlayers.getClass(playerid), SampVehicles.getClass(vehicleid))));
}

export const OnVehicleSirenStateChange = (func: (player: SampPlayer, vehicle: SampVehicle, newstate: number) => void)  => {
    samp.on('OnVehicleSirenStateChange', ((playerid, vehicleid, newstate) => func(SampPlayers.getClass(playerid), SampVehicles.getClass(vehicleid), newstate)));
}

export const OnPlayerFinishedDownloading = (func: (player: SampPlayer, virtualworld: number) => void)  => {
    samp.on('OnPlayerFinishedDownloading', ((playerid, virtualworld) => func(SampPlayers.getClass(playerid), virtualworld)));
}

export const OnPlayerClickPlayer = (func: (player: SampPlayer, clickedplayer: SampPlayer, source: number) => void)  => {
    samp.on('OnPlayerClickPlayer', ((playerid, clickedplayerid, source) => func(SampPlayers.getClass(playerid), SampPlayers.getClass(clickedplayerid), source)));
}

export const OnPlayerSelectObject = (func: (player: SampPlayer, type: number, objectid: number, modelid: number, fX: number, fY: number, fZ: number) => void)  => {
    samp.on('OnPlayerSelectObject', ((playerid, type, objectid, modelid, fX, fY, fZ) => func(SampPlayers.getClass(playerid), type, objectid, modelid, fX, fY, fZ)));
}

export const OnPlayerWeaponShot = (func: (player: SampPlayer, weaponid: number, hittype: number, hitid: number, fX: number, fY: number, fZ: number) => void)  => {
    samp.on('OnPlayerWeaponShot', ((playerid, weaponid, hittype, hitid, fX, fY, fZ) => func(SampPlayers.getClass(playerid), weaponid, hittype, hitid, fX, fY, fZ)));
}

export const OnClientCheckResponse = (func: (player: SampPlayer, actionid: number, memaddr: number, retndata: number) => void)  => {
    samp.on('OnClientCheckResponse', ((playerid, actionid, memaddr, retndata) => func(SampPlayers.getClass(playerid), actionid, memaddr, retndata)));
}

export const OnScriptCash = (func: (player: SampPlayer, amount: number, source: number) => void)  => {
    samp.on('OnScriptCash', ((playerid, amount, source) => func(SampPlayers.getClass(playerid), amount, source)));
}
