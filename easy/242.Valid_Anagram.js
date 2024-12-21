/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  /**
   * 解法1：排序法
   * 思路：拆分成数组，排序，拼接字符串
   */
  const sortS = [...s].sort().join("");
  const sortT = [...t].sort().join("");
  return sortS === sortT;
  /**
   * 解法2：统计字符数法 Obj
   * 思路：
   * 1.统计各个字母次数
   * 2.当统计字母属性key不相等时返回false
   */
  const objS = { size: 0 };
  const objT = { size: 0 };
  function count(obj, src) {
    for (let key of src) {
      if (!obj[key]) {
        obj[key] = 1;
      } else {
        obj[key]++;
      }
      obj.size++;
    }
  }
  count(objS, s);
  count(objT, t);
  if (objS.size !== objT.size) return false;
  for (let key of Object.keys(objS)) {
    if (objS[key] !== objT[key]) return false;
  }
  return true;
  /**
   * 解法3：统计字符数法 Map
   * 思路：
   * 1.统计各个字母次数
   * 2.当统计字母属性key不相等时返回false
   */
  const mapS = new Map();
  const mapT = new Map();
  function count(map, src) {
    for (let key of src) {
      if (!map.has(key)) {
        map.set(key, 1);
      } else {
        map.set(key, map.get(key) + 1);
      }
    }
  }
  count(mapS, s);
  count(mapT, t);
  if (mapS.size !== mapT.size) return false;
  for (let [key, value] of mapS) {
    if (value !== mapT.get(key)) return false;
  }
  return true;
};
