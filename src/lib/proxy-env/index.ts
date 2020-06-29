import { env } from "../env";
import { asArray } from "../array";


type EnvValue = string | number | boolean | string[] | object;


export function createSmart (map: {[key: string]: string}) : EnvValue {
    return new Proxy(env, {
        get (_, key: string) {
            const converterName = map[key] || 'string';
            switch (converterName) {
                case 'array':
                    return asArray(key)
                case 'string':
                    // falls through
                default:
                    return env[key]
            }
        } 
    })
};