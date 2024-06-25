/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let count = {};
  for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  return Object.keys(count)
    .filter((key) => count[Number(key)] === 1)
    .map(Number);
};
