/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  let max1 = 0;
  let max0 = 0;
  let str = s[0];
  let i = 1;
  while (i < s.length) {
    if (str.includes(s[i])) {
      str += s[i];
    } else {
      if (s[i] === "0") {
        if (str.length > max1) {
          max1 = str.length;
        }
      }
      if (s[i] === "1") {
        if (str.length > max0) {
          max0 = str.length;
        }
      }
      str = s[i];
    }
    i++;
  }
  if (str) {
    if (str[str.length - 1] === "1") {
      if (str.length > max1) {
        max1 = str.length;
      }
    }
    if (str[str.length - 1] === "0") {
      if (str.length > max0) {
        max0 = str.length;
      }
    }
  }
  return max1 > max0;
};
