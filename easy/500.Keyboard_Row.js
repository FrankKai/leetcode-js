/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  /**
   * 解法1：Array
   * 性能：92ms 33.9MB
   */
  // 构建字母表
  const lines = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];
  lines.forEach((line, i, arr) => {
    arr[i] = line.reduce((acc, cur) => {
      acc.push(cur);
      acc.push(cur.toUpperCase());
      return acc;
    }, []);
  });
  // 拆分单词
  const wordsMap = words.map((word) => word.split(""));
  const validWords = [];
  wordsMap.forEach((word) => {
    lines.forEach((line) => {
      let isValid = word.every((char) => line.indexOf(char) !== -1);
      if (isValid) validWords.push(word.join(""));
    });
  });
  return validWords;
  /**
   * 解法2: Array Set
   * 性能：60ms 33.9MB
   * 思路：Set优化indexOf
   */
  // 构建字母表
  const lines = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];
  lines.forEach((line, i, arr) => {
    let reduceArr = line.reduce((acc, cur) => {
      acc.push(cur);
      acc.push(cur.toUpperCase());
      return acc;
    }, []);
    arr[i] = new Set(reduceArr);
  });
  // 拆分单词
  const wordsMap = words.map((word) => word.split(""));
  const validWords = [];
  wordsMap.forEach((word) => {
    lines.forEach((line) => {
      let isValid = word.every((char) => line.has(char));
      if (isValid) validWords.push(word.join(""));
    });
  });
  return validWords;
};
