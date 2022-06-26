import {SampPlayer} from "./SampPlayer"
import {SampVehicle} from "./SampVehicle"
import {
    OnActorStreamIn,
    OnActorStreamOut,
    OnClientCheckResponse,
    OnDialogResponse,
    OnEnterExitModShop,
    OnFilterScriptExit,
    OnFilterScriptInit,
    OnGameModeExit,
    OnGameModeInit,
    OnIncomingConnection,
    OnObjectMoved,
    OnPlayerClickMap,
    OnPlayerClickPlayer,
    OnPlayerClickPlayerTextDraw,
    OnPlayerClickTextDraw,
    OnPlayerCommandText,
    OnPlayerConnect,
    OnPlayerDeath,
    OnPlayerDisconnect,
    OnPlayerEnterCheckpoint,
    OnPlayerEnterRaceCheckpoint,
    OnPlayerEnterVehicle,
    OnPlayerExitedMenu,
    OnPlayerExitVehicle,
    OnPlayerFinishedDownloading,
    OnPlayerGiveDamage,
    OnPlayerGiveDamageActor,
    OnPlayerInteriorChange,
    OnPlayerKeyStateChange,
    OnPlayerLeaveCheckpoint,
    OnPlayerLeaveRaceCheckpoint,
    OnPlayerObjectMoved,
    OnPlayerPickUpPickup,
    OnPlayerRequestClass,
    OnPlayerRequestSpawn,
    OnPlayerSelectedMenuRow,
    OnPlayerSelectObject,
    OnPlayerSpawn,
    OnPlayerStateChange,
    OnPlayerStreamIn,
    OnPlayerStreamOut,
    OnPlayerTakeDamage,
    OnPlayerText,
    OnPlayerUpdate,
    OnPlayerWeaponShot,
    OnRconCommand,
    OnRconLoginAttempt,
    OnScriptCash,
    OnTrailerUpdate,
    OnUnoccupiedVehicleUpdate,
    OnVehicleDamageStatusUpdate,
    OnVehicleDeath,
    OnVehicleMod,
    OnVehiclePaintjob,
    OnVehicleRespray,
    OnVehicleSirenStateChange,
    OnVehicleSpawn,
    OnVehicleStreamIn,
    OnVehicleStreamOut
} from './SampEvents'

export class Game<P, V> {
    OnGameModeInit(func: () => void) {
        return OnGameModeInit(func)
    }

    OnGameModeExit(func: () => void) {
        return OnGameModeExit(func)
    }

    OnFilterScriptInit(func: () => void) {
        return OnFilterScriptInit(func)
    }

    OnFilterScriptExit(func: () => void) {
        return OnFilterScriptExit(func)
    }

    OnPlayerConnect(func: (player: SampPlayer<P>) => void) {
        return OnPlayerConnect(func)
    }

    OnPlayerDisconnect(func: (player: SampPlayer<P>, reason: number) => void) {
        return OnPlayerDisconnect(func)
    }

    OnPlayerSpawn(func: (player: SampPlayer<P>) => void) {
        return OnPlayerSpawn(func)
    }

    OnPlayerDeath(func: (player: SampPlayer<P>, killer: SampPlayer<P>, reason: number) => void) {
        return OnPlayerDeath(func)
    }

    OnVehicleSpawn(func: (vehicle: SampVehicle<V>) => void) {
        return OnVehicleSpawn(func)
    }

    OnVehicleDeath(func: (vehicle: SampVehicle<V>, killer: SampPlayer<P>) => void) {
        return OnVehicleDeath(func)
    }

    OnPlayerText(func: (player: SampPlayer<P>, text: string) => void) {
        return OnPlayerText(func)
    }

    OnPlayerCommandText(func: (player: SampPlayer<P>, cmdtext: string) => void) {
        return OnPlayerCommandText(func)
    }

    OnPlayerRequestClass(func: (player: SampPlayer<P>, classid: number) => void) {
        return OnPlayerRequestClass(func)
    }

