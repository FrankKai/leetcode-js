/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  let oddCount = 0;
  for (const num of arr) {
    if (num % 2 === 1) {
      oddCount++;
      if (oddCount === 3) {
        return true;
      }
      continue;
    }
    oddCount = 0;
  }
  return false;
};
