import {TextDraw} from "./TextDraw";

samp.on('OnPlayerClickPlayerTextDraw', (playerid, playertextid) => {
    TextDraws.onclick(playerid, playertextid);
});

samp.on('OnPlayerDisconnect', (playerid) => {
    TextDraws.destroyAll(playerid);
});

export class TextDraws {
    static tds: any = {};

    static getAll(playerid: number): TextDraw[] {
        return this.tds[`id${playerid}`] || [];
    }

    static destroy(playerid: number, name: string): void {
        const tds: TextDraw[] = (this.tds[`id${playerid}`] || []);
        tds.filter(td => td.name === name).forEach(td => td.destroy());
        const newValue = tds.filter(td => td.name !== name);
        if (newValue.length > 0) {
            this.tds[`id${playerid}`] = newValue;
        } else if (this.tds[`id${playerid}`] !== undefined) {
            delete this.tds[`id${playerid}`];
        }
    }

    static destroyAll(playerid: number): void {
        (this.tds[`id${playerid}`] || []).forEach((td: TextDraw) => {
            td.destroy();
        });
        delete this.tds[`id${playerid}`];
    }

    static add(playerid: number, td: TextDraw) {
        if (this.tds[`id${playerid}`] === undefined) {
            this.tds[`id${playerid}`] = [];
        }
        this.tds[`id${playerid}`].push(td);
    }

    static onclick(playerid: number, textid: number) {
        (this.tds[`id${playerid}`] || []).forEach((td: TextDraw) => {
            if (td.textid === textid) {
                td.callback.forEach(c => c(playerid));
            }
        })
    }
}
