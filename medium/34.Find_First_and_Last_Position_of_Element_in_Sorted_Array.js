/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  /**
   * 解法1：线性扫描法
   * 时间复杂度：O(n)
   */
  let result = [-1, -1];
  for (let i = 0; i < nums.length; i++) {
    if (result[0] === -1 && nums[i] === target) {
      result[0] = i;
    }
    if (nums[i] === target) {
      result[1] = i;
    }
  }
  return result;
};
