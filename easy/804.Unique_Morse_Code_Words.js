/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  /**
   * 解法1：ASCII码映射 + Set去重
   */
  const morseMap = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  const startCode = "a".charCodeAt();
  const morseCodes = [];
  for (let word of words) {
    let morseCode = "";
    for (let i = 0; i < word.length; i++) {
      const index = word[i].charCodeAt() - startCode;
      morseCode += morseMap[index];
    }
    morseCodes.push(morseCode);
  }
  const result = new Set(morseCodes).size;
  return result;
};
