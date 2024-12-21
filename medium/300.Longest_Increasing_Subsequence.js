/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    // 动态规划
    if (nums.length === 0) return 0;
    const dp = new Array(nums.length).fill(0);
    dp[0] = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        if (dp[i] > max) max = dp[i]
    }
    return max;
};