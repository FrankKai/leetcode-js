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
    // const sortStr = [...str].sort().join("");
    if (!obj[sortStr]) {
      obj[sortStr] = [str];
    } else {
      obj[sortStr].push(str);
    }
  }
  const result = Object.values(obj);
  return result;
  /**
   * 解法2：HashMap
   */
  const map = new Map();
  for (const str of strs) {
    const key = str.split("").sort().join("");
    if (map.has(key)) {
      const getStr = [...map.get(key), str];
      map.set(key, getStr);
    } else {
      map.set(key, [str]);
    }
  }
  const result = [];
  for (const item of map.values()) {
    result.push(item);
  }
  return result;
};
