/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
    // s生成多个前缀字符串
    // 遍历words，若在前缀字符串数组中，则+1
    const prefixes = new Set();
    for (let i = 0; i < s.length; i++) {
      prefixes.add(s.slice(0, i+1));
    }
    let count = 0;
    for (const word of words) {
      if (prefixes.has(word)) {
        count++;
      }
    }
    return count;
  };