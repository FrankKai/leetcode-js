/**
 * @param {number} N
 * @return {number}
 */
var fib = function (n) {
  /**
   * 解法1: 递归
   * 性能:  88ms 34.2MB
   * 时间复杂度：O(2^N)
   */
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
  /**
   * 解法2: 递归+缓存
   */
  /**
   * @param {number} n
   * @return {number}
   */
  let cache = new Map();
  function calc(m) {
    if (m <= 1) return m;
    const prev = cache?.get(m - 1) || calc(m - 1);
    const prevv = cache?.get(m - 2) || calc(m - 2);
    cache.set(m, prev + prevv);
    return prev + prevv;
  }
  return calc(n);
  /**
   * 解法3: 缓存变量 动态规划
   */
  if (n <= 1) {
    return n;
  }
  let cache = {
    "n-1": 1,
    "n-2": 1,
  };
  for (let i = 3; i <= n; i++) {
    let res = cache["n-1"] + cache["n-2"];
    cache["n-2"] = cache["n-1"];
    cache["n-1"] = res;
  }
  return cache["n-1"];
  /**
  * 解法4：DP 精简
  */
  const dp = [0, 1]
  for(let i = 2; i<= n;i++){
     dp[i] = dp[i-1]+dp[i-2]
  }
  return dp[n]
};
