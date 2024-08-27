/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const sums = {};
    arr.forEach(element => {
        sums[element] = sums[element] ? sums[element] + 1 : 1;
    })
    
    let result = true;
    const checks = {};
    Object.values(sums).some(sum => {
        if (checks[sum]) {
            result = false;
        } else {
            checks[sum] = true;
        }
    })

    return result;
};