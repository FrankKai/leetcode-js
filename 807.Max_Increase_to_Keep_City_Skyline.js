/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  /**
   * 先找出天际线
   * 然后再填充天际线，可以增加的最大总和为sum(min(row,column) - grid[row][column])
   */
  // 找出竖直方向天际线
  const rowSkyline = [];
  for (const row of grid) {
    rowSkyline.push(Math.max(...row));
  }
  let i = 0;
  const columns = [];
  while (i < grid.length) {
    let j = 0;
    while (j < grid[i].length) {
      if (!columns[j]) {
        columns[j] = [];
        columns[j].push(grid[i][j]);
      } else {
        columns[j].push(grid[i][j]);
      }
      j++;
    }
    i++;
  }
  // 找出水平方向天际线
  const columnSkyline = [];
  for (const column of columns) {
    columnSkyline.push(Math.max(...column));
  }
  // 在不影响天际线的情况下对建筑物进行增高
  let count = 0;
  let m = 0;
  while (m < grid.length) {
    let n = 0;
    while (n < grid[m].length) {
      count += Math.min(columnSkyline[m], rowSkyline[n]) - grid[m][n];
      n++;
    }
    m++;
  }
  return count;
};
