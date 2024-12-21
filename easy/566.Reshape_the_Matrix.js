/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    const nums = mat.flat();
    if (nums.length !== r * c) return mat;
    const result = [];
    let curRow = [];
    for (let i = 0; i < nums.length && i < r * c; i++) {
      curRow.push(nums[i]);
      if (curRow.length === c) {
        result.push(curRow);
        curRow = [];
      }
    }
    return result;
  };