/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const stack = [];
  let i = 0;
  while (i < ops.length) {
    switch (ops[i]) {
      case "+": {
        stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        break;
      }
      case "D": {
        stack.push(stack[stack.length - 1] * 2);
        break;
      }
      case "C": {
        stack.pop();
        break;
      }
      default: {
        stack.push(parseInt(ops[i]));
      }
    }
    i++;
  }
  const result = stack.reduce((acc, cur) => acc + cur);
  return result;
};
