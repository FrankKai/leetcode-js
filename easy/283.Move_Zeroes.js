/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  /**
   * 解法一：递归 
   * 性能：88 ms 35.7 MB
   */
  var length = nums.length;
  for (var i = 0; i < length; i++) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1));
      return moveZeroes(nums);
    }
  }
  return nums;
  /**
   * 解法二：递归 记录0次数 优化版
   * 性能：80 ms 36.8 MB
   */
  /**
   * @param {number[]} nums
   * @return {void} Do not return anything, modify nums in-place instead.
   */
  var length = nums.length;
  var count = arguments[1] || 0;
  for (var i = 0; i < length - count; i++) {
    if (nums[i] === 0) {
      count++;
      nums.push(nums.splice(i, 1));
      return moveZeroes(nums, count);
    }
  }
  return nums;
};
