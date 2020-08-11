/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const parent = [];
  for (let i = 0; i < rowIndex + 1; i++) {
    const child = new Array(i + 1);
    child[0] = 1;
    child[i] = 1;
    let j = 1;
    while (i >= 2 && j > 0 && j < child.length - 1) {
      child[j] = parent[i - 1][j - 1] + parent[i - 1][j];
      j++;
    }
    parent.push(child);
  }
  return parent[rowIndex];
};
