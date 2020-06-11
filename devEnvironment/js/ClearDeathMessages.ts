import {SendDeathMessageToPlayer} from "../../src";

export function ClearDeathMessages(playerid: number) {
    for (let i = 0; i < 5; i++) {
        SendDeathMessageToPlayer(playerid, 1001, 1001, 200);
    }
}
