/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    // 先搜行，再搜列
    let row = 0;
    let isExisted = false;
    let isSearched = false;
    for (let i = 0; i < matrix.length - 1; i++) {
        // 在第i行
        if (target >= matrix[i][0] && target < matrix[i + 1][0]) {
            row = i;
            isSearched = true;
            break;
        }
    }
    // 当垂直方向找不到任意一个满足条件的row时，将row至为最后一行的index，最后查找一次
    if (!isSearched) {
        row = matrix.length - 1;
    }
    for (let i = 0; i < matrix[row].length; i++) {
        if (target === matrix[row][i]) {
            isExisted = true;
        }
    }
    return isExisted;
};