/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  /**
   * 解法1：暴力遍历
   * 性能：416ms 34.9 MB
   */
  var i = 0;
  for (; i < numbers.length; i++) {
    var j = 1;
    for (; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target && i !== j) {
        return [i + 1, j + 1];
      }
    }
  }
  /**
   * 解法2：对撞指针
   * 性能：68ms 71.18% 35.2MB 76.60%
   * 时间复杂度：O(n^2)
   */
  var left = 0;
  var right = numbers.length - 1;
  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1];
    } else if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      left++;
    }
  }
};
