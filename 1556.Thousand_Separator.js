/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  const stack = [];
  const str = `${n}`;
  let i = str.length - 1;
  const splitRange = 3;
  let subStr = "";
  while (i >= 0) {
    subStr = str[i] + subStr;
    if (subStr.length === splitRange) {
      stack.unshift(subStr);
      subStr = "";
    }
    i--;
  }
  if (subStr) stack.unshift(subStr);
  const result = stack.join(".");
  return result;
};
