/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  /**
   * 解法1：构造字符串
   * egg=>122 add =>122
   * foo=>122 bar=>123
   */
  const markS = generatePositionMark(s);
  const markT = generatePositionMark(t);
  const result = markS === markT;
  return result;

  function generatePositionMark(str) {
    const map = {};
    let i = 1;
    const markArr = [];
    for (const char of str) {
      if (!map[char]) {
        map[char] = i;
        markArr.push(i);
        i++;
      }
      markArr.push(map[char]);
    }
    const joinStr = markArr.join("");
    return joinStr;
  }
  /**
   * 解法2：HashMap
   */
  const mapS = new Map(),
    mapT = new Map();
  let i = 0;
  let result = true;
  while (i < s.length) {
    if (!mapS.has(s[i])) mapS.set(s[i], t[i]);
    if (!mapT.has(t[i])) mapT.set(t[i], s[i]);
    if (mapS.get(s[i]) !== t[i] || mapT.get(t[i]) !== s[i]) {
      result = false;
      break;
    }
    i++;
  }
  return result;
};
