/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const actions = [];
  const looptime = Math.min(target[target.length - 1], n);
  for (let i = 0; i < looptime; i++) {
    if (target.includes(i + 1)) {
      actions.push("Push");
    } else {
      actions.push("Push");
      actions.push("Pop");
    }
  }
  return actions;
};
