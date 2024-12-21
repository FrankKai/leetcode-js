/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  /**
   * 解法1：递归 + charAt + BigInt
   * 时间复杂度：O(n)
   * 结果：超出时间限制
   */
  let str = factorial(n).toString();
  let count = 0;
  for (let i = str.length - 1; i > 0; i--) {
    if (str.charAt(i) === "0") {
      count++;
    } else {
      break;
    }
  }
  return count;
  function factorial(num) {
    if (num <= 1) return 1;
    return BigInt(num) * BigInt(factorial(num - 1));
  }
  /**
   * 解法2：找出5的倍数 + 递归
   */
  if (n < 5) return 0;
  let k = Math.floor(n / 5);
  return k + trailingZeroes(k);
  /**
   * 解法3：找出5的倍数 + 循环
   */
  let count = 0;
  while (n >= 5) {
    let k = Math.floor(n / 5);
    count += k;
    n = k;
  }
  return count;
};
