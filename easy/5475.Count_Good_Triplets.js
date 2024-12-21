/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  let count = 0;
  let i = 0;
  let j = 1;
  let k = 2;

  while (k < arr.length) {
    if (
      Math.abs(arr[i] - arr[j]) <= a &&
      Math.abs(arr[j] - arr[k]) <= b &&
      Math.abs(arr[i] - arr[k]) <= c
    ) {
      count++;
    }
    k++;
    if (k === arr.length) {
      j++;
      k = j + 1;
    }
    if (j === arr.length - 1) {
      i++;
      j = i + 1;
      k = j + 1;
    }
  }
  return count;
};
