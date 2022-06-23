import {SampVehicleNativeFunctions} from "./SampVehicleNativeFunctions"

export class SampVehicle extends SampVehicleNativeFunctions {
    public state: Record<string, any> = {};
    setState(newState: Record<string, any>) {
        this.state = {...this.state, ...newState};
    }

    public get vehicleId(): number {
        return this._vehicleId
    }
}