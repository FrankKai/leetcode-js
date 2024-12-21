/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function (nums) {
  let i = 0;
  while (i < nums.length) {
    if (i === nums[i]) {
      return i;
    }
    i++;
  }
  return -1;
};
