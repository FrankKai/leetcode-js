/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    // 求和，依次对比当前和与剩余和是否相等，相等时返回下标
    const sum = nums.reduce((acc, cur) => acc + cur, 0)
    let index = -1;
    let i = 0;
    let leftSum = 0;
    while(i <nums.length){
        if(leftSum === sum - leftSum - nums[i]){
            index = i;
            break;
        }
        leftSum += nums[i]
        i++;
    }
    return index;
};