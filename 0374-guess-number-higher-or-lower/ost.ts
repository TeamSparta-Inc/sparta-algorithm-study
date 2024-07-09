function guessNumber(n: number): number {
    let result = 0;
    let start = 1;
    let end = n;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let guessResult = guess(mid);
        if (guessResult === -1) {
            end = mid - 1;
        } else if (guessResult === 1) {
            start = mid + 1;
        } else {
            return mid;
        }
    }
    return result;
}