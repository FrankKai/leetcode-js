/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    /**
     * 之所以使用BigInt是因为以下两个原因
     * 1.Number基本类型的存储范围在-(2^53-1)到(2^53-1)之间。叫做最小最大安全数。
     * 无法通过测试用例。[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3] +1 后为 [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,0,0,0]
     * 2.BitInt可以用于表示任意大的整数。
     * 可以通过所有测试用例。
     */
  // [1,2,3]=>123
  var num = BigInt(digits.join(""));
  // 123->124
  var nextNum = num + 1n;
  // 124->[1,2,4]
  var nextNumArr = `${nextNum}`.split("");
  return nextNumArr;
};
