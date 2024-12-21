/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  /**
   * 主对角线和副对角线元素满足什么条件？
   * 主对角线：行、列坐标相等
   * 副对角线：行、列坐标相加等于正方形矩形长度
   * 计算规则有什么区别？
   * 偶数：直接相加即可
   * 奇数：行、列坐标为 (mat.length - 1)/2, (mat.length - 1)/2的只加一次
   */
  // 第一版
  let i = 0;
  let duplicate = 0;
  let sum = 0;
  while (i < mat.length) {
    let j = 0;
    while (j < mat[i].length) {
      if (i === j || i + j === mat.length - 1) {
        sum += mat[i][j];
      }
      if (i === (mat.length - 1) / 2 && j === (mat.length - 1) / 2) {
        duplicate = mat[i][j];
      }
      j++;
    }
    i++;
  }
  if (mat.length / 2 === 1) {
    sum -= duplicate;
  }
  return sum;
  // 优化版
  let i = 0;
  let sum = 0;
  const tail = mat.length - 1;
  while (i < mat.length) {
    let j = 0;
    while (j < mat[i].length) {
      if (i === j || i + j === tail) {
        sum += mat[i][j];
      }
      j++;
    }
    i++;
  }
  if (mat.length / 2 === 1) {
    sum -= mat[tail / 2][tail / 2];
  }
  return sum;
};
