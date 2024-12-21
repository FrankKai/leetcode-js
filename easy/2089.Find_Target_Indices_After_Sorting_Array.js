/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums.sort((x,y)=> x - y)
    return nums.reduce((acc, cur, i)=>{
        if(cur === target){
            acc.push(i)
        }
        return acc
    }, [])
};