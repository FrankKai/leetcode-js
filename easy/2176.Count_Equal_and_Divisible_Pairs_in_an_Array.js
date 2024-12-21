/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
  let count = 0;
  let i = 0;
  while (i < nums.length) {
    let j = i + 1;
    while (j < nums.length) {
      if (nums[i] === nums[j] && (i * j) % k === 0) {
        count++;
      }
      j++;
    }
    if (j === nums.length) {
      i++;
    }
  }
  return count;
};
