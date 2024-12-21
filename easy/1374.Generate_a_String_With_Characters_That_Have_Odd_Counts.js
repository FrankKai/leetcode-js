/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  if (n % 2 === 0) {
    return "a".repeat(1) + "b".repeat(n - 1);
  } else {
    return "a".repeat(n);
  }
};
