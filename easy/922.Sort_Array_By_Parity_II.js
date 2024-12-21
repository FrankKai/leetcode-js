/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let i = 0;
  let j = 1;
  const result = new Array(A.length);
  for (const num of A) {
    if (num % 2 === 0) {
      result[i] = num;
      i += 2;
    } else if (num % 2 === 1) {
      result[j] = num;
      j += 2;
    }
  }
  return result;
};
