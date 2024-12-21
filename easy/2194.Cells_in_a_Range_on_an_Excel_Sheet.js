/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
    const [start, end] = s.split(":");
    const [startCol, startRow] = [...start]
    const [endCol, endRow] = [...end]
    const res = [];
    let y = startCol;
    while (y <= endCol) {
        let x = startRow
        while (x <= endRow) {
            res.push(`${y}${x}`);
            x++;
        }
        y = String.fromCharCode(y.charCodeAt() + 1);
    }
    return res;
};