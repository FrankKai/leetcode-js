/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  /**
   * 解法1
   */
  g.sort((x, y) => x - y);
  s.sort((x, y) => x - y);
  let len = s.length;
  let i = 0;
  while (i < g.length && s.length > 0) {
    const index = s.findIndex((num) => num >= g[i]);
    if (index !== -1) {
      s.splice(index, 1);
      i++;
    } else {
      break;
    }
  }
  return len - s.length;
  /**
   * 解法2
   */
  g.sort((x, y) => x - y);
  s.sort((x, y) => x - y);
  let total = 0;
  let i = 0;
  while (i < s.length) {
    if (s[i] >= g[total]) {
      total++;
    }
    if (total === g.length) {
      return total;
    }
    i++;
  }
  return total;
};
