/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
  const result = new Set();
  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      for (let k = 0; k < digits.length; k++) {
        if (i !== j && i !== k && j !== k) {
          if (digits[i] !== 0 && parseInt(digits[k]) % 2 == 0) {
            result.add(`${digits[i]}${digits[j]}${digits[k]}`);
          }
        }
      }
    }
  }
  const arrResult = [...result];
  arrResult.sort((x,y)=>x-y);
  return arrResult;
};
