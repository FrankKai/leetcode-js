/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  /**
   * 解法：
   * 思路：
   * 1.两两处理
   * 2.过滤出2-9的字符串
   * 3.单字符串”2“的限制
   */
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const digitsArr = digits
    .split("")
    .filter((digit) => parseInt(digit) >= 2 && parseInt(digit) <= 9);
  if (digitsArr.length === 1) return map[digitsArr[0]].split("");
  // "23" "abc" "def"
  // "234" "abc" "def" "ghi"
  let stack = [];
  while (digitsArr.length > 0) {
    const first = stack.length > 0 ? stack : map[digitsArr.shift()].split("");
    const second = map[digitsArr.shift()].split("");
    stack = calculateTwoArr(first, second);
  }
  return stack;

  function calculateTwoArr(first, second) {
    const calculatedResult = [];
    while (first.length > 0) {
      const bottom = first.shift();
      for (let i = 0; i < second.length; i++) {
        calculatedResult.push(`${bottom}${second[i]}`);
      }
    }
    return calculatedResult;
  }
};
