/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  // 逐个处理即可，无需担心连续?引入的问题。因为是逐一处理，所以不会存在同时处理问号引入的字符连续问题
  const findChar = (pre, next) => {
    const chars = "abcdefghijklmnopqrstuvwxyz"; // 可以改为abc，因为3个不同的字母足够保证唯一性
    for (const char of chars) {
      if (char !== pre && char !== next) {
        return char;
      }
    }
  };
  const arr = [...s];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "?") {
      if (i === 0) {
        arr[i] = findChar(null, arr[i + 1]);
      } else if (i > 0 && i < arr.length - 1) {
        arr[i] = findChar(arr[i - 1], arr[i + 1]);
      } else {
        arr[i] = findChar(arr[i - 1], null);
      }
    }
  }
  return arr.join("");
};
