import {SampVehicle} from "./SampVehicle"

export class SampVehicles {
    static ids: any = {};

    static getNewClass(vehicleid: number): SampVehicle {
        if (SampVehicles.ids[`id${vehicleid}`] !== undefined) {
            delete SampVehicles.ids[`id${vehicleid}`];
        }
        SampVehicles.ids[`id${vehicleid}`] = new SampVehicle(vehicleid);
        return SampVehicles.ids[`id${vehicleid}`];
    }

    static getClass(vehicleid: number): SampVehicle {
        if (SampVehicles.ids[`id${vehicleid}`] === undefined) {
            SampVehicles.ids[`id${vehicleid}`] = new SampVehicle(vehicleid);
        }
        return SampVehicles.ids[`id${vehicleid}`];
    }

    static removeClass(vehicleid: number) {
        if (SampVehicles.ids[`id${vehicleid}`] !== undefined) {
            const vehicleClass = SampVehicles.ids[`id${vehicleid}`];
            delete SampVehicles.ids[`id${vehicleid}`];
            return vehicleClass;
        }
        return new SampVehicle(vehicleid);
    }
}