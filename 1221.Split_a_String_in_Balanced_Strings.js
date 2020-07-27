/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  /**
   * 解法：
   */
  let count = 0;
  let rCount = 0;
  let lCount = 0;
  for (const char of s) {
    if (char === "R") {
      rCount++;
    } else {
      lCount++;
    }
    if (rCount === lCount) {
      count++;
      rCount = 0;
      lCount = 0;
    }
  }
  return count;
};
