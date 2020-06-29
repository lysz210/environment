import { InvalidArgumentError, UndefinedEnvError } from "./exceptions";
import { isEmptyString } from "src/helpers";
import { isUndefined } from "util";

export function env(key: string): string {
    if (isEmptyString(key)) {
        throw new InvalidArgumentError('The key cannot be empty!')
    }
    const retVal = process.env[key];
    if (isUndefined(retVal)) {
        throw new UndefinedEnvError(`Undefined env['${key}']`)
    }
    return process.env[key];
}
