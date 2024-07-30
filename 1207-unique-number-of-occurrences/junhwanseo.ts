function uniqueOccurrences(arr: number[]): boolean {
    const obj = {};

    for(let i = 0; i < arr.length; i += 1) {
        const target = arr[i];

        if (obj[target] === undefined) {
            obj[target] = 1;
        } else {
            obj[target] += 1;
        }
    }

    const set = new Set(Object.values(obj));

    return set.size === Object.keys(obj).length;
};