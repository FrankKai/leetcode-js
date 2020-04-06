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
};
