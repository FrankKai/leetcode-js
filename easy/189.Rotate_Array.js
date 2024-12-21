/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  var step = k % nums.length;
  if (step === 0) return nums;
  var spliceArr = nums.splice(-step);
  spliceArr.reverse().forEach(item => {
    nums.unshift(item);
  });
  return nums;
};
