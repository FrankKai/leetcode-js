/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    /**
     * 解法一：普通做法
     */
    const position = {
        x: 0,
        y: 0,
    }
    for (const move of moves) {
        if (move === 'R') {
            position.x++
        } else if (move === 'L') {
            position.x--
        } else if (move === 'U') {
            position.y++
        } else if (move === 'D') {
            position.y--
        }
    }
    return position.x === 0 && position.y === 0
    /**
     * 解法二：统计RLUD次数，count(R)===count(L)&&count(U)===count(D)
     */
    const obj = {
        "R": 0,
        "L": 0,
        "U": 0,
        "D": 0
    };
    for (const move of moves) {
        obj[move]++
    }
    return obj["R"] === obj["L"] && obj["U"] === obj["D"]
};