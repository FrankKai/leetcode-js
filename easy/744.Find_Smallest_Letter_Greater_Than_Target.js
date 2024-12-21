/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  /**
   * 'a' 96 'b' 97 ···
   */
  let result = letters[0];
  for (const letter of letters) {
    if (letter > target) {
      result = letter;
      break;
    }
  }
  return result;
};
