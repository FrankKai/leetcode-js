/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  /**
   * 思路:
   * 升序排序
   * 全正数情况：直接乘后三位
   * 存在负数情况：计算出负数尾部2个与整数尾部1个的乘积，与后三位乘积取最大值
   */
  nums.sort((x, y) => x - y);
  let hasNegative = false;
  for (const num of nums) {
    if (num < 0) {
      hasNegative = true;
      break;
    }
  }
  let leftMax = -Infinity;
  if (hasNegative) {
    leftMax = nums[0] * nums[1] * nums[nums.length - 1];
  }
  let rightMax = 1;
  let i = nums.length - 1;
  while (i >= nums.length - 3) {
    rightMax *= nums[i];
    i--;
  }
  const result = Math.max(leftMax, rightMax);
  return result;
};
