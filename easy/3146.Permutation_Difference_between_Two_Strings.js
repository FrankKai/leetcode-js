/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        sum += Math.abs(i - t.indexOf(s[i]))
    }
    return sum;
};