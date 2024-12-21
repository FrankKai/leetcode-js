/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
    const isGoodString = (str) => {
      return str.length === new Set(str).size;
    };
    let i = 0;
    let count = 0;
    while (i + 3 <= s.length) {
      const substr = s.slice(i, i + 3);
      if(isGoodString(substr)){
        count++
      }
      i++;
    }
    return count;
  };