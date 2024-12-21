/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const result = s
    .split(" ")
    .reduce((acc, str) => {
      acc.push(str.split("").reverse().join(""));
      return acc;
    }, [])
    .join(" ");
  return result;
};
