/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  /**解法1 Array.prototype.sort()
   */
  return nums.sort((a, b) => a - b);
  /**
   * 解法2 Math.min
   */
  var result = [];
  var length = nums.length;
  for (var i = 0; i < length; i++) {
    var min = Math.min(...nums);
    var idx = nums.indexOf(min);
    var del = nums.splice(idx, 1);
    result.push(del);
  }
  return result;
  /**
   * 解法3：冒泡排序
   * 思路：外层每次循环都是不断将最大值置于尾部,最小值像气泡一样向前冒出
   * 性能：4704ms 39.4MB
   */
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
};
