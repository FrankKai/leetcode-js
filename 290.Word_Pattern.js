/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  const patternTransform = transformPattern(pattern.split(""));
  const strTransform = transformPattern(str.split(" "));
  const result = patternTransform === strTransform;
  return result;

  function transformPattern(arr) {
    let i = 1;
    let obj = {};
    let pattern = [];
    for (const item of arr) {
      if (!obj[item]) {
        obj[item] = i;
        pattern.push(i);
        i++;
        continue;
      }
      pattern.push(obj[item]);
    }
    const result = pattern.join("");
    return result;
  }
};
