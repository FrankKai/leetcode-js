/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  if (!num) return false;
  while (num !== 1) {
    if (Number.isInteger(num / 2)) {
      num = num / 2;
      continue;
    }
    if (Number.isInteger(num / 3)) {
      num = num / 3;
      continue;
    }
    if (Number.isInteger(num / 5)) {
      num = num / 5;
      continue;
    }
    return false;
  }
  return true;
};
