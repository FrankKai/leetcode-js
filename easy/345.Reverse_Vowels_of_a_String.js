/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  /**
   * 解法1：对撞指针
   * 性能：108 ms 31.59% 38.4 MB 66.67%
   */
  var univocalic = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var sArr = s.split("");
  var head = 0;
  var tail = sArr.length - 1;
  while (head < tail) {
    if (univocalic.includes(sArr[head]) && univocalic.includes(sArr[tail])) {
      swap(sArr, head, tail);
      head++;
      tail--;
    } else if (!univocalic.includes(sArr[head])) {
      head++;
    } else if (!univocalic.includes(sArr[tail])) {
      tail--;
    }
  }
  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return sArr.join("");
};
