/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const str = s.split("");
  let i = 0;
  while (i <= s.length - 2) {
    if (str[i] && str[i + 1] && str[i] !== str[i + 1]) {
      if (
        str[i] === str[i + 1].toLowerCase() ||
        str[i] === str[i + 1].toUpperCase()
      ) {
        str.splice(i + 1, 1);
        str.splice(i, 1);
        i = 0;
        continue;
      }
    }
    i++;
  }
  return str.join("");
};
