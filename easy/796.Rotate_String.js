/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
  if (A === B) return true;
  let str = A;
  let i = 0;
  while (i < A.length) {
    str = str.slice(1) + str[0];
    if (str === B) {
      return true;
    }
    i++;
  }
  return false;
};
