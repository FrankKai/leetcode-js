/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  /**
   * 解法1：暴力删除法
   * 性能：148ms 35.2MB
   */
  let sArr = s.split("");
  let tArr = t.split("");
  for (let i = 0; i < sArr.length; i++) {
    for (let j = 0; j < tArr.length; j++) {
      if (tArr[j] === sArr[i]) {
        tArr[j] = null;
        break;
      }
    }
  }
  return tArr.find((item) => item);
};
