/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  /**
   * 解法：
   * 条件1数组长度 easy
   * 条件2数组条件
   *  山峰数值 Math.max find
   *  asc数组 true
   *     arr.length !==0
   *     set.length === arr.length
   *     every item<max
   *     arr.toString() === [...arr].sort(a-b).toString()
   *  desc数组 true
   *     arr.length !==0 // [0,1,2,3,4,5,6,7,8,9]
   *     set.length === arr.length
   *     every item<max
   *     arr.toString() === [...arr].sort(b-a).toString()
   */
  var mountainLength = A.length >= 3;
  var mountainTop = Math.max(...A);
  var mountainTopIdx = A.findIndex((num) => num === mountainTop);
  var ascArr = A.slice(0, mountainTopIdx);
  var descArr = A.slice(mountainTopIdx + 1);
  // 对比长度函数，避免 [0,2,3,3,5,2,1,0]
  function compareLength(arr) {
    var uniqueArr = Array.from(new Set(arr));
    return arr.length !== 0 && arr.length === uniqueArr.length;
  }
  // 每一项都小于山峰数字，避免[0,2,5,5,1,0]
  function compareLess(arr, max) {
    return arr.every((num) => num < max);
  }
  // 判断是否是顺序排列数组 避免 [0,3,2,1,5,1,2,0]
  function compareEqual(arr, sort) {
    var callback = null;
    if (sort === "asc") {
      callback = (a, b) => a - b;
    } else if (sort === "desc") {
      callback = (a, b) => b - a;
    }
    var sortArr = [...arr].sort(callback);
    return arr.toString() === sortArr.toString();
  }
  var ascCondition =
    compareLength(ascArr) &&
    compareLess(ascArr, mountainTop) &&
    compareEqual(ascArr, "asc");
  var descCondition =
    compareLength(descArr) &&
    compareLess(descArr, mountainTop) &&
    compareEqual(descArr, "desc");
  return mountainLength && ascCondition && descCondition;
};
