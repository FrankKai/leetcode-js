/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
  /**
   * 解法1：of
   */
  const obj = {};
  for (const char of astr) {
    if (!obj[char]) {
      obj[char] = true;
      continue;
    }
    return false;
  }
  return true;
  /**
   * 解法2：Set
   */
  return new Set(astr.split("")).size === astr.length;
};
