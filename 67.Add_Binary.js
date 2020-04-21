/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  /**
   * 解法1：BigInt 2进制转为10进制
   */
  let a10 = BigInt(`0b${a}`);
  let b10 = BigInt(`0b${b}`);
  let result = (a10 + b10).toString(2);
  return result;
};
