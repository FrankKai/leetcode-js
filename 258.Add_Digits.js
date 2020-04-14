/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  /**
   * 解法1：递归 reduce
   * 性能：92ms 36.4MB
   */
  let nums = `${num}`.split("").map((item) => BigInt(item));
  let reduce = nums.reduce((acc, cur) => acc + cur);
  if (`${reduce}`.length === 1) {
    return reduce;
  } else {
    return addDigits(reduce);
  }
};
