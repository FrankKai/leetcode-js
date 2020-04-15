/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  /**
   * 解法1：排序 + 栈
   * 性能：64ms 33.7MB
   */
  nums.sort((a, b) => a - b);
  let stack = [];
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (stack.length === 0 || nums[i] - stack[stack.length - 1] === 1) {
      stack.push(nums[i]);
    } else {
      if (stack.length > 1) {
        result.push(`${stack[0]}->${stack[stack.length - 1]}`);
      } else {
        result.push(`${stack[0]}`);
      }

      stack = [];
      stack.push(nums[i]);
    }
    if (i === nums.length - 1) {
      if (stack.length > 1) {
        result.push(`${stack[0]}->${stack[stack.length - 1]}`);
      } else {
        result.push(`${stack[0]}`);
      }
    }
  }
  return result;
};
