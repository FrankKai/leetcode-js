/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
    // 遍历左右可能的组合
    // 检查是否为等差数列
    // 统计个数
    function check(nums, start, end) {
      if (end - start < 2) return false;
      const value = nums[start + 1] - nums[start];
      for (let i = start; i < end; i++) {
        if (nums[i + 1] - nums[i] !== value) {
          return false;
        }
      }
      return true;
    }
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (check(nums, i, j)) {
          count++;
        }
      }
    }
    return count;
  };