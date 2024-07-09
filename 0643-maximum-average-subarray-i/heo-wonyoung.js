/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = -Infinity
    let start = 0
    let end = k

    const initArr =  nums.slice(start, end)
    let sum  = initArr.reduce((partialSum, a) => partialSum + a, 0)
    max = Math.max(sum/k, max)
    
    while(end < nums.length){
        sum -= nums[start++]
        sum += nums[++end-1]
        
        max = Math.max(sum/k, max)
    }

    return max
};