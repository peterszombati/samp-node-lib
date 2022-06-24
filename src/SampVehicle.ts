import {SampVehicleNativeFunctions} from "./SampVehicleNativeFunctions"

export class SampVehicle<T = Record<string, any>> extends SampVehicleNativeFunctions {
    public state: T | {} = {};
    setState(newState: T) {
        this.state = {...this.state, ...newState};
    }

    public get vehicleId(): number {
        return this._vehicleId
    }
}