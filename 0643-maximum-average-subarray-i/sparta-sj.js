/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let left = 0;
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let average = sum / k;

    for (let i = k; i < nums.length; i++) {
        sum = sum - nums[left] + nums[i];
        left++;
        average = Math.max(average, sum / k);
    }

    return average;
};