/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let i = 0;
  let j = 1;
  let count = 0;
  for (; j < nums.length; ) {
    if (nums[i] === nums[j]) {
      count++;
    }
    if (j === nums.length - 1) {
      i++;
      j = i + 1;
    } else {
      j++;
    }
  }
  return count;
};
