/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const arr = [];
  let i = 0;
  while (i < mat.length) {
    const obj = {
      index: i,
      soldiers: 0,
      civilians: 0,
    };
    let j = 0;
    while (j < mat[i].length) {
      if (mat[i][j] === 1) {
        obj.soldiers++;
      } else {
        obj.civilians++;
      }
      j++;
    }
    arr.push(obj);
    i++;
  }
  arr.sort(
    (x, y) =>
      x.soldiers - y.soldiers ||
      (x.soldiers === y.soldiers && x.civilians - y.civilians)
  );
  const result = arr.slice(0, k).map((row) => row.index);
  return result;
};
