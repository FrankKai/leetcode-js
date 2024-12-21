/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    // 1.求子集，二维数组存储 中等
    // 2.^=异或运算 0 0 => 0; 1 1 => 0; 1 0 => 1; 0 1 =>1
    const subsets = [[]];
    for(const num of nums){
        subsets.forEach((item)=>{
            subsets.push(item.concat(num));
        })
    }
    const result = subsets.reduce((sum, subset)=>{
        const curSum = subset.reduce((acc, cur)=>{
            return acc ^= cur;
        }, 0)
        return sum + curSum;
    }, 0)
    return result;
};