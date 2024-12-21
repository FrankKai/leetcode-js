/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  arr.sort((x, y) => x - y);
  const range = Math.floor(arr.length * 0.05);
  arr.splice(0, range);
  arr.splice(-range);
  const average = arr.reduce((acc, cur) => acc + cur) / arr.length;
  return average;
};
