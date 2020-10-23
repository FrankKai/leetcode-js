/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
  let i = 0;
  const res = [];
  while (i < S.length) {
    if (S[i] === C) {
      res.push(0);
      i++;
      continue;
    }
    let j = i;
    let k = i;
    let distanceJ = Infinity;
    let distanceK = Infinity;
    while (S[j] !== C && j < S.length) {
      j++;
    }
    if (j < S.length) {
      distanceJ = j - i;
    }
    while (S[k] !== C && k >= 0) {
      k--;
    }
    if (k >= 0) {
      distanceK = i - k;
    }
    res.push(Math.min(distanceJ, distanceK));
    i++;
  }
  return res;
};
