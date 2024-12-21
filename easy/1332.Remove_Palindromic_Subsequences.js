/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
    if (isPalindrome(s)) {
      return 1;
    }
    return 2;
    function isPalindrome(str) {
      let rStr = "";
      let i = 0;
      while (i < str.length) {
        rStr = str[i] + rStr;
        i++;
      }
      return str === rStr;
    }
  };