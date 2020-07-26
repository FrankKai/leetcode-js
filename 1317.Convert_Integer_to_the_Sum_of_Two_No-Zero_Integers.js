/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
  let i = 1;
  let j = n - 1;
  let result = [];
  while (i < n) {
    if (`${i}`.indexOf("0") === -1 && `${j}`.indexOf("0") === -1) {
      result = [i, j];
      break;
    }
    i++;
    j = n - i;
  }
  return result;
};
