/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  /**
   * 解法1：头遍历
   * 性能：68ms 34.9MB
   */
  arr.sort((a, b) => a - b);
  var len = arr.length;
  var arrUniq = Array.from(new Set(arr));
  var luckNums = [];
  for (var i = 0; i < arrUniq.length; i++) {
    var head = arr.indexOf(arrUniq[i]);
    var tail = arr.lastIndexOf(arrUniq[i]);
    if (tail - head + 1 === arrUniq[i]) {
      luckNums.push(arrUniq[i]);
    }
  }
  if (luckNums.length === 0) {
    return -1;
  }
  var result = luckNums[luckNums.length - 1];
  return result;
  /**
   * 解法2：尾遍历
   * 性能：104ms 35.3MB
   */
  arr.sort((a, b) => a - b);
  var len = arr.length;
  var arrUniq = Array.from(new Set(arr));
  for (var i = arrUniq.length - 1; i >= 0; i--) {
    var head = arr.indexOf(arrUniq[i]);
    var tail = arr.lastIndexOf(arrUniq[i]);
    if (tail - head + 1 === arrUniq[i]) {
      return arrUniq[i];
    }
  }
  return -1;
};
