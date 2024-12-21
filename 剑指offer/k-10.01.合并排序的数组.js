/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
  for (let i = 0; i < A.length; i++) {
    if (i >= m) {
      A[i] = B[i - m];
    }
  }
  A.sort((x, y) => x - y);
  return A;
};
