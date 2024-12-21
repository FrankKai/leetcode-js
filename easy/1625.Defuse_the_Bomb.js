/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  if (k === 0) return code.fill(0);
  const n = code.length;
  const result = new Array(n).fill(0);
  let i = 0;
  while (i < code.length) {
    if (k > 0) {
      let j = 1;
      while (j <= k) {
        const index = (i + j) % n;
        result[i] += code[index];
        j++;
      }
    } else if (k < 0) {
      let j = -1;
      while (j >= k) {
        const index = (i + j + n) % n;
        result[i] += code[index];
        j--;
      }
    }
    i++;
  }
  return result;
};
