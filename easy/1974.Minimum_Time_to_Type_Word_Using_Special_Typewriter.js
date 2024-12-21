/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
  // 找出最短路径即可
  const getMinDistance = (char, target) => {
    const range = char.charCodeAt() - target.charCodeAt();
    const drange = range > 0 ? range - 26 : range + 26;
    return Math.min(Math.abs(range), Math.abs(drange));
  };
  let result = 0;
  let i = 0;
  let j = i + 1;
  const vword = `a${word}`;
  while (i < vword.length - 1) {
    // 转动指针
    result += getMinDistance(vword[i], vword[j]);
    // 打印
    result++;
    i++;
    j = i + 1;
  }
  return result;
};
