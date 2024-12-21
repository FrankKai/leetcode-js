/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  if (!num) return false;
  while (num !== 1) {
    num = num / 4;
    if (!Number.isInteger(num)) {
      return false;
    }
  }
  return true;
};
