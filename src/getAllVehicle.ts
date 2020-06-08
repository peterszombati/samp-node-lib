import {IsValidVehicle} from "./SampFunctions";

export function getAllVehicle(): number[] {
    let vehicles: number[] = [];
    for (let i = 1; i <= 2000; i++) {
        if (IsValidVehicle(i)) {
            vehicles.push(i);
        }
    }
    return vehicles;
}