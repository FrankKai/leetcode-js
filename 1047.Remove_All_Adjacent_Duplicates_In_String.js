/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  /**
   * 解法：栈
   */
  const stack = [];
  for (const char of S) {
    if (char === stack[stack.length - 1]) {
      stack.pop();
      continue;
    }
    stack.push(char);
  }
  const result = stack.join("");
  return result;
};
