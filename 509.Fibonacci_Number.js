/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  /**
   * 解法1: 递归
   * 性能:  88ms 34.2MB
   * 时间复杂度：O(2^N)
   */
  if (N <= 1) return N;
  return fib(N - 1) + fib(N - 2);
};
