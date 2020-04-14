/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  /**
   * 解法1：Map
   * 性能：84ms 37.7MB
   *
   */
  let average = nums.length / 2;
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }
  let max = 0;
  let result = 0;
  for (let [key, value] of map) {
    if (value > average) {
      max = Math.max(max, value);
      if (max === value) result = key;
    }
  }
  return result;
};
