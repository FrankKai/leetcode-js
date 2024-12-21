// 数组替换
/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  const shift = (c, x) => {
    return String.fromCharCode(c.charCodeAt() + parseInt(x));
  };
  const chars = s.split("");
  let i = 0;
  while (i < s.length) {
    if (i % 2 === 1) {
      chars[i] = shift(s[i - 1], s[i]);
    }
    i++;
  }
  return chars.join("");
};


// 字符串拼接
/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
    const shift = (c, x) => {
        return String.fromCharCode((c.charCodeAt() + parseInt(x)))
    }
    let result = "";
    let i = 0;
    while (i < s.length) {
        if (i % 2 === 1) {
            result += shift(s[i - 1], s[i])
            i++
            continue;
        }
        result += s[i]
        i++
    }
    return result;
};