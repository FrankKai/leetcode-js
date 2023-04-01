/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  const countValue = (str, target) => {
    let count = 0;
    for (const char of str) {
      if (char === target) {
        count++;
      }
    }
    return count;
  };
  let max = 0;
  for (let i = 1; i < s.length; i++) {
    const left = countValue(s.slice(0, i), "0");
    const right = countValue(s.slice(i), "1");
    if (left + right > max) {
      max = left + right;
    }
  }
  return max;
};
