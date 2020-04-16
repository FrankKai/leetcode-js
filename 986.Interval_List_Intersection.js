/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
  /**
   * 解法1：快慢指针
   * 性能：84ms 41ms
   * 思路：找出[max, min]区间，指针不断右移
   * 反思：不要一上来就for，要学会善用while
   */
  let i = 0;
  let j = 0;
  let result = [];
  while (i < A.length && j < B.length) {
    let left = Math.max(A[i][0], B[j][0]);
    let right = Math.min(A[i][1], B[j][1]);
    if (left <= right) {
      result.push([left, right]);
    }
    if (A[i][1] < B[j][1]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
};
