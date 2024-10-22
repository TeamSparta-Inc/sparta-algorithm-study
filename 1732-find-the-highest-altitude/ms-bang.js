/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
   let arr = [0];
    for(let i of gain){
        arr.push(i + arr[arr.length - 1])
    }

  return Math.max(...arr)
};