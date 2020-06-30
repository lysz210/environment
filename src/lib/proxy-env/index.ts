import { env } from "../env";
import { asArray } from "../array";
import { asJson } from "../json";
import { asNumber } from "../number";
import { asBoolean } from "../boolean";

type EnvValue = string | number | boolean | string[] | object;

export function createSmart (map: {[key: string]: string}) : EnvValue {
    return new Proxy(env, {
        get (_, key: string) {
            const converterName = map[key] || 'string';
            switch (converterName) {
                case 'boolean':
                    return asBoolean(key);
                case 'number':
                    return asNumber(key);
                case 'json':
                    // falls through
                case 'object':
                    return asJson(key);
                case 'array':
                    return asArray(key);
                case 'string':
                    // falls through
                default:
                    return env(key);
            }
        } 
    })
};