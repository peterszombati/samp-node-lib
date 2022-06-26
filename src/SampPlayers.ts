import {SampPlayer} from "./SampPlayer";

samp.on('OnDialogResponse', ((playerid, dialogid, response, listitem, inputtext) => {
    // @ts-ignore
    SampPlayers.ids[`id${playerid}`] && SampPlayers.ids[`id${playerid}`].dialog[`id${dialogid}`] && SampPlayers.ids[`id${playerid}`].dialog[`id${dialogid}`]({response, listitem, inputtext})
}))

export class SampPlayers {
    static ids: Record<string, SampPlayer> = {};

    static getNewClass<P>(playerid: number): SampPlayer<P> {
        if (SampPlayers.ids[`id${playerid}`] !== undefined) {
            delete SampPlayers.ids[`id${playerid}`];
        }
        SampPlayers.ids[`id${playerid}`] = new SampPlayer(playerid);
        // @ts-ignore
        return SampPlayers.ids[`id${playerid}`];
    }

    static getClass<P>(playerid: number): SampPlayer<P> {
        if (SampPlayers.ids[`id${playerid}`] === undefined) {
            SampPlayers.ids[`id${playerid}`] = new SampPlayer(playerid);
        }
        // @ts-ignore
        return SampPlayers.ids[`id${playerid}`];
    }

    static removeClass<P>(playerid: number): SampPlayer<P> {
        if (SampPlayers.ids[`id${playerid}`] !== undefined) {
            const playerClass = SampPlayers.ids[`id${playerid}`];
            delete SampPlayers.ids[`id${playerid}`];
            // @ts-ignore
            return playerClass;
        }
        // @ts-ignore
        return new SampPlayer(playerid);
    }
}