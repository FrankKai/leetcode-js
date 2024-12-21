/**
 * @param {string} s
 * @return {number[][]}
 */
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
    let preIndex = 0;
    let startIndex = 0;
    let char = s[0];
    const res = [];
    while (startIndex <= s.length) {
      if (s[startIndex] !== char) {
        if (startIndex - preIndex >= 3) {
          res.push([preIndex, startIndex - 1]);
        }
        char = s[startIndex];
        preIndex = startIndex;
      }
      startIndex++;
    }
    return res;
  };