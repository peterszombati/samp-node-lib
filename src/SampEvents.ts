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
import {BODY_PARTS, KEY} from "./SampEnum";
import {SampPlayers} from "./SampPlayers";
import {SampVehicles} from "./SampVehicles";
import {SampVehicle} from "./SampVehicle";

export const OnGameModeInit = (func: () => void) => {
    samp.on('OnGameModeInit', func);
}

export const OnGameModeExit = (func: () => void) => {
    samp.on('OnGameModeExit', func);
}

export const OnFilterScriptInit = (func: () => void) => {
    samp.on('OnFilterScriptInit', func);
}

export const OnFilterScriptExit = (func: () => void) => {
    samp.on('OnFilterScriptExit', func);
}

export const OnPlayerConnect = <P = Record<string, any>>(func: (player: SampPlayer<P>) => void) => {
    samp.on('OnPlayerConnect', ((playerid) => func(SampPlayers.getNewClass(playerid))));
}

export const OnPlayerDisconnect = <P = Record<string, any>>(func: (player: SampPlayer<P>, reason: number) => void) => {
    samp.on('OnPlayerDisconnect', ((playerid, reason) => func(SampPlayers.removeClass(playerid), reason)));
}

export const OnPlayerSpawn = <P = Record<string, any>>(func: (player: SampPlayer<P>) => void) => {
    samp.on('OnPlayerSpawn', ((playerid) => func(SampPlayers.getClass(playerid))));
}

export const OnPlayerDeath = <P = Record<string, any>>(func: (player: SampPlayer<P>, killerid: SampPlayer<P>, reason: number) => void) => {
    samp.on('OnPlayerDeath', ((playerid, killerid, reason) => func(SampPlayers.getClass(playerid), SampPlayers.getClass(killerid), reason)));
}

export const OnVehicleSpawn = <V = Record<string, any>>(func: (vehicle: SampVehicle<V>) => void) => {
    samp.on('OnVehicleSpawn', (vehicleid) => func(SampVehicles.getNewClass(vehicleid)));
}

export const OnVehicleDeath = <P = Record<string, any>,V = Record<string, any>>(func: (vehicle: SampVehicle<V>, killer: SampPlayer<P>) => void) => {
    samp.on('OnVehicleDeath', ((vehicleid, playerid) => func(SampVehicles.removeClass(vehicleid), SampPlayers.getClass(playerid))));
}

export const OnPlayerText = <P = Record<string, any>>(func: (player: SampPlayer<P>, text: string) => void) => {
    samp.on('OnPlayerText', ((playerid, text) => func(SampPlayers.getClass(playerid), text)));
}

export const OnPlayerCommandText = <P = Record<string, any>>(func: (player: SampPlayer<P>, cmdtext: string) => void) => {
    samp.on('OnPlayerCommandText', ((playerid, cmdtext) => func(SampPlayers.getClass(playerid), cmdtext)));
}

export const OnPlayerRequestClass = <P = Record<string, any>>(func: (player: SampPlayer<P>, classid: number) => void) => {
    samp.on('OnPlayerRequestClass', ((playerid, classid) => func(SampPlayers.getClass(playerid), classid)));
}

export const OnPlayerEnterVehicle = <P = Record<string, any>,V = Record<string, any>>(func: (player: SampPlayer<P>, vehicle: SampVehicle<V>, ispassenger: number) => void) => {
    samp.on('OnPlayerEnterVehicle', ((playerid, vehicleid, ispassenger) => func(SampPlayers.getClass(playerid), SampVehicles.getClass(vehicleid), ispassenger)));
}

export const OnPlayerExitVehicle = <P = Record<string, any>,V = Record<string, any>>(func: (player: SampPlayer<P>, vehicle: SampVehicle<V>) => void) => {
    samp.on('OnPlayerExitVehicle', ((playerid, vehicleid) => func(SampPlayers.getClass(playerid), SampVehicles.getClass(vehicleid))));
}

export const OnPlayerStateChange = <P = Record<string, any>>(func: (player: SampPlayer<P>, newstate: number, oldstate: number) => void) => {
    samp.on('OnPlayerStateChange', ((playerid, newstate, oldstate) => func(SampPlayers.getClass(playerid), newstate, oldstate)));
}

export const OnPlayerEnterCheckpoint = <P = Record<string, any>>(func: (player: SampPlayer<P>) => void) => {
    samp.on('OnPlayerEnterCheckpoint', ((playerid) => func(SampPlayers.getClass(playerid))));
}

