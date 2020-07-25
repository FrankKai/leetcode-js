/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  // [
  //     [3, 7, 8],
  //     [9, 11, 13],       => [15]
  //     [15, 16, 17]
  // ]
  // [
  //     [1, 10, 4, 2],
  //     [9, 3, 8, 7],      => [12]
  //     [15, 16, 17, 12]
  // ]
  /**
   * 思路：
   * 行最小 列最大
   */
  for (const row of matrix) {
    const rowMin = Math.min(...row);
    const rowMinIndex = row.indexOf(rowMin);
    const column = matrix.map((item) => item[rowMinIndex]);
    if (Math.max(...column) === rowMin) {
      return [rowMin];
    }
  }
  return [];
};
