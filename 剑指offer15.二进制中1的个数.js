/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  for (const char of n.toString(2)) {
    if (char === "1") {
      count++;
    }
  }
  return count;
};
