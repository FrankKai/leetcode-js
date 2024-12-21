/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
  let res = [];
  let i = 0;
  let str = "";
  while (i < s.length) {
    if (str.length === k) {
      res.push(str);
      str = s[i];
    } else {
      str += s[i];
    }
    i++;
  }
  if (str.length > 0) {
    str += fill.repeat(k - str.length);
    res.push(str);
  }
  return res;
};
