/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, !map.get(num) ? 1 : map.get(num) + 1);
    if (map.get(num) > nums.length / 2) {
      return num;
    }
  }
  return -1;
};
