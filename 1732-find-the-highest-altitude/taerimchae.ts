function largestAltitude(gain: number[]): number {
    let max = 0;
    let current = 0;
    for (const g of gain) {
        current += g;
        max = Math.max(max, current);
    }
    return max;
};