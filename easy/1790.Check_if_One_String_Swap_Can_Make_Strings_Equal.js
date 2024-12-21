/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    if (s1 === s2) {
        return true;
    }
    let i = 0;
    const obj = {};
    let count = 0;
    while (i < s1.length) {
        if (s1[i] !== s2[i]) {
            obj[s1[i]] = s2[i]
            count++;
            if (count > 2) {
                return false
            }
        }
        i++
    }
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    if (keys.length === 2) {
        return keys[0] === values[1] && keys[1] === values[0]
    }
    return false;
};