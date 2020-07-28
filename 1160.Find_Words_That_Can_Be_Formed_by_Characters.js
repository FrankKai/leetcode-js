/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  const matchWords = words.map((word) => compareWordWithChars(word, chars));
  const count = matchWords.filter((word) => word).join("").length;
  return count;

  function compareWordWithChars(word, chars) {
    let result = word;
    const charsArr = chars.split("");
    for (const char of word) {
      const index = charsArr.indexOf(char);
      if (index === -1) {
        result = null;
        break;
      }
      charsArr.splice(index, 1);
    }
    return result;
  }
};
