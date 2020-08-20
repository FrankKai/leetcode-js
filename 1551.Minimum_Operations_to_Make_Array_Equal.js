/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  /**
   * 解法1: 双指针之对撞指针
   * [1,3,5] => [3,3,3] (5-1)/2 = 2
   * [1,3,5,7,9,11] => [6,6,6,6,6,6] (11-1)/2 + (9-3)/2 + (7-5)/2 = 5+3+1 = 9
   */

  const arr = new Array(n).fill(1).map((_, i) => 2 * i + 1);
  let i = 0;
  let j = n - 1;
  let count = 0;
  while (i < j) {
    count += (arr[j] - arr[i]) / 2;
    i++;
    j--;
  }
  return count;
  /**
   * 解法1: 双指针之对撞指针(优化版)
   */
  let i = 0;
  let j = n - 1;
  let count = 0;
  while (i < j) {
    count += j - i;
    i++;
    j--;
  }
  return count;
};
