/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
  const textArr = text.split(" ");
  let i = 0;
  let j = 1;
  const words = [];
  while (j < textArr.length - 1) {
    if (textArr[i] === first && textArr[j] === second) {
      words.push(textArr[j + 1]);
    }
    i++;
    j++;
  }
  return words;
};
