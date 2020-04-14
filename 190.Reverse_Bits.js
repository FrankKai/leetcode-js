/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  /**
   * 解法1：转数组后对撞交换位置
   * 性能：76ms 35.8MB
   * 思路：
   * 十进制转二进制：toString(2)
   * 32位空位补0：padStart(32,0)
   * 反转算法：对撞指针法
   * 二进制转十进制：parseInt(,2)
   */
  let arr = n.toString(2).padStart(32, 0).split("");
  let head = 0;
  let tail = arr.length - 1;
  while (head < tail) {
    swap(arr, head, tail);
    head++;
    tail--;
  }
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  let result = parseInt(arr.join(""), 2);
  return result;
  /**
   * 解法2：转数组后交换位置
   * 性能：120ms 36MB
   */
  return parseInt(
    n.toString(2).padStart(32, 0).split("").reverse().join(""),
    2
  );
};
