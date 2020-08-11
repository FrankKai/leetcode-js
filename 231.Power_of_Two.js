/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (!n) return false;
  while (n !== 1) {
    n = n / 2;
    if (!Number.isInteger(n)) {
      return false;
    }
  }
  return true;
};
