/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  /**
   * 构造成对象
   */
  function strToArr(str) {
    const res = [];
    let i = 0;
    let cur = {
      char: str[i],
      count: 0,
    };
    while (i < str.length) {
      if (cur.char === str[i]) {
        cur.count++;
      } else {
        res.push(cur);
        cur = {
          char: str[i],
          count: 1,
        };
      }
      i++;
    }
    res.push(cur);
    return res;
  }
  const nameArr = strToArr(name);
  const typedArr = strToArr(typed);
  if (nameArr.length !== typedArr.length) return false;
  let i = 0;
  while (i < nameArr.length) {
    if (
      nameArr[i].char === typedArr[i].char &&
      nameArr[i].count <= typedArr[i].count
    ) {
      i++;
      continue;
    }
    return false;
  }
  return true;
};
