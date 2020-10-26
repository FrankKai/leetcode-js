/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let stack = [];
  let len = 0;
  const num1Arr = num1.split("");
  const num2Arr = num2.split("");
  while (num1Arr.length > 0 || num2Arr.length > 0) {
    const pop1 = parseInt(num1Arr.pop()) || 0;
    const pop2 = parseInt(num2Arr.pop()) || 0;
    const tail = stack.length > len ? parseInt(stack.shift()) : 0;
    if (pop1 + pop2 + tail >= 10) {
      stack.unshift(pop1 + pop2 + tail - 10);
      stack.unshift(1);
    } else {
      stack.unshift(pop1 + pop2 + tail);
    }
    len++;
  }
  const result = stack.join("");
  return result;
};
