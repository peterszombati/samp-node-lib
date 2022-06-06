import {SampPlayerNativeFunctions} from "./SampPlayerNativeFunctions";
import {GetVehicleTrailer, GetVehicleVelocity, GetVehicleZAngle} from "./SampFunctions";
import {TextDraw, TextDrawConfig} from "./TextDraw";
import {TextDraws} from "./TextDraws";

export class SampPlayer extends SampPlayerNativeFunctions {
    state: Record<string, any> = {};

    constructor(playerid: number) {
        super(playerid);
    }

    public get vehicleId() {
        return this.GetPlayerVehicleID();
    }

    public get position() {
        const p = this.GetPlayerPos();
        const {vehicleId} = this;
        const angle = vehicleId !== 0 ? GetVehicleZAngle(vehicleId) : this.GetPlayerFacingAngle();
        return {
            x: p[0],
            y: p[1],
            z: p[2],
            angle,
            vehicleId
        };
    }

    public get trailerId() {
        const {vehicleId} = this;
        return vehicleId !== 0 ? GetVehicleTrailer(vehicleId) : 0;
    }

    public get speed() {
        const {vehicleId} = this;
        const speed = vehicleId !== 0 ? GetVehicleVelocity(vehicleId) : this.GetPlayerVelocity();
        return {
            x: speed[0],
            y: speed[1],
            z: speed[2]
        }
    }

    setState(newState: Record<string, any>) {
        this.state = {...this.state, ...newState};
    }

    TextDraw(config: TextDrawConfig, name: string) {
        return new TextDraw(this.playerid, config, name);
    }

    TextDrawShow(name: string) {
        TextDraws.getAll(this.playerid).filter(td => td.name === name).forEach(td => td.show());
    }

    TextDrawHide(name: string) {
        TextDraws.getAll(this.playerid).filter(td => td.name === name).forEach(td => td.hide());
    }

    TextDrawDestory(name: string) {
        TextDraws.destroy(this.playerid, name);
    }
}