import {Attach3DTextLabelToVehicle, AttachObjectToVehicle, AttachPlayerObjectToVehicle, IsValidVehicle, GetVehicleVirtualWorld, DestroyVehicle, IsVehicleStreamedIn, GetVehiclePos, SetVehiclePos, GetVehicleZAngle, GetVehicleRotationQuat, SetVehicleZAngle, SetVehicleParamsEx, GetVehicleParamsEx, GetVehicleParamsSirenState, SetVehicleParamsCarDoors, GetVehicleParamsCarDoors, SetVehicleParamsCarWindows, GetVehicleParamsCarWindows, SetVehicleToRespawn, LinkVehicleToInterior, AddVehicleComponent, RemoveVehicleComponent, ChangeVehicleColor, ChangeVehiclePaintjob, SetVehicleHealth, GetVehicleHealth, AttachTrailerToVehicle, DetachTrailerFromVehicle, IsTrailerAttachedToVehicle, GetVehicleTrailer, SetVehicleNumberPlate, GetVehicleModel, GetVehicleComponentInSlot, RepairVehicle, GetVehicleVelocity, SetVehicleVelocity, SetVehicleAngularVelocity, GetVehicleDamageStatus, UpdateVehicleDamageStatus, SetVehicleVirtualWorld} from "./SampFunctions";

export class SampVehicle {
    private _vehicleId: number
    constructor(vehicleId: number) {
        this._vehicleId = vehicleId
    }
    public get vehicleId(): number {
        return this._vehicleId
    }
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