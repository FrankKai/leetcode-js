/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 解法4
  if (x < 0) return false;
  const y = Math.abs(x).toString();
  let i = 0;
  let j = y.length - 1;
  while (i < j) {
    if (y[i] !== y[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true
  
  /**
   * 解法1
   * 性能：344ms 46.1MB
   */
  var strX = x + "";
  var strArr = [];
  var strLength = strX.length;
  var isPalindrome = true;
  for (var i = 0; i < strLength; i++) {
    strArr.push(strX.charAt(i));
  }
  var strArrReverse = strArr.map((e) => e).reverse();
  strArr.forEach((e, i) => {
    if (e !== strArrReverse[i]) {
      isPalindrome = false;
    }
  });
  return isPalindrome;
  /**
   * 解法2：Array.prototype.reverse
   * 性能：240ms 45.8MB
   */
  return `${x}` === `${x}`.split("").reverse().join("");
  /**
   * 解法3：对撞指针法
   * 性能：244ms 45.5MB
   */
  var strArr = `${x}`.split("");
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
};
