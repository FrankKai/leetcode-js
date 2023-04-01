/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  function getValue(char) {
    return char.charCodeAt() - "a".charCodeAt() + 1;
  }
  function getSum(str, type) {
    let num = 0;
    let numStr = "";
    for (let char of str) {
      if (type === "number") {
        num += parseInt(char);
      }
      if (type === "string") {
        numStr += getValue(char);
      }
    }
    return `${num || numStr}`;
  }
  let strInit = getSum(s, "string");
  let res = strInit;
  let i = 0;
  while (i < k) {
    res = getSum(res, "number");
    i++;
  }
  return res;
};
