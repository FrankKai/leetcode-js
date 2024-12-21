/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
    const map = new Map();
    for (const task of tasks) map.set(task, map.has(task) ? map.get(task) + 1 : 1)
    let res = 0;
    for (const value of map.values()) {
        if (value === 1) return -1;
        if (value % 3 === 0) {
            res += value / 3
        } else {
            res += Math.ceil(value / 3);
        };
    }
    return res;
};