/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
  /**
   * 解法1：求最大值 Math.max()
   */
  return A.indexOf(Math.max(...A));
  /**
   * 解法2：线性扫描
   */
  let i = 0;
  while (A[i] < A[i + 1]) i++;
  return i;
  /**
   * 解法3：线性扫描求最大值
   */
  let i = 0;
  for (; i < A.length; ) {
    if (A[i] < A[i + 1]) {
      i++;
    } else {
      break;
    }
  }
  return i;
};
