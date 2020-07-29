/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  const str = n.toString(2);
  let current = "";
  let result = true;
  for (const char of str) {
    if (current === char) {
      result = false;
      break;
    }
    current = char;
  }
  return result;
};
