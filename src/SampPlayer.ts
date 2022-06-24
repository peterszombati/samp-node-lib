import {SampPlayerNativeFunctions} from "./SampPlayerNativeFunctions";
import {GetVehicleTrailer, GetVehicleVelocity, GetVehicleZAngle, ShowPlayerDialog} from "./SampFunctions";
import {TextDraw, TextDrawConfig} from "./TextDraw";
import {TextDraws} from "./TextDraws";
import {createPromise} from "./createPromise";

export class SampPlayer extends SampPlayerNativeFunctions {
    state: Record<string, any> = {};
    private dialog: Record<string, (result: {response: number, listitem: number, inputtext: string}) => void> = {};
    private variables: any = {};

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

    ShowDialog(dialogid: number, style: number, caption: string, info: string, button1: string, button2: string): Promise<{response: number, listitem: number, inputtext: string}> {
        const {resolve, promise} = createPromise<{response: number, listitem: number, inputtext: string}>()
        this.dialog[`id${dialogid}`] = resolve
        const result = ShowPlayerDialog(this.playerid, dialogid, style, caption, info, button1, button2)
        if (result === 0) {
            delete this.dialog[`id${dialogid}`]
            throw new Error('player is not connected')
        }
        promise.then(() => delete this.dialog[`id${dialogid}`])
        return promise
    }

    setVariable(name: string, value: any): void {
        if(!this.variables[`id${this.playerid}`]) this.variables[`id${this.playerid}`] = [];
        const index = this.variables[`id${this.playerid}`].findIndex((f: any) => f.name == name);
        if(index == -1) {
            this.variables[`id${this.playerid}`].push({name: name, value: value});
        } else {
            this.variables[`id${this.playerid}`][index].value = value;
        }
    }

    setVariables(values: { [key: string]: any }): void {
        const array = Object.entries(values);
        array.forEach((value) => {
            this.setVariable(value[0], value[1]);
        });
    }
    
    getVariable(name: string): any {
        if(!this.variables[`id${this.playerid}`]) return null;
        const result = this.variables[`id${this.playerid}`].find((f: any) => f.name === name); 
        if(!result) return null;
        return result.value;
    }

    getVariables(): [{name: string, value: any}]|[] {
        if(!this.variables[`id${this.playerid}`]) return [];
        return this.variables[`id${this.playerid}`];
    }
}