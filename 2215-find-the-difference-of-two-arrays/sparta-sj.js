/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const map1 = new Map();
    const map2 = new Map();
    nums1.forEach(num => !map1.get(num) && map1.set(num, true))
    nums2.forEach(num => !map2.get(num) && map2.set(num, true))

    const result1 = {};
    const result2 = {};
    nums1.forEach(num => {
        if(!map2.get(num)) result1[num] = true
    });
    nums2.forEach(num => {
        if(!map1.get(num)) result2[num] = true
    });

    console.log(result1, result2);

    // return [result1, result2];
};