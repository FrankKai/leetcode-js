/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
    let max = releaseTimes[0];
    let result = keysPressed[0];
    let i = 1;
    while (i < releaseTimes.length) {
      const range = releaseTimes[i] - releaseTimes[i - 1];
      if (range > max) {
        max = range;
        result = keysPressed[i];
      } else if (range === max) {
        if (keysPressed[i].charCodeAt() > result.charCodeAt()) {
          result = keysPressed[i];
        }
      }
  
      i++;
    }
    return result;
  };