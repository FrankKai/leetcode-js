/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  /**普通解法 */
  let i = 0;
  let x = 1;
  let y = 0
  while (i < s.length) {
      if (s[i] === 'A') {
          x = 2 * x + y
      } else if (s[i] === 'B') {
          y = 2 * y + x;
      }
      i++;
  }
  return x + y;
  /**数学解法 */
  return Math.pow(2, s.length);
};
