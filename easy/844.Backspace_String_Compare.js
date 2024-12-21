/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  function filterStr(str) {
    const strArr = str.split("");
    let i = 0;
    while (i < strArr.length) {
      if (strArr[i] === "#") {
        strArr.splice(i, 1);
        if (i - 1 >= 0) {
          strArr.splice(i - 1, 1);
        }
        i--;
      } else {
        i++;
      }
    }
    return strArr;
  }
  const sStr = filterStr(S).join("");
  const tStr = filterStr(T).join("");
  return sStr === tStr;
};
