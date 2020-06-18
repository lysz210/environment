import {env} from "../env";

const VALID_BOOLEAN_TRUE_VALUES = [
    'true',
    true,
    1,
    '1',
    'Y',
    'y',
];

export const asBoolean = (key: string) => {
    return VALID_BOOLEAN_TRUE_VALUES.includes(env(key));
}
