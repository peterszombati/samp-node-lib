/*
MIT License

Copyright (c) 2020 Peter Szombati

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */
import {
    AddVehicleComponent,
    Attach3DTextLabelToVehicle,
    AttachObjectToVehicle,
    AttachTrailerToVehicle,
    ChangeVehicleColor,
    ChangeVehiclePaintjob,
    DestroyVehicle,
    DetachTrailerFromVehicle,
    GetVehicleComponentInSlot,
    GetVehicleDamageStatus,
    GetVehicleHealth,
    GetVehicleModel,
    GetVehicleParamsCarDoors,
    GetVehicleParamsCarWindows,
    GetVehicleParamsEx,
    GetVehicleParamsSirenState,
    GetVehiclePos,
    GetVehicleRotationQuat,
    GetVehicleTrailer,
    GetVehicleVelocity,
    GetVehicleVirtualWorld,
    GetVehicleZAngle,
    IsTrailerAttachedToVehicle,
    IsValidVehicle,
    IsVehicleStreamedIn,
    LinkVehicleToInterior,
    RemoveVehicleComponent,
    RepairVehicle,
    SetVehicleAngularVelocity,
    SetVehicleHealth,
    SetVehicleNumberPlate,
    SetVehicleParamsCarDoors,
    SetVehicleParamsCarWindows,
    SetVehicleParamsEx,
    SetVehiclePos,
    SetVehicleToRespawn,
    SetVehicleVelocity,
    SetVehicleVirtualWorld,
    SetVehicleZAngle,
    UpdateVehicleDamageStatus
} from "./SampFunctions";

export class SampVehicleNativeFunctions {
    constructor(vehicleId: number) {
        this._vehicleId = vehicleId
    }

    protected _vehicleId: number

    Attach3DTextLabelToVehicle(id: number, OffsetX: number, OffsetY: number, OffsetZ: number): number {
        return Attach3DTextLabelToVehicle(id, this._vehicleId, OffsetX, OffsetY, OffsetZ)
    }

    AttachObjectToVehicle(objectid: number, OffsetX: number, OffsetY: number, OffsetZ: number, RotX: number, RotY: number, RotZ: number): number {
        return AttachObjectToVehicle(objectid, this._vehicleId, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ)
    }

    DestroyVehicle(): number {
        return DestroyVehicle(this._vehicleId)
    }

    IsVehicleStreamedIn(forplayerid: number): number {
        return IsVehicleStreamedIn(this._vehicleId, forplayerid)
    }

    GetVehiclePos() {
        return GetVehiclePos(this._vehicleId)
    }

    SetVehiclePos(x: number, y: number, z: number): number {
        return SetVehiclePos(this._vehicleId, x, y, z)
    }

    GetVehicleZAngle(): number {
        return GetVehicleZAngle(this._vehicleId)
    }

    GetVehicleRotationQuat(): Array<any> {
        return GetVehicleRotationQuat(this._vehicleId)
    }

    SetVehicleZAngle(z_angle: number): number {
        return SetVehicleZAngle(this._vehicleId, z_angle)
    }

    SetVehicleParamsEx(engine: number, lights: number, alarm: number, doors: number, bonnet: number, boot: number, objective: number): number {
        return SetVehicleParamsEx(this._vehicleId, engine, lights, alarm, doors, bonnet, boot, objective)
    }

    GetVehicleParamsEx(): Array<any> {
        return GetVehicleParamsEx(this._vehicleId)
    }

    GetVehicleParamsSirenState(): number {
        return GetVehicleParamsSirenState(this._vehicleId)
    }

    SetVehicleParamsCarDoors(driver: number, passenger: number, backleft: number, backright: number): number {
        return SetVehicleParamsCarDoors(this._vehicleId, driver, passenger, backleft, backright)
    }

    GetVehicleParamsCarDoors() {
        return GetVehicleParamsCarDoors(this._vehicleId)
    }

    SetVehicleParamsCarWindows(driver: number, passenger: number, backleft: number, backright: number): number {
        return SetVehicleParamsCarWindows(this._vehicleId, driver, passenger, backleft, backright)
    }

    GetVehicleParamsCarWindows() {
        return GetVehicleParamsCarWindows(this._vehicleId)
    }

    SetVehicleToRespawn(): number {
        return SetVehicleToRespawn(this._vehicleId)
    }

    LinkVehicleToInterior(interiorid: number): number {
        return LinkVehicleToInterior(this._vehicleId, interiorid)
    }

    AddVehicleComponent(componentid: number): number {
        return AddVehicleComponent(this._vehicleId, componentid)
    }

    RemoveVehicleComponent(componentid: number): number {
        return RemoveVehicleComponent(this._vehicleId, componentid)
    }

    ChangeVehicleColor(color1: number, color2: number): number {
        return ChangeVehicleColor(this._vehicleId, color1, color2)
    }

    ChangeVehiclePaintjob(paintjobid: number): number {
        return ChangeVehiclePaintjob(this._vehicleId, paintjobid)
    }

    SetVehicleHealth(health: number): number {
        return SetVehicleHealth(this._vehicleId, health)
    }

    GetVehicleHealth(): number {
        return GetVehicleHealth(this._vehicleId)
    }

    AttachTrailerToVehicle(trailerid: number): number {
        return AttachTrailerToVehicle(trailerid, this._vehicleId)
    }

    DetachTrailerFromVehicle(): number {
        return DetachTrailerFromVehicle(this._vehicleId)
    }

    IsTrailerAttachedToVehicle(): number {
        return IsTrailerAttachedToVehicle(this._vehicleId)
    }

    GetVehicleTrailer(): number {
        return GetVehicleTrailer(this._vehicleId)
    }

    SetVehicleNumberPlate(numberplate: string): number {
        return SetVehicleNumberPlate(this._vehicleId, numberplate)
    }

    GetVehicleModel(): number {
        return GetVehicleModel(this._vehicleId)
    }

    GetVehicleComponentInSlot(slot: number): number {
        return GetVehicleComponentInSlot(this._vehicleId, slot)
    }

    RepairVehicle(): number {
        return RepairVehicle(this._vehicleId)
    }

    GetVehicleVelocity(): Array<any> {
        return GetVehicleVelocity(this._vehicleId)
    }

    SetVehicleVelocity(X: number, Y: number, Z: number): number {
        return SetVehicleVelocity(this._vehicleId, X, Y, Z)
    }

    SetVehicleAngularVelocity(X: number, Y: number, Z: number): number {
        return SetVehicleAngularVelocity(this._vehicleId, X, Y, Z)
    }

    GetVehicleDamageStatus() {
        return GetVehicleDamageStatus(this._vehicleId)
    }

    UpdateVehicleDamageStatus(panels: number, doors: number, lights: number, tires: number): number {
        return UpdateVehicleDamageStatus(this._vehicleId, panels, doors, lights, tires)
    }

    SetVehicleVirtualWorld(worldid: number): number {
        return SetVehicleVirtualWorld(this._vehicleId, worldid)
    }

    GetVehicleVirtualWorld(): number {
        return GetVehicleVirtualWorld(this._vehicleId)
    }

    IsValidVehicle(): number {
        return IsValidVehicle(this._vehicleId)
    }
}
