/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
  let ori = nums.find((item) => item === original);
  if (ori) {
    ori = ori * 2;
    return findFinalValue(nums, ori);
  }
  return original;
};