export const OnPlayerLeaveCheckpoint = <P = Record<string, any>>(func: (player: SampPlayer<P>) => void) => {
    samp.on('OnPlayerLeaveCheckpoint', ((playerid) => func(SampPlayers.getClass(playerid))));
}

export const OnPlayerEnterRaceCheckpoint = <P = Record<string, any>>(func: (player: SampPlayer<P>) => void) => {
    samp.on('OnPlayerEnterRaceCheckpoint', ((playerid) => func(SampPlayers.getClass(playerid))));
}

export const OnPlayerLeaveRaceCheckpoint = <P = Record<string, any>>(func: (player: SampPlayer<P>) => void) => {
    samp.on('OnPlayerLeaveRaceCheckpoint', ((playerid) => func(SampPlayers.getClass(playerid))));
}

export const OnRconCommand = (func: (cmd: string) => void) => {
    samp.on('OnRconCommand', func);
}

export const OnPlayerRequestSpawn = <P = Record<string, any>>(func: (player: SampPlayer<P>) => void) => {
    samp.on('OnPlayerRequestSpawn', ((playerid) => func(SampPlayers.getClass(playerid))));
}

export const OnObjectMoved = (func: (objectid: number) => void) => {
    samp.on('OnObjectMoved', func);
}

export const OnPlayerObjectMoved = <P = Record<string, any>>(func: (player: SampPlayer<P>, objectid: number) => void) => {
    samp.on('OnPlayerObjectMoved', ((playerid, objectid) => func(SampPlayers.getClass(playerid), objectid)));
}

export const OnPlayerPickUpPickup = <P = Record<string, any>>(func: (player: SampPlayer<P>, pickupid: number) => void) => {
    samp.on('OnPlayerPickUpPickup', ((playerid, pickupid) => func(SampPlayers.getClass(playerid), pickupid)));
}

export const OnVehicleMod = <P = Record<string, any>,V = Record<string, any>>(func: (player: SampPlayer<P>, vehicle: SampVehicle<V>, componentid: number) => void) => {
    samp.on('OnVehicleMod', ((playerid, vehicleid, componentid) => func(SampPlayers.getClass(playerid), SampVehicles.getClass(vehicleid), componentid)));
}

export const OnEnterExitModShop = <P = Record<string, any>>(func: (player: SampPlayer<P>, enterexit: number, interiorid: number) => void) => {
    samp.on('OnEnterExitModShop', ((playerid, enterexit, interiorid) => func(SampPlayers.getClass(playerid), enterexit, interiorid)));
}

export const OnVehiclePaintjob = <P = Record<string, any>,V = Record<string, any>>(func: (player: SampPlayer<P>, vehicle: SampVehicle<V>, paintjobid: number) => void) => {
    samp.on('OnVehiclePaintjob', ((playerid, vehicleid, paintjobid) => func(SampPlayers.getClass(playerid), SampVehicles.getClass(vehicleid), paintjobid)));
}

export const OnVehicleRespray = <P = Record<string, any>,V = Record<string, any>>(func: (player: SampPlayer<P>, vehicle: SampVehicle<V>, color1: number, color2: number) => void) => {
    samp.on('OnVehicleRespray', ((playerid, vehicleid, color1, color2) => func(SampPlayers.getClass(playerid), SampVehicles.getClass(vehicleid), color1, color2)));
}

export const OnVehicleDamageStatusUpdate = <P = Record<string, any>,V = Record<string, any>>(func: (vehicle: SampVehicle<V>, player: SampPlayer<P>) => void) => {
    samp.on('OnVehicleDamageStatusUpdate', ((vehicleid, playerid) => func(SampVehicles.getClass(vehicleid), SampPlayers.getClass(playerid))));
}

export const OnUnoccupiedVehicleUpdate = <P = Record<string, any>,V = Record<string, any>>(func: (vehicle: SampVehicle<V>, player: SampPlayer<P>, passenger_seat: number, new_x: number, new_y: number, new_z: number, vel_x: number, vel_y: number, vel_z: number) => void) => {
    samp.on('OnUnoccupiedVehicleUpdate', ((vehicleid, playerid, passenger_seat, new_x, new_y, new_z, vel_x, vel_y, vel_z) => func(SampVehicles.getClass(vehicleid), SampPlayers.getClass(playerid), passenger_seat, new_x, new_y, new_z, vel_x, vel_y, vel_z)));
}

export const OnPlayerSelectedMenuRow = <P = Record<string, any>>(func: (player: SampPlayer<P>, row: number) => void) => {
    samp.on('OnPlayerSelectedMenuRow', ((playerid, row) => func(SampPlayers.getClass(playerid), row)));
}

