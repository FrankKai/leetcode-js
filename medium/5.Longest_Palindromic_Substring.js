/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    // 中心扩散法
    if (s.length < 2) return s;
    let res = "";
    for (let i = 0; i < s.length; i++) {
      check(i, i); // 中心是奇数，aba
      check(i, i + 1); // 中心是偶数，abba
    }
    function check(m, n) {
      while (m >= 0 && n <= s.length - 1 && s[m] === s[n]) {
        m--;
        n++;
      }
      // 循环停止时，s[m] ！== s[n]，因此取m+1到n-1 [m+1, n-1] =>  n-1-(m+1)+1 => n-m -1
      if (n - m - 1 > res.length) {
        res = s.slice(m + 1, n);
      }
    }
    return res;
  };