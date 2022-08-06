/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    const lens = [];
    let max = 0;
    let last = -Infinity;
    for(const num of nums){
        if(num > last){
            max++;
        }else {
            lens.push(max);
            max = 1;
        }
        last = num;
    }
    lens.push(max);
    const res = Math.max(...lens);
    return res;
};