export const OnPlayerExitedMenu = <P = Record<string, any>>(func: (player: SampPlayer<P>) => void) => {
    samp.on('OnPlayerExitedMenu', ((playerid) => func(SampPlayers.getClass(playerid))));
}

export const OnPlayerInteriorChange = <P = Record<string, any>>(func: (player: SampPlayer<P>, newinteriorid: number, oldinteriorid: number) => void) => {
    samp.on('OnPlayerInteriorChange', ((playerid, newinteriorid, oldinteriorid) => func(SampPlayers.getClass(playerid), newinteriorid, oldinteriorid)));
}

export const OnPlayerKeyStateChange = <P = Record<string, any>>(func: (player: SampPlayer<P>, newkeys: KEY, oldkeys: KEY) => void) => {
    samp.on('OnPlayerKeyStateChange', ((playerid, newkeys, oldkeys) => func(SampPlayers.getClass(playerid), newkeys, oldkeys)));
}

export const OnRconLoginAttempt = (func: (ip: string, password: string, success: number) => void) => {
    samp.on('OnRconLoginAttempt', func);
}

export const OnPlayerUpdate = <P = Record<string, any>>(func: (player: SampPlayer<P>) => void) => {
    samp.on('OnPlayerUpdate', ((playerid) => func(SampPlayers.getClass(playerid))));
}

export const OnPlayerStreamIn = <P = Record<string, any>>(func: (player: SampPlayer<P>, forplayer: SampPlayer<P>) => void) => {
    samp.on('OnPlayerStreamIn', ((playerid, forplayerid) => func(SampPlayers.getClass(playerid), SampPlayers.getClass(forplayerid))));
}

export const OnPlayerStreamOut = <P = Record<string, any>>(func: (player: SampPlayer<P>, forplayer: SampPlayer<P>) => void) => {
    samp.on('OnPlayerStreamOut', ((playerid, forplayerid) => func(SampPlayers.getClass(playerid), SampPlayers.getClass(forplayerid))));
}

export const OnVehicleStreamIn = <P = Record<string, any>,V = Record<string, any>>(func: (vehicle: SampVehicle<V>, forplayer: SampPlayer<P>) => void) => {
    samp.on('OnVehicleStreamIn', ((vehicleid, forplayerid) => func(SampVehicles.getClass(vehicleid), SampPlayers.getClass(forplayerid))));
}

export const OnVehicleStreamOut = <P = Record<string, any>,V = Record<string, any>>(func: (vehicle: SampVehicle<V>, forplayer: SampPlayer<P>) => void) => {
    samp.on('OnVehicleStreamOut', ((vehicleid, forplayerid) => func(SampVehicles.getClass(vehicleid), SampPlayers.getClass(forplayerid))));
}

export const OnActorStreamIn = <P = Record<string, any>>(func: (actorid: number, forplayer: SampPlayer<P>) => void) => {
    samp.on('OnActorStreamIn', ((actorid, forplayerid) => func(actorid, SampPlayers.getClass(forplayerid))));
}

export const OnActorStreamOut = <P = Record<string, any>>(func: (actorid: number, forplayer: SampPlayer<P>) => void) => {
    samp.on('OnActorStreamOut', ((actorid, forplayerid) => func(actorid, SampPlayers.getClass(forplayerid))));
}

export const OnDialogResponse = <P = Record<string, any>>(func: (player: SampPlayer<P>, dialogid: number, response: number, listitem: number, inputtext: string) => void) => {
    samp.on('OnDialogResponse', ((playerid, dialogid, response, listitem, inputtext) => func(SampPlayers.getClass(playerid), dialogid, response, listitem, inputtext)));
}

export const OnPlayerTakeDamage = <P = Record<string, any>>(func: (player: SampPlayer<P>, issuerid: number, amount: number, weaponid: number, bodypart: BODY_PARTS) => void) => {
    samp.on('OnPlayerTakeDamage', ((playerid, issuerid, amount, weaponid, bodypart) => func(SampPlayers.getClass(playerid), issuerid, amount, weaponid, bodypart)));
}

export const OnPlayerGiveDamage = <P = Record<string, any>>(func: (player: SampPlayer<P>, damagedid: number, amount: number, weaponid: number, bodypart: number) => void) => {
    samp.on('OnPlayerGiveDamage', ((playerid, damagedid, amount, weaponid, bodypart) => func(SampPlayers.getClass(playerid), damagedid, amount, weaponid, bodypart)));
}

