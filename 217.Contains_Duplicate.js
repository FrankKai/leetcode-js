/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var arrSet = new Set(nums);
  return arrSet.size !== nums.length;
};
