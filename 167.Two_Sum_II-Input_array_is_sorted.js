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
};