    OnPlayerEnterVehicle(func: (player: SampPlayer<P>, vehicle: SampVehicle<V>, ispassenger: number) => void) {
        return OnPlayerEnterVehicle(func)
    }

    OnPlayerExitVehicle(func: (player: SampPlayer<P>, vehicle: SampVehicle<V>) => void) {
        return OnPlayerExitVehicle(func)
    }

    OnPlayerStateChange(func: (player: SampPlayer<P>, newstate: number, oldstate: number) => void) {
        return OnPlayerStateChange(func)
    }

    OnPlayerEnterCheckpoint(func: (player: SampPlayer<P>) => void) {
        return OnPlayerEnterCheckpoint(func)
    }

    OnPlayerLeaveCheckpoint(func: (player: SampPlayer<P>) => void) {
        return OnPlayerLeaveCheckpoint(func)
    }

    OnPlayerEnterRaceCheckpoint(func: (player: SampPlayer<P>) => void) {
        return OnPlayerEnterRaceCheckpoint(func)
    }

    OnPlayerLeaveRaceCheckpoint(func: (player: SampPlayer<P>) => void) {
        return OnPlayerLeaveRaceCheckpoint(func)
    }

    OnRconCommand(func: (cmd: string) => void) {
        return OnRconCommand(func)
    }

    OnPlayerRequestSpawn(func: (player: SampPlayer<P>) => void) {
        return OnPlayerRequestSpawn(func)
    }

    OnObjectMoved(func: (objectid: number) => void) {
        return OnObjectMoved(func)
    }

    OnPlayerObjectMoved(func: (player: SampPlayer<P>, objectid: number) => void) {
        return OnPlayerObjectMoved(func)
    }

    OnPlayerPickUpPickup(func: (player: SampPlayer<P>, pickupid: number) => void) {
        return OnPlayerPickUpPickup(func)
    }

    OnVehicleMod(func: (player: SampPlayer<P>, vehicle: SampVehicle<V>, componentid: number) => void) {
        return OnVehicleMod(func)
    }

    OnEnterExitModShop(func: (player: SampPlayer<P>, enterexit: number, interiorid: number) => void) {
        return OnEnterExitModShop(func)
    }

    OnVehiclePaintjob(func: (player: SampPlayer<P>, vehicle: SampVehicle<V>, paintjobid: number) => void) {
        return OnVehiclePaintjob(func)
    }

    OnVehicleRespray(func: (player: SampPlayer<P>, vehicle: SampVehicle<V>, color1: number, color2: number) => void) {
        return OnVehicleRespray(func)
    }

    OnVehicleDamageStatusUpdate(func: (vehicle: SampVehicle<V>, player: SampPlayer<P>) => void) {
        return OnVehicleDamageStatusUpdate(func)
    }

    OnUnoccupiedVehicleUpdate(func: (vehicle: SampVehicle<V>, player: SampPlayer<P>, passenger_seat: number, new_x: number, new_y: number, new_z: number, vel_x: number, vel_y: number, vel_z: number) => void) {
        return OnUnoccupiedVehicleUpdate(func)
    }

    OnPlayerSelectedMenuRow(func: (player: SampPlayer<P>, row: number) => void) {
        return OnPlayerSelectedMenuRow(func)
    }

    OnPlayerExitedMenu(func: (player: SampPlayer<P>) => void) {
        return OnPlayerExitedMenu(func)
    }

    OnPlayerInteriorChange(func: (player: SampPlayer<P>, newinteriorid: number, oldinteriorid: number) => void) {
        return OnPlayerInteriorChange(func)
    }

    OnPlayerKeyStateChange(func: (player: SampPlayer<P>, newkeys: number, oldkeys: number) => void) {
        return OnPlayerKeyStateChange(func)
    }

    OnRconLoginAttempt(func: (ip: string, password: string, success: number) => void) {
        return OnRconLoginAttempt(func)
    }

    OnPlayerUpdate(func: (player: SampPlayer<P>) => void) {
        return OnPlayerUpdate(func)
    }

