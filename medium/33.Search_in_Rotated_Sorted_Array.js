/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  /**
   * 解法1：二分查找
   * 时间复杂度: O(logn)
   * 思路：
   * 目标值在左升序区间和右升序区间。
   * 目标值在左升序区间逻辑：位于区间内，从右逼近；不位于区间内，从左逼近。
   * 目标值在右升序区间逻辑：位于区间内，从左逼近；不位于区间内，从右逼近。
   */
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (target === nums[mid]) {
      return mid;
    }
    // 目标值在左升序区间逻辑
    if (nums[left] <= nums[mid]) {
      // 位于区间内，从右逼近
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid - 1;
      } else {
        // 不位于区间内，从左逼近
        left = mid + 1;
      }
    } else {
      // 目标值在右升序区间逻辑
      // 位于区间内，从左逼近
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        // 不位于区间内，从右逼近
        right = mid - 1;
      }
    }
  }
  return -1;
};
