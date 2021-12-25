export const on = (eventName: string, func: (...args: Array<any>) => void): void => {
    samp.on(eventName, func);
}
export const addListener = (eventName: string, func: (...args: Array<any>) => void): void => {
    samp.addListener(eventName, func);
}
export const addEventListener = (eventName: string, func: (...args: Array<any>) => void): void => {
    samp.addEventListener(eventName, func);
}
export const removeListener = (eventName: string, func: (...args: Array<any>) => void | Array<(...args: Array<any>) => void>): void => {
    samp.removeListener(eventName, func);
}
export const removeEventListener = (eventName: string, func: (...args: Array<any>) => void | Array<(...args: Array<any>) => void>): void => {
    samp.removeEventListener(eventName, func);
}
export const registerEvent = (eventName: string, paramTypes: string): boolean => {
    return samp.registerEvent(eventName, paramTypes);
}
export const fire = (eventName: string, ...args: Array<any>): void => {
    samp.fire(eventName, ...args);
}
export const callPublic = (publicName: string, paramTypes: string, ...args: Array<any>): any => {
    return samp.callPublic(publicName, paramTypes, ...args);
}
export const callPublicFloat = (publicName: string, paramTypes: string, ...args: Array<any>): any => {
    return samp.callPublicFloat(publicName, paramTypes, ...args);
}
export const logprint = (str: string): any => {
    return samp.logprint(str);
}
export const callNative = (nativeName: string, paramTypes: string, ...args: Array<any>): any => {
    return samp.callNative(nativeName, paramTypes, ...args);
}
export const callNativeFloat = (nativeName: string, paramTypes: string, ...args: Array<any>): any => {
    return samp.callNativeFloat(nativeName, paramTypes, ...args);
}
