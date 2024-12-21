/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let i = 0;
  const ps = [];
  let counter = {
    left: 0,
    right: 0,
    stack: [],
  };
  while (i < S.length) {
    if (S[i] === "(") {
      counter.stack.push("(");
      counter.left++;
    } else {
      counter.stack.push(")");
      counter.right++;
    }
    if (counter.left === counter.right) {
      counter.stack.shift();
      counter.stack.pop();
      ps.push(counter.stack.join(""));
      counter = {
        left: 0,
        right: 0,
        stack: [],
      };
    }
    i++;
  }
  return ps.join("");
};