    OnPlayerStreamIn(func: (player: SampPlayer<P>, forplayer: SampPlayer<P>) => void) {
        return OnPlayerStreamIn(func)
    }

    OnPlayerStreamOut(func: (player: SampPlayer<P>, forplayer: SampPlayer<P>) => void) {
        return OnPlayerStreamOut(func)
    }

    OnVehicleStreamIn(func: (vehicle: SampVehicle<V>, forplayer: SampPlayer<P>) => void) {
        return OnVehicleStreamIn(func)
    }

    OnVehicleStreamOut(func: (vehicle: SampVehicle<V>, forplayer: SampPlayer<P>) => void) {
        return OnVehicleStreamOut(func)
    }

    OnActorStreamIn(func: (actorid: number, forplayer: SampPlayer<P>) => void) {
        return OnActorStreamIn(func)
    }

    OnActorStreamOut(func: (actorid: number, forplayer: SampPlayer<P>) => void) {
        return OnActorStreamOut(func)
    }

    OnDialogResponse(func: (player: SampPlayer<P>, dialogid: number, response: number, listitem: number, inputtext: string) => void) {
        return OnDialogResponse(func)
    }

    OnPlayerTakeDamage(func: (player: SampPlayer<P>, issuer: SampPlayer<P>, amount: number, weaponid: number, bodypart: number) => void) {
        return OnPlayerTakeDamage(func)
    }

    OnPlayerGiveDamage(func: (player: SampPlayer<P>, damaged: SampPlayer<P>, amount: number, weaponid: number, bodypart: number) => void) {
        return OnPlayerGiveDamage(func)
    }

    OnPlayerGiveDamageActor(func: (player: SampPlayer<P>, damaged_actorid: number, amount: number, weaponid: number, bodypart: number) => void) {
        return OnPlayerGiveDamageActor(func)
    }

    OnPlayerClickMap(func: (player: SampPlayer<P>, fX: number, fY: number, fZ: number) => void) {
        return OnPlayerClickMap(func)
    }

    OnPlayerClickTextDraw(func: (player: SampPlayer<P>, clickedid: number) => void) {
        return OnPlayerClickTextDraw(func)
    }

    OnPlayerClickPlayerTextDraw(func: (player: SampPlayer<P>, playertextid: number) => void) {
        return OnPlayerClickPlayerTextDraw(func)
    }

    OnIncomingConnection(func: (player: SampPlayer<P>, ip_address: string, port: number) => void) {
        return OnIncomingConnection(func)
    }

    OnTrailerUpdate(func: (player: SampPlayer<P>, vehicle: SampVehicle<V>) => void) {
        return OnTrailerUpdate(func)
    }

    OnVehicleSirenStateChange(func: (player: SampPlayer<P>, vehicle: SampVehicle<V>, newstate: number) => void) {
        return OnVehicleSirenStateChange(func)
    }

    OnPlayerFinishedDownloading(func: (player: SampPlayer<P>, virtualworld: number) => void) {
        return OnPlayerFinishedDownloading(func)
    }

    OnPlayerClickPlayer(func: (player: SampPlayer<P>, clickedplayer: SampPlayer<P>, source: number) => void) {
        return OnPlayerClickPlayer(func)
    }

    OnPlayerSelectObject(func: (player: SampPlayer<P>, type: number, objectid: number, modelid: number, fX: number, fY: number, fZ: number) => void) {
        return OnPlayerSelectObject(func)
    }

    OnPlayerWeaponShot(func: (player: SampPlayer<P>, weaponid: number, hittype: number, hitid: number, fX: number, fY: number, fZ: number) => void) {
        return OnPlayerWeaponShot(func)
    }

    OnClientCheckResponse(func: (player: SampPlayer<P>, actionid: number, memaddr: number, retndata: number) => void) {
        return OnClientCheckResponse(func)
    }

    OnScriptCash(func: (player: SampPlayer<P>, amount: number, source: number) => void) {
        return OnScriptCash(func)
    }
}