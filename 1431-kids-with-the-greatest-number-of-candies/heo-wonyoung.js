/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const MAX = Math.max(...candies)
    const arr = []

    for(let i = 0; i< candies.length ; i++){
        arr.push(candies[i]+extraCandies >= MAX)
    }
    return arr
};