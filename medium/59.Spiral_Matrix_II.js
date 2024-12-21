/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    const matrix = Array.from({ length: n }, () => new Array(n).fill(0))
    let row = 0;
    let column = 0;
    let directionIndex = 0;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    for (let i = 1; i <= n * n; i++) {
        matrix[row][column] = i;
        const nextRow = row + directions[directionIndex][0]
        const nextColumn = column + directions[directionIndex][1]
        if (!(nextRow >= 0 && nextRow < n && nextColumn >= 0 && nextColumn < n && !matrix[nextRow][nextColumn])) {
            directionIndex = (directionIndex + 1) % 4;
        }
        row += directions[directionIndex][0];
        column += directions[directionIndex][1];
    }
    return matrix;
};