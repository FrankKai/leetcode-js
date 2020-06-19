/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  /**
   * 解法1：辅助数组
   */
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[i + n]);
  }
  return result;
  /**
   * 解法2：原数组操作
   * 思路：将后半段的数字，插入到前半段数组
   */
  let j = 1;
  for (let i = n; i <= 2 * n - 1; i++) {
    const num = nums.splice(i, 1);
    nums.splice(j, 0, num[0]);
    j += 2;
  }
  return nums;
};
