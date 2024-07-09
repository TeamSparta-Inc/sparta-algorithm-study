function largestAltitude(gain: number[]): number {
    let temp = 0
    let max = -999
    for(let g of gain){
        temp = g+temp
        max = Math.max(temp, max)
    }
    return max < 0 ? 0 : max
};
