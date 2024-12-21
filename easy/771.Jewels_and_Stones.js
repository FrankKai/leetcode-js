/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  /**
   * 解法1: 数组
   */
  let count = 0;
  for (const char of S) {
    if (J.indexOf(char) !== -1) count++;
  }
  return count;
  /**
   * 解法2: HashSet
   */
  let count = 0;
  const JSet = new Set(J);
  for (const char of S) {
    if (JSet.has(char)) count++;
  }
  return count;
};
