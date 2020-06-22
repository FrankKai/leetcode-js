/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  /**
   * 异或：a，b两个值不同时，异或为1；a，b两个值相同时，异或为0
   */
  const nums = [];
  for (let i = 0; i <= n - 1; i++) {
    nums.push(start + 2 * i);
  }
  const result = nums.reduce((acc, cur) => acc ^ cur);
  return result;
};
