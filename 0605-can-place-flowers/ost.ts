function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    for (let i = 0; i < flowerbed.length; i++) {
        if (n === 0) break
        if (flowerbed[i] === 1){
            i++
            continue
        }
        if (!flowerbed[i - 1] && !flowerbed[i + 1]) {
            n--
            i++
        }
    }
    return !n
};