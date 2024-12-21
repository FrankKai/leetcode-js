/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  /**
   * 解法1：substring
   */
  const end = n % s.length;
  const result = s.substring(end) + s.substring(0, end);
  return result;
  /**
   * 解法2：纯拼接
   */
  let optimizeN = n % s.length;
  let front = "";
  let back = "";
  for (let i = 0; i < s.length; i++) {
    if (i < optimizeN) {
      back += s[i];
    } else {
      front += s[i];
    }
  }
  return front + back;
};
