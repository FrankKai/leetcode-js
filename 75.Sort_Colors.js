/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  /**
   * 解法1：递归 栈
   * 性能：64ms 35.1MB
   */
  var length = nums.length;
  var countHead = arguments[1] || 0;
  var countTail = arguments[2] || 0;
  for (var i = countHead || 0; i < length - countTail; i++) {
    if (nums[i] === 0) {
      countHead++;
      nums.unshift(nums.splice(i, 1)); // 增加if(i!==0)会降低10ms性能
      return sortColors(nums, countHead, countTail);
    } else if (nums[i] === 2) {
      countTail++;
      nums.push(nums.splice(i, 1));
      return sortColors(nums, countHead, countTail);
    }
  }
  return nums;
  /**
   * 解法2：统计出现次数 填充数组
   * 性能：92ms 34MB
   */
  var zero = 0;
  var one = 0;
  var two = 0;
  for (var i = 0; i < nums.length; i++) {
    switch (nums[i]) {
      case 0:
        zero++;
        break;
      case 1:
        one++;
        break;
      case 2:
        two++;
        break;
      default:
        break;
    }
  }
  for (var i = 0; i < nums.length; i++) {
    if (i >= 0 && i < zero) {
      nums[i] = 0;
    } else if (i >= zero && i < zero + one) {
      nums[i] = 1;
    } else {
      nums[i] = 2;
    }
  }
  return nums;
};
