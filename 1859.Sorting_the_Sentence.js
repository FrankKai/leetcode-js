/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  const strs = s.split(" ");
  const result = [];
  for (const str of strs) {
    const obj = getIndexAndValue(str);
    result[obj.index] = obj.value;
  }
  result.shift();
  return result.join(" ");

  function getIndexAndValue(str) {
    let i = str.length - 1;
    const nums = [];
    let value = "";
    while (i >= 0) {
      const char = str[i];
      const pi = parseInt(char);
      if (!Number.isNaN(pi)) {
        nums.unshift(pi);
      } else {
        value = char + value;
      }
      i--;
    }
    const index = parseInt(nums.join(""));
    return { index, value };
  }
};
