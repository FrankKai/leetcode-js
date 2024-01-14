/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
  const size = m * n
  if (original.length !== size) {
    return []
  }
  const result = []
  let index = 0;

  for (let i = 0; i < m; i++) {
    const arr = []
    for (let j = 0; j < n; j++) {
      arr.push(original[index]);
      index++;
    }
    result.push(arr);
  }
  return result;
}
