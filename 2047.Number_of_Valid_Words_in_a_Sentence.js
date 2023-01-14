/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
  const hyphen = ["-"];
  const puncs = ["!", ".", ","];
  const lowerChars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const validChars = [...lowerChars, " ", ...hyphen, ...puncs];
  const words = sentence.split(" ").filter((item) => item);
  const validWords = words.filter((word) => {
    let hyphenValid = true;
    let hyphenCount = 0;
    let puncValid = true;
    let puncCount = 0;
    const onlySpecified = word.split("").every((char, idx) => {
      if (hyphen.includes(char)) {
        hyphenCount++;
        const isValid = [word[idx - 1], word[idx + 1]].every((item) =>
          lowerChars.includes(item)
        );
        hyphenValid = isValid;
      }
      if (puncs.includes(char)) {
        puncCount++;
        puncValid = idx === word.length - 1;
      }
      return validChars.includes(char);
    });
    return (
      onlySpecified &&
      hyphenCount <= 1 &&
      hyphenValid &&
      puncCount <= 1 &&
      puncValid
    );
  });
  // console.log(validWords);
  return validWords.length;
};
