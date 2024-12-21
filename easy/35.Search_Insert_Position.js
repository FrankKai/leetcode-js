/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  /**
   * 解法1：最大最小值法 + 位置指针法 72ms better than 33%
   */
  var idx = nums.indexOf(target);
  if (idx !== -1) return idx;
  // 边界情况
  // 头部
  var minNum = Math.min(...nums, target);
  if (target === minNum) {
    return 0;
  }
  // 尾部
  var maxNum = Math.max(...nums, target);
  if (target === maxNum) {
    return nums.length;
  }
  // 中间
  // 定义插入位置指针
  var insIdx = 0;
  for (var i = 0; i < nums.length; i++) {
    if (target >= nums[i] && target <= nums[i + 1]) {
      insIdx = i + 1;
      break;
    }
  }
  return insIdx;
  /**
   * 解法2：推入数组重排序法 96ms better than 6.35%
   */
  // nums.push(target);
  // var resortedNums = nums.sort((x,y)=>x-y);
  // return resortedNums.indexOf(target);
};
