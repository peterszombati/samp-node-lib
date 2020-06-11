export class SampNode {
    static on(eventName: string, func: (...args: Array<any>) => void): void {
        samp.on(eventName, func);
    }
    static addListener(eventName: string, func: (...args: Array<any>) => void): void {
        samp.addListener(eventName, func);
    }
    static addEventListener(eventName: string, func: (...args: Array<any>) => void): void {
        samp.addEventListener(eventName, func);
    }
    static removeListener(eventName: string, func: (...args: Array<any>) => void | Array<(...args: Array<any>) => void>): void {
        samp.removeListener(eventName, func);
    }
    static removeEventListener(eventName: string, func: (...args: Array<any>) => void | Array<(...args: Array<any>) => void>): void {
        samp.removeEventListener(eventName, func);
    }
    static registerEvent(eventName: string, paramTypes: string): boolean {
        return samp.registerEvent(eventName, paramTypes);
    }
    static fire(eventName: string, ...args: Array<any>): void {
        return samp.fire(eventName, ...args);
    }
    static callPublic(publicName: string, paramTypes: string, ...args: Array<any>): any {
        return samp.callPublic(publicName, paramTypes, ...args);
    }
    static callPublicFloat(publicName: string, paramTypes: string, ...args: Array<any>): any {
        return samp.callPublicFloat(publicName, paramTypes, ...args);
    }
    static logprint(str: string): any {
        return samp.logprint(str);
    }
    static callNative(nativeName: string, paramTypes: string, ...args: Array<any>): any {
        return samp.callNative(nativeName, paramTypes, ...args);
    }
    static callNativeFloat(nativeName: string, paramTypes: string, ...args: Array<any>): any {
        return samp.callNativeFloat(nativeName, paramTypes, ...args);
    }
}