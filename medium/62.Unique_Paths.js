/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    // dp 路径问题
    // 状态转移方程 f[i][j] = f[i - 1][j] + f[i]f[j - 1]
    const f = [...new Array(m)].map(() => new Array(n));
    f[0][0] = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i > 0 && j > 0) {
                f[i][j] = f[i - 1][j] + f[i][j - 1]
            } else if (i > 0) {
                f[i][j] = f[i - 1][j]
            } else if (j > 0) {
                f[i][j] = f[i][j - 1]
            }
        }
    }
    return f[m - 1][n - 1]
}