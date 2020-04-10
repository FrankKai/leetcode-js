/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  /**
   * 解法1：正则 + 对撞指针
   * 性能：76ms 89.76% 37.5MB 70.83%
   */
  var parlinDrome = s.replace(/[^\w]/g, "").replace(/_/g, "").toLowerCase();
  var strArr = parlinDrome.split("");
  var i = 0;
  var j = strArr.length - 1;
  while (i < j) {
    if (strArr[i] !== strArr[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
  /**
   * 解法2：Array.prototype.reverse
   * 性能：120ms 11.84% 38.3MB 50%
   */
  var parlinDrome = s.replace(/[^\w]/g, "").replace(/_/g, "").toLowerCase();
  var parlinDromeReverse = parlinDrome.split("").reverse().join("");
  return parlinDrome === parlinDromeReverse;
};
