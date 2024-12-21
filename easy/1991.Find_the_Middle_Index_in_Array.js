/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  const sumAll = nums.reduce((acc, cur) => acc + cur, 0);
  let i = 0;
  let sumPrefix = 0;
  while (i < nums.length) {
    if (sumPrefix === sumAll - nums[i] - sumPrefix) {
      return i;
    }
    sumPrefix += nums[i];
    i++;
  }
  return -1;
};
