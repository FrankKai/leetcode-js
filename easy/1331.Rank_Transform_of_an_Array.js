/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
  if (arr.length > Math.pow(10, 5)) return;
  /**
   * 生成唯一排序Map
   */
  var uniqArr = Array.from(new Set(arr));
  var sortArr = uniqArr.sort((a, b) => a - b);
  // 构造出一个二维数组作为Map构造器入参
  var twoDimArr = sortArr.map((num, idx) => [num, idx + 1]);
  var idxMap = new Map(twoDimArr);
  /**
   * Map中查找数字序号
   */
  var serialNums = [];
  for (var i = 0; i < arr.length; i++) {
    serialNums.push(idxMap.get(arr[i]));
  }
  return serialNums;
};
