/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  const result = grid.reduce((acc, row) => {
    for (const num of row) {
      if (num < 0) acc++;
    }
    return acc;
  }, 0);
  return result;
};
