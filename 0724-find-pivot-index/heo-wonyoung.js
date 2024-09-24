/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let t = 0
    const sumArr = nums.map(num => {
        t += num
        return t
    })

    for(let pi = 0; pi < sumArr.length; pi++){
        if(sumArr[sumArr.length-1] - sumArr[pi] === sumArr[pi] - nums[pi]){
            return pi
        }
    }
    return -1
};