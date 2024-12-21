/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (nums.length === 0) return [];
  let i = 0;
  let j = k;
  const maxs = [];
  while (j <= nums.length) {
    maxs.push(Math.max(...nums.slice(i, j)));
    i++;
    j++;
  }
  return maxs;
};
