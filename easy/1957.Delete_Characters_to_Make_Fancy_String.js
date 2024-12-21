/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  // 切割
  // 对每一项进行slice(0, 2)
  let res = "";
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (!str || str.includes(s[i])) {
      str += s[i];
    } else {
      res += str.slice(0, 2);
      str = s[i];
    }
  }
  res += str.slice(0, 2);
  return res;
};
