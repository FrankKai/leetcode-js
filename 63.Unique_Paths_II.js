/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    if(obstacleGrid[0][0] === 1) return 0; 
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const f = [...new Array(m)].map(() => new Array(n).fill(0))
    f[0][0] = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] !== 1) {
                if (i > 0 && j > 0) {
                    f[i][j] = f[i - 1][j] + f[i][j - 1]
                } else if (i > 0) {
                    f[i][j] = f[i - 1][j]
                } else if (j > 0) {
                    f[i][j] = f[i][j - 1]
                }
            }
        }
    }
    return f[m - 1][n - 1]
};