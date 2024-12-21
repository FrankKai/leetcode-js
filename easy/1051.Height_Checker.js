/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  /**
   * diff
   */
  const target = [...heights].sort((x, y) => x - y);
  let count = 0;
  let i = 0;
  while (i < heights.length) {
    if (heights[i] !== target[i]) {
      count++;
    }
    i++;
  }
  return count;
};
