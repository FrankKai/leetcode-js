/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  /**
   * 解法1：倒序排序输出
   */
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};
