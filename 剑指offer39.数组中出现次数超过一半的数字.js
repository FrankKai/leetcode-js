/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const half = nums.length / 2;
  const map = new Map();
  for (const num of nums) {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1);
    if (map.get(num) > half) {
      return num;
    }
  }
};
F;
