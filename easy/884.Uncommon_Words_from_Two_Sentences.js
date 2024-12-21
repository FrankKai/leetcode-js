/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
  /**
   * 思路：
   * 合并去重
   */
  const concat = `${A} ${B}`.split(" ");
  const obj = {};
  for (const str of concat) {
    if (!obj[str]) {
      obj[str] = 1;
    } else {
      obj[str]++;
    }
  }
  const result = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value === 1) result.push(key);
  }
  return result;
};
