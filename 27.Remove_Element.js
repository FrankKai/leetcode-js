/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // 指针加递归
  var i = 0;
  for (; i < nums.length; ) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      removeElement(nums, val);
    } else {
      i++;
    }
  }
  return nums.length;
};
