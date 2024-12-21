/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  let i = low;
  let count = 0;
  while (i <= high) {
    if (i % 2 === 1) {
      count++;
    }
    i++;
  }
  return count;
};