export const OnPlayerGiveDamageActor = <P = Record<string, any>>(func: (player: SampPlayer<P>, damaged_actorid: number, amount: number, weaponid: number, bodypart: number) => void) => {
    samp.on('OnPlayerGiveDamageActor', ((playerid, damaged_actorid, amount, weaponid, bodypart) => func(SampPlayers.getClass(playerid), damaged_actorid, amount, weaponid, bodypart)));
}

export const OnPlayerClickMap = <P = Record<string, any>>(func: (player: SampPlayer<P>, fX: number, fY: number, fZ: number) => void) => {
    samp.on('OnPlayerClickMap', ((playerid, fX, fY, fZ) => func(SampPlayers.getClass(playerid), fX, fY, fZ)));
}

export const OnPlayerClickTextDraw = <P = Record<string, any>>(func: (player: SampPlayer<P>, clickedid: number) => void) => {
    samp.on('OnPlayerClickTextDraw', ((playerid, clickedid) => func(SampPlayers.getClass(playerid), clickedid)));
}

export const OnPlayerClickPlayerTextDraw = <P = Record<string, any>>(func: (player: SampPlayer<P>, playertextid: number) => void) => {
    samp.on('OnPlayerClickPlayerTextDraw', ((playerid, playertextid) => func(SampPlayers.getClass(playerid), playertextid)));
}

export const OnIncomingConnection = <P = Record<string, any>>(func: (player: SampPlayer<P>, ip_address: string, port: number) => void) => {
    samp.on('OnIncomingConnection', ((playerid, ip_address, port) => func(SampPlayers.getClass(playerid), ip_address, port)));
}

export const OnTrailerUpdate = <P = Record<string, any>,V = Record<string, any>>(func: (player: SampPlayer<P>, vehicle: SampVehicle<V>) => void) => {
    samp.on('OnTrailerUpdate', ((playerid, vehicleid) => func(SampPlayers.getClass(playerid), SampVehicles.getClass(vehicleid))));
}

export const OnVehicleSirenStateChange = <P = Record<string, any>>(func: (player: SampPlayer<P>, vehicle: SampVehicle, newstate: number) => void) => {
    samp.on('OnVehicleSirenStateChange', ((playerid, vehicleid, newstate) => func(SampPlayers.getClass(playerid), SampVehicles.getClass(vehicleid), newstate)));
}

export const OnPlayerFinishedDownloading = <P = Record<string, any>>(func: (player: SampPlayer<P>, virtualworld: number) => void) => {
    samp.on('OnPlayerFinishedDownloading', ((playerid, virtualworld) => func(SampPlayers.getClass(playerid), virtualworld)));
}

export const OnPlayerClickPlayer = <P = Record<string, any>>(func: (player: SampPlayer<P>, clickedplayer: SampPlayer<P>, source: number) => void) => {
    samp.on('OnPlayerClickPlayer', ((playerid, clickedplayerid, source) => func(SampPlayers.getClass(playerid), SampPlayers.getClass(clickedplayerid), source)));
}

export const OnPlayerSelectObject = <P = Record<string, any>>(func: (player: SampPlayer<P>, type: number, objectid: number, modelid: number, fX: number, fY: number, fZ: number) => void) => {
    samp.on('OnPlayerSelectObject', ((playerid, type, objectid, modelid, fX, fY, fZ) => func(SampPlayers.getClass(playerid), type, objectid, modelid, fX, fY, fZ)));
}

export const OnPlayerWeaponShot = <P = Record<string, any>>(func: (player: SampPlayer<P>, weaponid: number, hittype: number, hitid: number, fX: number, fY: number, fZ: number) => void) => {
    samp.on('OnPlayerWeaponShot', ((playerid, weaponid, hittype, hitid, fX, fY, fZ) => func(SampPlayers.getClass(playerid), weaponid, hittype, hitid, fX, fY, fZ)));
}

export const OnClientCheckResponse = <P = Record<string, any>>(func: (player: SampPlayer<P>, actionid: number, memaddr: number, retndata: number) => void) => {
    samp.on('OnClientCheckResponse', ((playerid, actionid, memaddr, retndata) => func(SampPlayers.getClass(playerid), actionid, memaddr, retndata)));
}

export const OnScriptCash = <P = Record<string, any>>(func: (player: SampPlayer<P>, amount: number, source: number) => void) => {
    samp.on('OnScriptCash', ((playerid, amount, source) => func(SampPlayers.getClass(playerid), amount, source)));
}
