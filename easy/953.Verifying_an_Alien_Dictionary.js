/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    // 字典序
    // 1.序号小的在前
    // 2.遍历完所有字符后，有相同前缀的，长度短的在前
    // 3.两两比较单词
    const orderMap = new Map();
    for (let i = 0; i < order.length; i++) {
      orderMap.set(order[i], i);
    }
    const compare = (word1, word2) => {
      const len1 = word1.length,
        len2 = word2.length;
      const len = Math.min(len1, len2);
      for (let i = 0; i < len; i++) {
        const index1 = orderMap.get(word1[i]);
        const index2 = orderMap.get(word2[i]);
        if (index1 < index2) {
          return true;
        } else if (index1 > index2) {
          return false;
        }
      }
      return len1 <= len2;
    };
    for (let i = 1; i < words.length; i++) {
      if (!compare(words[i - 1], words[i])) {
        return false;
      }
    }
    return true;
  };