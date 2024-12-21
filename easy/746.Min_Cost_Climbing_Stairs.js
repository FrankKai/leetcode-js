/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  // 动态规划：重点是写表达式；其实是从后向前推导；然后就是开始条件一般为非前几项
  // 第i项的花费为：前一级或前前一级中花费较小的+当前花费
  // dp[i] = Math.min(dp[i-1], dp[i-2])+cost[i]
  // 到达最后一级台阶时，cost[i]为0
  const dp = [];
  dp[0] = cost[0];
  dp[1] = cost[1];
  const n = cost.length;
  for (let i = 2; i < n; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return Math.min(dp[n - 1], dp[n - 2]) + 0;
};
