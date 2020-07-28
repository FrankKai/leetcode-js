/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
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
};
