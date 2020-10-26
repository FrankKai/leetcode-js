/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  /**
   * 解法1：reverse
   */
  return s.reverse();
  /**
   * 解法2：对撞指针
   */
  var headIdx = 0;
  var tailIdx = s.length - 1;
  while (headIdx < tailIdx) {
    swap(s, headIdx, tailIdx);
    headIdx++;
    tailIdx--;
  }
  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return s;
  /**
   * 解法3：解构
   */
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
  return s;
};
