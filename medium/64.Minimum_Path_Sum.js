/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    const f = [...new Array(m)].map(() => new Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                f[0][0] = grid[0][0];
            } else {
                const top = i - 1 >=0  ? f[i - 1][j] + grid[i][j] : Infinity;
                const left = j - 1>= 0 ? f[i][j - 1] + grid[i][j] : Infinity;
                f[i][j] = Math.min(top, left);
            }

        }
    }
    return f[m - 1][n - 1]
};