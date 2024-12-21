/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    function counter(str){
        let count = 0;
        for(const char of str){
            if(char === '1') {
                count++;
            }
        }
        return count;
    }
    const res = []
    let i = 0;
    while (i <= num) {
        res.push(counter(i.toString(2)))
        i++;
    }
    return res;
};