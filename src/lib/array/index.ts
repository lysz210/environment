import {env} from "../env";

export const asArray = (key: string, separator: string = ',') => {
    return env(key)?.split(separator);
}
