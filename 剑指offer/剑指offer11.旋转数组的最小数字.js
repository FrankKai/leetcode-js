/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  // 解法一
  let min = -Infinity;
  for (const num of numbers) {
    if (min === -Infinity || num < min) {
      min = num;
    }
  }
  return min;
  // 解法二
  return Math.min(...numbers);
};
