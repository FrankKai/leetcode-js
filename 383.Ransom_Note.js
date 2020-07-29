/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const magazineLib = magazine.split("");
  let result = true;
  for (const char of ransomNote) {
    const charIndex = magazineLib.indexOf(char);
    if (charIndex === -1) {
      result = false;
      break;
    }
    magazineLib.splice(charIndex, 1);
  }
  return result;
};
