/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  while (left <= right) {
    if (ranges.find((item) => left >= item[0] && left <= item[1])) {
      left++;
      continue;
    } else {
      return false;
    }
  }
  return true;
};
