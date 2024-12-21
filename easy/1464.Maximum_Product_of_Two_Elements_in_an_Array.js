/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let i = 0;
  let j = 1;
  let max = 0;
  for (; j < nums.length; ) {
    const multiply = (nums[i] - 1) * (nums[j] - 1);
    if (max === 0 || multiply > max) {
      max = multiply;
    }
    if (j === nums.length - 1) {
      i++;
      j = i + 1;
    } else {
      j++;
    }
  }
  return max;
};
