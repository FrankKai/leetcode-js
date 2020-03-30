/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  /**
   * 解法一：对比Set和Array的长度
   */
  var arrSet = new Set(nums);
  return arrSet.size !== nums.length;
  /**
   * 解法二：迭代Array，存储到Set中，存储前判断是否has
   */
  var arrSet = new Set();
  for (var i = 0; i < nums.length; i++) {
    if (!arrSet.has(nums[i])) {
      arrSet.add(nums[i]);
    } else {
      return true;
    }
  }
  return false;
};
