/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 解法3: 原地删除
  let i = 0;
  while (i < nums.length) {
    if (val === nums[i]) {
      nums.splice(i, 1)
      continue;
    }
    i++;
  }
  return nums.length
  /**
   * 解法1：指针加递归
   * 性能：68ms 33.7MB
   */
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
  /**
   * 解法2：对撞指针
   * 性能：64ms 33.9MB
   */
  var i = 0;
  var j = nums.length - 1;
  while (i <= j) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      j--;
    } else if (nums[j] === val) {
      nums.splice(j, 1);
      j--;
    } else {
      i++;
    }
  }
  return nums.length;
};
