/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  const stack = [];
  for (const log of logs) {
    if (log === "../") {
      stack.pop();
      continue;
    }
    if (log === "./") {
      continue;
    }
    stack.push(log);
  }
  return stack.length;
};
