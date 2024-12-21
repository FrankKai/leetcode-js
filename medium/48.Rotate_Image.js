/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    // 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
    // 输出：[[7,4,1],[8,5,2],[9,6,3]]
    // 1 2 3    7 4 1
    // 4 5 6    8 5 2
    // 7 8 9 => 9 6 3
    // (0,0) => (0, 2)
    // (0,1) => (1, 2)
    // (0,2) => (2, 2)
    // (1,0) => (0, 1)
    // (1,1) => (1,1)
    // (1,2) => (2,1)
    // (2,0) => (0, 0)
    // (2,1) => (1, 0)
    // (2,2) => (2, 0)
    // 经观察，得到以下公式，其中n是矩阵长度：arrNew[j][n - 1 -i] = arr[i][j];
  
    const arrNew = Array.from({ length: matrix.length }, () =>
      Array(matrix.length).fill(0)
    );
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        arrNew[j][matrix.length - 1 - i] = matrix[i][j];
      }
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        matrix[i][j] = arrNew[i][j];
      }
    }
    return matrix;
  };