import {env} from "../env";

export const asJson = (key: string) => {
    try {
        return JSON.parse(env(key));
    } catch (e) {
        throw new TypeError(e.message);
    }
};
