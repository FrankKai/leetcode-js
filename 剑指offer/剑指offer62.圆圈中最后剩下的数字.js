/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
  const nums = new Array(n).fill(0).map((num, i) => num + i);
  let i = (m - 1) % nums.length;
  while (nums.length > 1) {
    nums.splice(i, 1);
    i = (i + m - 1) % nums.length;
  }
  return nums[0];
};
