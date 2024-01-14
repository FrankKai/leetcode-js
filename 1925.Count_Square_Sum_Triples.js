/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
  const sumSet = new Set();
  for (let i = 1; i <= n; i++) {
    sumSet.add(i * i);
  }
  const sumArr = [...sumSet];
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      const num = sumArr[i] + sumArr[j];
      if (i !== j && sumSet.has(num)) {
        count++;
      }
    }
  }
  return count;
};
