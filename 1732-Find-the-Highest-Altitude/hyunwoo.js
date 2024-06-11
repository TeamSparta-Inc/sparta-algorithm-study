/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let startArray = [0];
  gain.map((gainNumber) => {
    let target = startArray[startArray.length - 1];
    let added = target + gainNumber;
    startArray.push(added);
  });
  let highest = 0;
  startArray.map((altitude) => {
    if (altitude > highest) {
      highest = altitude;
    }
  });
  return highest;
};
