/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
  const sumA = A.reduce((acc, cur) => acc + cur);
  const sumB = B.reduce((acc, cur) => acc + cur);
  const range = (sumA - sumB) / 2;
  for (const numA of A) {
    const switchB = B.find((numB) => numA - numB === range);
    if (switchB) {
      return [numA, switchB];
    }
  }
};
