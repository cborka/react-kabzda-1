export const required = value => {
    if (!value)
        return 'Required field';

    return undefined;
};

export const createMaxLenghtValidator = maxValue => value => {
    if (value && value.length > maxValue)
        return 'Max length = ' + maxValue;

    return undefined;
};