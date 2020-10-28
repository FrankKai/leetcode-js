/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  /**
   * 统计每个岛屿”1“的周围有几个非1( 0或者undefined )
   */
  let perimeters = 0;
  let row = 0;
  while (row < grid.length) {
    let column = 0;
    while (column < grid[row].length) {
      let count = 0;
      if (grid[row][column] === 1) {
        // 上 纵坐标-1
        if (!grid[row][column - 1]) {
          count++;
        }
        // 下 纵坐标+1
        if (!grid[row][column + 1]) {
          count++;
        }
        // 左 横坐标-1
        if (!grid[row - 1] || !grid[row - 1][column]) {
          count++;
        }
        // 右 横坐标+1
        if (!grid[row + 1] || !grid[row + 1][column]) {
          count++;
        }
      }
      perimeters += count;
      column++;
    }
    row++;
  }
  return perimeters;
};
