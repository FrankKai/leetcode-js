/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
  let cur = null;
  let count = 0;
  let str = "";
  for (const char of S) {
    if (!cur) {
      cur = char;
    }
    if (cur === char) {
      count++;
    } else {
      str += `${cur}${count}`;
      cur = char;
      count = 1;
    }
  }
  str += `${cur}${count}`;
  const result = str.length >= S.length ? S : str;
  return result;
};
