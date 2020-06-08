import {CreateObject, DestroyObject, MoveObject} from "./SampFunctions";

interface ObjectPosition {
    x: number,
    y: number,
    z: number,
    rotX: number,
    rotY: number,
    rotZ: number
}

export class DynamicObject {
    private objectid: number | null = null;
    private state: boolean = false; /* false - closed */
    private closed: ObjectPosition | null = null;
    private opened: ObjectPosition | null = null;
    private openDuration: number | null = null;
    private closeDuration: number | null = null;

    constructor(modelid: number, x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number, closeDuration: number = 3, dd: number = 1000) {
        this.closed = {
            x,
            y,
            z,
            rotX,
            rotY,
            rotZ
        };
        this.closeDuration = closeDuration;
        this.objectid = CreateObject(modelid, x, y, z, rotX, rotY, rotZ, dd);
        return this;
    }

    setOpen(x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number, openDuration: number | null = null) {
        this.opened = {
            x,
            y,
            z,
            rotX,
            rotY,
            rotZ
        };
        this.openDuration = openDuration === null ? (this.closeDuration || 3) : openDuration;
        return this;
    }

    open() {
        if (!this.state) {
            return this.move();
        }
        return false;
    }

    close() {
        if (this.state) {
            return this.move();
        }
        return false;
    }

    destroy() {
        if (this.objectid !== null) {
            DestroyObject(this.objectid);
            this.objectid = null;
        }
    }

    private move(): boolean {
        const target = this.state ? this.closed : this.opened;
        if (target === null || this.objectid === null) {
            return false;
        }
        const {
            x,
            y,
            z,
            rotX,
            rotY,
            rotZ
        } = target;
        MoveObject(this.objectid, x, y, z, (this.state ? this.closeDuration : this.openDuration) || this.openDuration || this.closeDuration || 3, rotX, rotY, rotZ);
        this.state = !this.state;
        return true;
    }
}