/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const counts = {};
    let maxFrequency = 0;
    nums.forEach(num => {
        counts[num] = counts[num] ? counts[num] + 1 : 1
        maxFrequency = Math.max(counts[num], maxFrequency)
    })

    return Object.values(counts).reduce((acc, curr) => {
        if (curr >= maxFrequency) {
            return acc + curr;
        }

        return acc;
    }, 0)
};
