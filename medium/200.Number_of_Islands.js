/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    // 核心思想就是将岛屿（值为“1”）的周围的岛屿全部消除掉
    // 并且通过BFS的方式，将附近的岛屿也加入队列，从而将连在一起的岛屿也消除掉
    if (grid.length === 0) {
      return 0;
    }
    const rows = grid.length;
    const cols = grid[0].length;
  
    // 此处需要将岛屿的二维矩阵想象成一个笛卡尔坐标系，也就是x轴正方向向右，y轴正方向向下
    const directions = [
      [0, 1], // 右
      [0, -1], // 左
      [1, 0], // 下
      [-1, 0], // 上
    ];
  
    function bfs(r, c) {
      grid[r][c] = "0";
  
      const queue = [[r, c]];
  
      while (queue.length > 0) {
        const [x, y] = queue.shift();
        for (const [dx, dy] of directions) {
          const newX = x + dx;
          const newY = y + dy;
          if (
            newX >= 0 &&
            newX < rows &&
            newY >= 0 &&
            newY < cols &&
            grid[newX][newY] === "1"
          ) {
            grid[newX][newY] = "0";
            queue.push([newX, newY]);
          }
        }
      }
    }
  
    let count = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === "1") {
          count++;
          bfs(i, j);
        }
      }
    }
  
    return count;
  };