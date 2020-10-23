/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
  const arr = [...Array(S.length + 1).keys()];
  let i = 0;
  while (i < S.length) {
    if (S[i] === "D") {
      arr.splice(i, 0, arr.pop());
    }
    i++;
  }
  return arr;
};
