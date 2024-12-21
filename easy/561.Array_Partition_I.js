/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  var sortNums = nums.sort((x, y) => x - y);
  var sum = 0;
  for (var i = 0; i < sortNums.length; i += 2) {
    sum += Math.min(sortNums[i], sortNums[i + 1]);
  }
  return sum;
};
