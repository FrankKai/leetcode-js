/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
    const map = new Map();
    // let pureStr = "";
    for (const char of licensePlate) {
      if (char == " ") {
        continue;
      }
      if (
        char.charCodeAt() >= "0".charCodeAt() &&
        char.charCodeAt() <= "9".charCodeAt()
      ) {
        continue;
      }
      const key = char.toLowerCase();
      map.set(key, map.has(key) ? map.get(key) + 1 : 1);
      // pureStr += char;
    }
    const arr = [];
    for (let i = 0; i < words.length; i++) {
      const val = checkWord(words[i], map);
      if (val) {
        arr.push(val);
      }
    }
    const minLength = Math.min.apply(
      null,
      arr.map((item) => item.length)
    );
    const result = arr.find((item) => item.length == minLength);
    return result;
    function checkWord(word, map) {
      const innerMap = new Map();
      const localMap = new Map(Array.from(map));
      for (const char of word) {
        const key = char.toLowerCase();
        innerMap.set(key, innerMap.has(key) ? innerMap.get(key) + 1 : 1);
      }
      const pureStr = [...map.keys()].join("");
      for (const char of pureStr) {
        if (innerMap.get(char) >= localMap.get(char)) {
          localMap.delete(char);
        }
      }
      if (localMap.size > 0) {
        return false;
      } else {
        return word;
      }
    }
  };