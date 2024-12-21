/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    const sum = [...`${i}`].reduce((acc, cur) => acc + parseInt(cur), 0);
    if (sum % 2 === 0) {
      count++;
    }
  }
  return count;
};
