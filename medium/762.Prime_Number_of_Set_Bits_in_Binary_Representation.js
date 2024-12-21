/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
    let count = 0;
    for (let i = left; i <= right; i++) {
      if (isTarget(countOne(trans(i)))) {
        count++;
      }
    }
    return count;
    function trans(num) {
      let str = "";
      while (num > 0) {
        str += num % 2;
        num = Math.floor(num / 2);
      }
      return str;
    }
    function countOne(str) {
      let count = 0;
      for (const item of str) {
        if (item === "1") {
          count++;
        }
      }
      return count;
    }
    function isTarget(num) {
      if (num <= 1) {
        return false;
      }
      if (num === 2) {
        return true;
      }
      if (num % 2 == 0) {
        return false;
      }
      for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
  };