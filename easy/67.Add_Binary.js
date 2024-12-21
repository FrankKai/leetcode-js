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
  /**
   * 解法2：栈
   * 时间复杂度：O(n)
   * 性能：56ms, 35.5MB
   */
  let aArr = a.split("");
  let bArr = b.split("");
  let stack = [];
  let count = 0;
  while (aArr.length !== 0 || bArr.length !== 0) {
    let aPop = aArr.pop() || 0;
    let bPop = bArr.pop() || 0;
    let stackBottom = 0;
    if (stack.length > count) {
      stackBottom = stack.shift() || 0;
    }
    let sum = parseInt(aPop) + parseInt(bPop) + parseInt(stackBottom);
    if (sum <= 1) {
      stack.unshift(sum);
    } else {
      stack.unshift(sum - 2);
      stack.unshift(1);
    }
    count++;
  }
  return stack.join("");
};
