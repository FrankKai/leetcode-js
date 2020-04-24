/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  /* 暴力遍历和对撞指针都会超出时间限制 */
  /**
   * 解法1：二分查找
   * 性能：64ms 33.6MB
   */
  let left = 1;
  let right = n;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (guess(mid) === 1) {
      left = mid + 1;
    } else if (guess(mid) === -1) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
};
