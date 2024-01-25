export const trim = (string: string, chars: string) => {
    const str = ' ' + string + ' ';

    if (str && chars === undefined) {
        return string.trim();
    }

    if (!str || !chars) {
        return (string || '');
    }

    const regFirst = new RegExp(` ${chars}`, 'gi');
    const regSecond = new RegExp(`${chars} `, 'gi');

    return str
      .replace(regFirst, '')
      .replace(regSecond, '')
      .trim();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Indexed<T = any> = {
    [key in string]: T;
};

export const merge = (lhs: Indexed, rhs: Indexed): Indexed => {
    for (const p in rhs) {
        if (!rhs.hasOwnProperty(p)) {
            continue;
        }

        try {
            if (rhs[p].constructor === Object) {
                rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
            } else {
                lhs[p] = rhs[p];
            }
        } catch(e) {
            lhs[p] = rhs[p];
        }
    }

    return lhs;
}

export const set = (object: Indexed | unknown, path: string, value: unknown): Indexed | unknown => {
    if (typeof object !== 'object' || object === null) {
        return object;
    }

    if (typeof path !== 'string') {
        throw new Error('path must be string');
    }

    const result = path.split('.').reduceRight<Indexed>((acc, key) => ({
        [key]: acc,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }), value as any);
    return merge(object as Indexed, result);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PlainObject<T = any> = {
    [k in string]: T;
};

const isPlainObject = (value: unknown): value is PlainObject => {
    return typeof value === 'object'
        && value !== null
        && value.constructor === Object
        && Object.prototype.toString.call(value) === '[object Object]';
}

const isArray = (value: unknown): value is [] => {
    return Array.isArray(value);
}

const isArrayOrObject = (value: unknown): value is [] | PlainObject => {
    return isPlainObject(value) || isArray(value);
}

export const isEqual = (lhs: PlainObject, rhs: PlainObject) => {
    if (Object.keys(lhs).length !== Object.keys(rhs).length) {
        return false;
    }

    for (const [key, value] of Object.entries(lhs)) {
        const rightValue = rhs[key];
        if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
            if (isEqual(value, rightValue)) {
                continue;
            }
            return false;
        }

        if (value !== rightValue) {
            return false;
        }
    }

    return true;
}
