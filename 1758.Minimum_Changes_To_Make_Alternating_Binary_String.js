/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  // 双指针，两两对比即可，相同时，将位置靠后的值取反，继续
  // 以1开头的次数和以0开头的次数，和正好为字符串长度，因此取最小值即可
  let i = 0;
  let j = 1;
  let arr = [...s];
  let count = 0;
  while (i < j && i <= arr.length - 2) {
    if (arr[i] === arr[j]) {
      arr[j] = arr[j] === "1" ? "0" : "1";
      count++;
    }
    i++;
    j++;
  }
  return Math.min(count, s.length - count);
};
