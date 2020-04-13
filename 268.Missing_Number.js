/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  /**
   * 解法1：Set提升检索效率
   * 性能：80ms 38.5MB
   */
  var numsSet = new Set(nums);
  for (var i = 0; i <= nums.length; i++) {
    if (!numsSet.has(i)) return i;
  }
};
