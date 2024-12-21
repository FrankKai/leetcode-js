/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  /**
   * 解法
   * - 克隆数组并排序
   * - 找起始元素的索引值
   *     - startIdx 从头到尾 找到第一个发生变化的元素索引
   *     - endIdx 从尾到头 找到第一个发生变化的元素索引
   */
  // 使用[...nums]克隆一个新数组，是因为sort改变的是自身，不会返回一个新数组
  var sortedNums = [...nums].sort((a, b) => a - b);
  var startIdx = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== sortedNums[i]) {
      startIdx = i;
      break;
    }
  }
  var endIdx = 0;

  for (var j = nums.length - 1; j >= 0; j--) {
    if (nums[j] !== sortedNums[j]) {
      endIdx = j;
      break;
    }
  }
  var length = endIdx - startIdx > 0 ? endIdx - startIdx + 1 : 0;
  return length;
};
