/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  /**
   * 解法1:内置函数 Math.sqrt()
   * 使用Math.floor返回<=当前数的最小整数
   */
  return Math.floor(Math.sqrt(x));
  /**
   * 解法2：二分查找
   * 时间复杂度: O(logn)
   * 性能：84ms 35.4MB
   * 分析：以求8的平方根为例
   * x     8
   * mid   4 1 2 3
   * right 3     2
   * left    1 3
   */
  if (x === 0 || x === 1) return x;
  let left = 0;
  let right = x - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (x > mid * mid) {
      left = mid + 1;
    } else if (x < mid * mid) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return right;
};
