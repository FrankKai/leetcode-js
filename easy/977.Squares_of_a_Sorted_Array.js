/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  /**
   * 解法1：map sort
   * 性能：280 ms 44.2 MB
   */
  // var powArr = A.map((item) => Math.pow(item, 2))
  // return powArr.sort((a, b) => a - b);
  /**
   * 解法2：平方自身 sort
   * 性能：152 ms 43.4 MB
   */
  for (var i = 0; i < A.length; i++) {
    A[i] = A[i] * A[i];
  }
  return A.sort((a, b) => a - b);
};
