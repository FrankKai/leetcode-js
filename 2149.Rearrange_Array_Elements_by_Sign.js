/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    // 1.负数数组，正数数组
    // 2.交替拼接
    const positive = nums.filter((num) => num > 0)
    const negative = nums.filter((num) => num < 0)
    let i = 0;
    const result = [];
    while (i < nums.length / 2) {
        // 也可以用result.concat([positive[i], negative[i]])
        Array.prototype.push.call(result, positive[i], negative[i]);
        i++;
    }
    return result;
};