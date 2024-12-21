/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  const nums = [];
  for (const [l, w] of rectangles) {
    const value = Math.min(l, w);
    nums.push(value);
  }
  let max = 0;
  let count = 0;
  for (const item of nums) {
    if (item > max) {
      max = item;
      count = 1;
    } else if (item == max) {
      count++;
    }
  }
  return count;
};
