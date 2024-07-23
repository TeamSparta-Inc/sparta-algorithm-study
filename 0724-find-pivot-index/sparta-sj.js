/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const total = nums.reduce((acc, num) => acc + num, 0);
    let leftTotal = 0;

    for (let i = 0; i < nums.length; i++) {
        const rightTotal = total - leftTotal - nums[i];

        if (leftTotal === rightTotal) return i;

        leftTotal += nums[i];
    }

    return -1;
};