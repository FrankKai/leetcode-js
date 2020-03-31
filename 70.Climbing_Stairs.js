/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  /* 解法1：动态规划 dynamic programming 
     由于只能以1阶和2阶的方式爬楼梯，因此需要n阶到达楼顶的话，可以拆分为到n-1阶与n-2阶的和。
     1.到达第n-1阶的方法。再爬1阶就到了
     2.到达第n-2阶的方法。再爬2阶就到了
     相当于将1个大问题拆分成了2个子问题，相当于最后只剩2条路径，将每条路径的数字加起来就是总共可以走的路。
     得到公式：dp[n] = dp[n-1]+dp[n-2];
     dp[n-1] = dp[(n-1)-1] + dp[(n-1)-2]同理。到达n-1阶的方法。等于再爬1阶到第n-1阶与再爬2阶到第n-1阶的和。
     */
  // n = 4 [,1,2,3,5]
  var dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (var i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
  /**
   * 解法2：观察法 后一项是前面两项的和
   * f(n) = f(n-1)+f(n-2) n>=2
   * 首先构造前2项，直到n=2，因此循环条件为n+2，到达第3项进入函数
   * 最后因为i的前2项是无用的所以-2，而且是从0开始，所以+1
   */
  // n = 4 [0,1,1,2,3,5]
  var arr = [];
  for (var i = 0; i < n + 2; i++) {
    if (i >= 2) {
      arr[i] = arr[i - 1] + arr[i - 2];
    } else if (i === 0 || i === 1) {
      arr[i] = i;
    }
  }
  var idx = i - 2 + 1;
  return arr[idx];
};
