import {SampVehicle} from "./SampVehicle"

export class SampVehicles {
    static ids: Record<string, SampVehicle> = {};

    static getNewClass<V>(vehicleid: number): SampVehicle<V> {
        if (SampVehicles.ids[`id${vehicleid}`] !== undefined) {
            delete SampVehicles.ids[`id${vehicleid}`];
        }
        SampVehicles.ids[`id${vehicleid}`] = new SampVehicle(vehicleid);
        // @ts-ignore
        return SampVehicles.ids[`id${vehicleid}`];
    }

    static getClass<V>(vehicleid: number): SampVehicle<V> {
        if (SampVehicles.ids[`id${vehicleid}`] === undefined) {
            SampVehicles.ids[`id${vehicleid}`] = new SampVehicle(vehicleid);
        }
        // @ts-ignore
        return SampVehicles.ids[`id${vehicleid}`];
    }

    static removeClass<V>(vehicleid: number): SampVehicle<V> {
        if (SampVehicles.ids[`id${vehicleid}`] !== undefined) {
            const vehicleClass = SampVehicles.ids[`id${vehicleid}`];
            delete SampVehicles.ids[`id${vehicleid}`];
            // @ts-ignore
            return vehicleClass;
        }
        return new SampVehicle(vehicleid);
    }
}