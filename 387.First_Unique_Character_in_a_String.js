/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
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
};
