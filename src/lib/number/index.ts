import {env} from "../env";

export const asNumber = (key: string): number => {
    const value = Number(env(key));
    if (Number.isNaN(value)) {
        throw new TypeError(`Value [${value}] is not a number`);
    }
    return Number(value);
}
