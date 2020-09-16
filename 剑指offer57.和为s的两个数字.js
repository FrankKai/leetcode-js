/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (nums[i] + nums[j] < target) {
      i++;
      continue;
    }
    if (nums[i] + nums[j] > target) {
      j--;
      continue;
    }
    return [nums[i], nums[j]];
  }
};
