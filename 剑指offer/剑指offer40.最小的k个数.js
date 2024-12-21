/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  arr.sort((x, y) => x - y);
  const result = [];
  for (const num of arr) {
    if (result.length < k) {
      result.push(num);
    }
  }
  return result;
};
