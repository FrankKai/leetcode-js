/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    // 1.转字符串反转
    // 2.再反转
    function reverseNum(inum){
        return parseInt(`${inum}`.split("").reverse().join(""));
    }
    return num === reverseNum(reverseNum(num))
};