/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
    // [[1,0,0],[0,1,0],[0,0,1]]
    // 1 0 0
    // 0 1 0
    // 0 0 1
    // 统计每一行和每一列中1的个数
    const rCount = new Array(mat.length).fill(0);
    const cCount = new Array(mat[0].length).fill(0);
    for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat[0].length; j++) {
        if (mat[i][j] === 1) {
          rCount[i]++;
          cCount[j]++;
        }
      }
    }
  
    // 遇到1时，查看1所在的行列1的个数
    let count = 0;
    for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat[0].length; j++) {
        if (mat[i][j] === 1 && rCount[i] === 1 && cCount[j] === 1) {
          count++;
        }
      }
    }
    return count;
  };