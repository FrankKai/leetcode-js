/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  /**
   * 解法1：拆字符排序法
   * 排序：
   * - split  str.split("").sort()
   * - spread [...str].sort()
   */
  let obj = {};
  for (let str of strs) {
    const sortStr = str.split("").sort().join("");
    if (!obj[sortStr]) {
      obj[sortStr] = [str];
    } else {
      obj[sortStr].push(str);
    }
  }
  const result = Object.values(obj);
  return result;
};
