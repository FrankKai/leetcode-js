/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    const n = s1.length, m = s2.length, t = s3.length;
    if (n + m !== t) {
        return false;
    }
    const f = [];
    for (let i = 0; i <= n; i++) {
        f.push([]);
    }
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            f[i][j] = false;
        }
    }
    // f(i, j)表示s1的前i项与s2的前j项能否交错组成s3的前i+j项元素，此时s1的第i项与s3的i+j项相等或者s2的第j项与s3的i+j项相等。
    // 假设s1的第i项与s3的i+j项相等，是否能交错拼接取决于s1的前i-1项与s2的前j项是否能拼接，即f(i-1,j)，以及s1的第i-1项与s3的i-1+j项相等
    // 假设s2的第j项与s3的i+j项相等，是否能交错拼接取决于s2的前j-1项与s1的前i项是否能拼接，即f(i,j-1)，以及s2的第j-1项与s3的i+j-1项相等
    // f(i, j) = f(i, j) and (s1(i)=s3(i+j) or s2(j)=s3(i+j))
    // =>
    // f(i, j) = [f(i-1, j) and s1(i-1) = s3(i-1+j)] or [f(i, j-1) and s2(j-1)=s3(i+j-1)]
    f[0][0] = true;
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            if (i > 0) {
                f[i][j] = f[i][j] || f[i - 1][j] && s1.charCodeAt(i - 1) === s3.charCodeAt(i - 1 + j);
            }
            if (j > 0) {
                f[i][j] = f[i][j] || f[i][j - 1] && s2.charCodeAt(j - 1) === s3.charCodeAt(i + j - 1)
            }
        }
    }
    return f[n][m];
};