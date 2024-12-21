/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    /**
    * 从大到小，做减法，拼接字符串
     */
    const charMap = new Map([
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']]
    )
    const clacStr = (cnum) => {
        for (const [inum, str] of charMap) {
            if (cnum >= inum) {
                cnum -= inum
                return { str, num: cnum }
            }
        }
    }
    let res = '';
    while (num > 0) {
        const cur = clacStr(num);
        res += cur.str
        num = cur.num
    }
    return res;
};