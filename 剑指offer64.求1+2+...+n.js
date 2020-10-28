/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
  /**
   * 解法1：与
   * true && "foo" // "foo"
   */
  return n && n + sumNums(n - 1);
  /**
   * 解法2：或
   */
  return n === 1 || n + sumNums(n - 1);
};
