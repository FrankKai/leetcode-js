/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const uniq = new Set();
  for (const num of nums) {
    if (uniq.has(num)) {
      return num;
    }
    uniq.add(num);
  }
};
