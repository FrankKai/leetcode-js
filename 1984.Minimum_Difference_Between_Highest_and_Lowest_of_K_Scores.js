/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  // 降序排序，截取k
  nums.sort((x, y) => y - x);
  let i = 0;
  let min = Infinity;
  while (i + k - 1 < nums.length) {
    const range = nums[i] - nums[i + k - 1];
    if (range < min) {
      min = range;
    }
    i++;
  }
  return min;
};
