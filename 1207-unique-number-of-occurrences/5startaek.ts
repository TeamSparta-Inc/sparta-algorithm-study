function uniqueOccurrences(arr: number[]): boolean {
    const map = new Map();
    for (const element of arr) {
        map.set(element, (map.get(element) || 0) + 1);
    }
    return map.size === new Set(map.values()).size;
};