/**
 * @param {number} x
 * @return {number}
 */
/**
 * 解法1：Array.prototype.reverse
 * 性能：72 ms 36.1 MB
 */
var reverse = function (x) {
  var sign = Math.sign(x);
  var rX = parseInt(x.toString().split("").reverse().join(""));
  var result = sign * rX;
  var min = -Math.pow(2, 31);
  var max = Math.pow(2, 31) - 1;
  if (rX < min || rX > max) return 0;
  return result;
  /**
   * 解法2.指针对撞法
   * 性能：96 ms 35.38% 35.9 MB 77.35%
   */
  var sign = Math.sign(x);
  var arr = x.toString().split("");
  //
  if (sign === -1) {
    arr.shift();
  }
  // 指针对撞开始
  var i = 0;
  var j = arr.length - 1;
  while (i < j) {
    swap(arr, i, j);
    i++;
    j--;
  }
  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  // 指针对撞结束
  var rX = parseInt(arr.join(""));
  var result = sign * rX;
  var min = -Math.pow(2, 31);
  var max = Math.pow(2, 31) - 1;
  if (rX < min || rX > max) return 0;
  return result;
};
