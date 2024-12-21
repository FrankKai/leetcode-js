/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  /**
   * 构造1~n-1的数字,最后一项放-sum(1~n-1)
   */
  let i = 1;
  let sum = 0;
  const result = [];
  while (i < n) {
    sum += i;
    result.push(i);
    i++;
  }
  result.push(-sum);
  return result;
};
