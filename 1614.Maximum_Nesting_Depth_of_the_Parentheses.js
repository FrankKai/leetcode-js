/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let depth = 0;
  let left = 0;
  let i = 0;
  while (i < s.length) {
    if (s[i] === "(") {
      left++;
      if (left > depth) depth = left;
    } else if (s[i] === ")") {
      left--;
    }
    i++;
  }
  return depth;
};
