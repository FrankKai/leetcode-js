/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  if ([...new Set(s.split(""))].length === s.length) return -1;
  const ranges = [];
  let i = 0;
  while (i < s.length) {
    const head = s.indexOf(s[i]);
    const tail = s.lastIndexOf(s[i]);
    if (tail - head > 0) {
      ranges.push(tail - head - 1);
    }
    i++;
  }
  const result = Math.max(...ranges);
  return result;
};
