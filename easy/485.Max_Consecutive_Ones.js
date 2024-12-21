/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  /**
   * 解法1：根据0截断 比较长度
   * 性能：80ms 37.7MB
   */
  var oneArr = nums
    .join("")
    .split(0)
    .map((str) => str.length);
  var maxLen = Math.max(...oneArr);
  return maxLen;
  /**
   * 解法2：遍历法
   * 性能：104ms 37.4MB
   */
  var head = 0;
  var max = 0;
  var helper = 0;
  for (; head <= nums.length; head++) {
    if (nums[head] === 1) {
      helper++;
    } else {
      max = Math.max(max, helper);
      helper = 0;
    }
  }
  return max;
};
