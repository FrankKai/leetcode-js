/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
    const results = [];
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  
    // 笛卡尔坐标系，定义4个方向
    const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
  
    const queue = [[rCenter, cCenter]];
    visited[rCenter][cCenter] = true;
    while (queue.length > 0) {
      const [r, c] = queue.shift();
      results.push([r, c]);
  
      for (const [dr, dc] of directions) {
        const newR = r + dr;
        const newC = c + dc;
  
        if (
          newR >= 0 &&
          newR < rows &&
          newC >= 0 &&
          newC < cols &&
          !visited[newR][newC]
        ) {
          visited[newR][newC] = true;
          queue.push([newR, newC]);
        }
      }
    }
    return results;
  };