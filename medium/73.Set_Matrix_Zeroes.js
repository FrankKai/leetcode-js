/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    // 找出矩阵里数字为0的坐标
    let pos = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] == 0) {
          pos.push([i, j]);
        }
      }
    }
    // 再遍历数字为0的点，找出横纵坐标x，y，当横坐标命中m时或者当纵坐标命中n时，原地置为0
    for (const [x, y] of pos) {
      for (let m = 0; m < matrix.length; m++) {
        for (let n = 0; n < matrix[m].length; n++) {
          if (m == x || n == y) {
            matrix[m][n] = 0;
          }
        }
      }
    }
  
    return matrix;
  };