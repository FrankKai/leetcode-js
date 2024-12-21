/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  /**
   * 解法1：splice(start, [[,delete count][,item1,[,item2],[,...]]])
   * 时间复杂度：O(n)
   * 思路：
   * 数组长度：
   *      数组长度static化：length = arr.length。
   *      在for循环中`for (let i = 0; i < arr.length; i++)`，会导致arr.length实时更新。
   * 插入0：
   *      spice(start, 0, item) 在start之后，插入item
   * 跳过下一项：
   *      i++
   * 统计需要移除的次数并移除：
   *      次数统计：count
   *      删除冗余：splice(start, count) 从start开始（包含start），总计删除count项
   */
  let length = arr.length;
  let count = 0;
  for (let i = 0; i < length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      count++;
      i++;
    }
  }
  arr.splice(length, count);
  return null;
};
