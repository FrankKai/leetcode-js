/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  let i = 0;
  while (i <= n) {
    if (i !== nums[i]) {
      return i;
    }
    i++;
  }
};
