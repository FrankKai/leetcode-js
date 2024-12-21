/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function (widths, S) {
  const aCharCode = "a".charCodeAt();
  let row = 0;
  let sum = 0;
  let i = 0;
  while (i < S.length) {
    const width = widths[S[i].charCodeAt() - aCharCode];
    sum += width;
    if (sum === 100) {
      row++;
      sum = 0;
    } else if (sum > 100) {
      row++;
      sum = width;
    }
    i++;
  }
  return [row + 1, sum];
};
