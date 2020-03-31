/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  /* 动态规划 dynamic programming 
     由于只能以1阶和2阶的方式爬楼梯，因此需要n阶到达楼顶的话，可以拆分为到n-1阶与n-2阶的和。
     1.到达第n-1阶的方法。再爬1阶就到了
     2.到达第n-2阶的方法。再爬2阶就到了
     相当于将1个大问题拆分成了2个子问题，相当于最后只剩2条路径，将每条路径的数字加起来就是总共可以走的路。
     得到公式：dp[n] = dp[n-1]+dp[n-2];
     dp[n-1] = dp[(n-1)-1] + dp[(n-1)-2]同理。到达n-1阶的方法。等于再爬1阶到第n-1阶与再爬2阶到第n-1阶的和。
     */
  var dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (var i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
