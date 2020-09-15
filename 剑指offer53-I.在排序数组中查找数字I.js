/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let count = 0;
  for (const num of nums) {
    if (num === target) {
      count++;
    }
  }
  return count;
};
