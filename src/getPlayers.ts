import {GetMaxPlayers, IsPlayerConnected} from "./SampFunctions";
import {SampPlayer} from "./SampPlayer";
import {SampPlayers} from "./SampPlayers";

export function getPlayers(): SampPlayer[] {
    const maxPlayers = GetMaxPlayers();
    const res: SampPlayer[] = [];
    for (let i = 0; i <= maxPlayers; i++) {
        if (IsPlayerConnected(i)) {
            res.push(SampPlayers.getClass(i));
        }
    }
    return res;
}
