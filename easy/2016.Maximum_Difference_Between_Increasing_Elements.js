/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  // 从右到左依次相减，差值大于0时比较出最大值
  let res = -1;
  let j = nums.length - 1;
  while (j > 0) {
    let i = j - 1;
    while (i >= 0) {
      const value = nums[j] - nums[i];
      if (value > 0 && value > res) {
        res = value;
      }
      i--;
      if (i === 0) {
        // j -= 1;
      }
    }
    j--;
  }
  return res;
};
