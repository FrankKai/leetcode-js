/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function (s) {
  let stack = [];
  let i = 0;
  let result = "";
  while (i < s.length) {
    if (
      stack.length === 0 ||
      s[i].charCodeAt() - stack[stack.length - 1].charCodeAt() === 1
    ) {
      stack.push(s[i]);
    } else {
      if (stack.length > result.length) {
        result = stack.join("");
      }
      stack = [];
      stack.push(s[i]);
    }
    i++;
  }
  if (stack.length > result.length) {
    result = stack.join("");
  }
  return result.length;
};