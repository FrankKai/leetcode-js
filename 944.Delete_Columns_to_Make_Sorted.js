/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
    const map = new Map();
    const set = new Set();
    for (const str of strs) {
        let i = 0;
        while (i < str.length) {
            if (!set.has(i) && str[i] < map.get(i)) {
                set.add(i);
            } else {
                map.set(i, str[i])
            }
            i++
        }
    }
    return set.size;
};