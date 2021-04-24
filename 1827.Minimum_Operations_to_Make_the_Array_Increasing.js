/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let index = 1;
  let current = nums[0];
  let operations = 0;
  while (index < nums.length) {
    if (nums[index] > current) {
      current = nums[index];
    } else {
      current++;
      operations += current - nums[index];
    }
    index++;
  }
  return operations;
};
