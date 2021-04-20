/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  if (sentence.length < 26) return false;
  let count = 0;
  const obj = {};
  for (const char of sentence) {
    if (!obj[char]) {
      obj[char] = true;
      count++;
      if (count === 26) return true;
    }
  }
  return false;
};
