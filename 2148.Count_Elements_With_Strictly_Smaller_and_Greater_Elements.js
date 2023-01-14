/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function (nums) {
  const map = new Map();
  for (const num of nums) {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1);
  }
  const uniq = [...new Set(nums)];
  uniq.sort((x, y) => x - y);
  uniq.shift();
  uniq.pop();
  let count = 0;
  for (const num of uniq) {
    count += map.get(num);
  }
  return count;
};
