/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  /**
   * 解法1：while + every
   * 性能：68ms 37.4MB
   * 思路：while构建循环，every验证自除数
   */
  let result = [];
  let index = left;
  while (index >= left && index <= right) {
    let arr = index.toString().split("");
    let validate = arr.every((num) => index % parseInt(num) === 0);
    if (validate) {
      result.push(index);
    }
    index++;
  }
  return result;
};
