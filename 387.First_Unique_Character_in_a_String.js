/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  /**
   * 解法1:数组
   */
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!obj[char]) {
      obj[char] = { firstIndex: i, count: 1 };
    } else {
      obj[char].count++;
    }
  }
  const onlyOne = Object.values(obj).filter((char) => char.count === 1);
  const result = onlyOne.length >= 1 ? onlyOne[0].firstIndex : -1;
  return result;
  /**
   * 解法2：HashMap
   * 注意：
   * Map设置的key，会按照设置顺序进行先后排序
   * Object设置的key没有这个特性
   */
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map.set(
      char,
      map.get(char)
        ? { index: i, count: map.get(char).count + 1 }
        : { index: i, count: 1 }
    );
  }
  for (const [key, obj] of map) {
    if (obj.count === 1) {
      return obj.index;
    }
  }
  return -1;
};
