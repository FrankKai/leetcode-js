/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
    // 取余：1.x%10
    // 1.for of + i
    // 2.findIndex
    return nums.findIndex((num, i)=> i % 10 === num)
    // let i = 0;
    // for(const num of nums){
    //     if(i % 10 === num){
    //         break;
    //     }
    //     i++;
    // }
    // if(i === nums.length){
    //     return -1;
    // }
    // return i;
};