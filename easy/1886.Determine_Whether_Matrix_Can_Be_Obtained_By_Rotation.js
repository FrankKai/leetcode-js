/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
  for (let i = 0; i < 4; i++) {
    // console.log(111, mat, target);
    if (equal(mat, target)) {
      return true;
    }
    mat = rotate(mat);
  }
  return false;

  function equal(mat1, mat2) {
    return mat1.flat().join("") == mat2.flat().join("");
  }

  function rotate(mat) {
    const n = mat.length;
    const result = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        result[j][n - 1 - i] = mat[i][j];
      }
    }
    return result;
  }
};
