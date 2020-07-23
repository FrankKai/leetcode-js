/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const uniqNums = Array.from(new Set(nums));
  uniqNums.sort((x, y) => y - x);
  const result = uniqNums.length >= 3 ? uniqNums[2] : uniqNums[0];
  return result;
};
