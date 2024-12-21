/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    const stack = [];
    for (const item of s) {
        if (/[0-9]/.test(item)) {
            stack.pop()
        } else {
            stack.push(item)
        }
    }
    return stack.join('');
};