import {env} from "../env";

export const asNumber = (key: string): number => {
    const value = env(key);
    if (!isNaN(value)) {
        return Number(value);
    }
    throw new TypeError(`Value [${value}] is not a number`);
}
