/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  /**
   * 解法1：BigInt()可替换parseInt()转化数字
   * 性能：212 ms 40.3 MB
   */
  var numA = BigInt(A.join(""));
  var numAK = `${numA + BigInt(K)}`.split("");
  return numAK;
};
