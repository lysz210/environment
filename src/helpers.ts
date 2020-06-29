export function isUndefined (value: any | undefined): boolean {
    return typeof value === 'undefined';
}

export function isEmptyString (value: string | undefined): boolean {
    return isUndefined(value) || value === null || value.length < 1;
}
