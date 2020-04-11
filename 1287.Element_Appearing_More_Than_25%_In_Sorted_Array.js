/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  /**
   * 解法1: 去重 filter
   * 性能：1180 ms 39.3 MB
   */
  // var len = arr.length;
  // var arrUniq = Array.from(new Set(arr));
  // for (var i = 0; i < arrUniq.length; i++) {
  //     var filterArr = arr.filter((num) => num === arrUniq[i]);
  //     if (filterArr.length / len > 0.25) {
  //         return arrUniq[i];
  //     }
  // }
  /**
   * 解法2：indexOf lastIndexOf
   * 性能：240 ms 37.7 MB
   */
  var len = arr.length;
  var arrUniq = Array.from(new Set(arr));
  for (var i = 0; i < arrUniq.length; i++) {
    var head = arr.indexOf(arrUniq[i]);
    var tail = arr.lastIndexOf(arrUniq[i]);
    if ((tail - head + 1) / len > 0.25) {
      return arrUniq[i];
    }
  }
};
