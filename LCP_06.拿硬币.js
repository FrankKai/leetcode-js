/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function (coins) {
  /**
   * 解法1：普通解法
   * 时间复杂度：O(n)
   */
  let count = 0;
  coins.forEach((num) => {
      if (num % 2 === 0) {
          count += num / 2;
      } else {
          count += Math.floor(num / 2) + 1;
      }
  })
  return count;
  /**
   * 解法2：reduce
   * 时间复杂度：O(n)
   */
  let count = coins.reduce((acc, cur) => {
    if (cur % 2 === 0) {
      acc += cur / 2;
    } else {
      acc += Math.floor(cur / 2) + 1;
    }
    return acc;
  }, 0);
  return count;
};
