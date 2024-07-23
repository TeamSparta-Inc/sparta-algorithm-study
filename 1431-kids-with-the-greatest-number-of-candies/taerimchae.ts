function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {

    let max = 0;
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > max) {
            max = candies[i];
        }
    }

    let result: boolean[] = [];
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            result.push(true);
        } else {
            result.push(false);
        }
    }

    return result;
};