/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
    /**
     * 解法1：二分法（模板二）
     * 当前索引及右邻居索引
     * 时间复杂度: O(logn)
     * 思路：
     * 初始条件：left = 1, right = n
     * 终止条件：left === right
     * 向左查找：right = mid
     * 向右查找：left = mid + 1
     */
  return function (n) {
    let left = 1;
    let right = n;
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};
