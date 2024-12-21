/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    // 什么时候转向：超出边界或者访问过
    // 超出边界：通过行列指针判断
    // 访问过：通过辅助矩阵判断
    const rows = matrix.length;
    const columns = matrix[0].length;
    const visited = Array.from({ length: rows }, () => new Array(columns).fill(false));
    // 依次为：右下左上
    let directionIndex = 0;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    let row = 0;
    let column = 0;
    const result = [];
    for (let i = 0; i < rows * columns; i++) {
        result.push(matrix[row][column]);
        visited[row][column] = true;
        const nextRow = row + directions[directionIndex][0];
        const nextColumn = column + directions[directionIndex][1];
        // 此处注意是判断nextRow和nextColumn。下一个元素越界或者访问过时，调整方向
        if (!(0 <= nextRow && nextRow < rows && 0 <= nextColumn && nextColumn < columns && !visited[nextRow][nextColumn])) {
            directionIndex = (directionIndex + 1) % 4
        }
        row += directions[directionIndex][0]
        column += directions[directionIndex][1]
    }
    return result;
};