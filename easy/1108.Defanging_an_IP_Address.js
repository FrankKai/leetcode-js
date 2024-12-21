/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  /**
   * 解法1：栈
   */
  const stack = [];
  const arr = address.split("");
  while (arr.length) {
    const bottom = arr.shift();
    if (bottom === ".") {
      stack.push("[.]");
    } else {
      stack.push(bottom);
    }
  }
  const result = stack.join("");
  return result;
};
