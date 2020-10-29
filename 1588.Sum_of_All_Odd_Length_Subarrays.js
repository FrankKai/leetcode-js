/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  const sums = [];
  let i = 0;
  let j = 1;
  let range = 1;
  while (j <= arr.length) {
    const sum = arr.slice(i, j).reduce((acc, cur) => acc + cur);
    sums.push(sum);
    i++;
    j++;
    if (j === arr.length + 1) {
      i = 0;
      j = range + 2;
      range += 2;
    }
  }
  const result = sums.reduce((acc, cur) => acc + cur);
  return result;
};
