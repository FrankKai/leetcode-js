/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
    // if (n <= 1) {
    //   return n;
    // }
    // const arr = new Array(n).fill(0).map((_, idx) => idx % 2 === 0);
    // let i = 2;
    // while (i < arr.length) {
    //   if (i === arr.length - 1) {
    //     arr[i] = !arr[i];
    //     break;
    //   }
    //   let len = 0;
    //   for (let j = 0; j < arr.length; j++) {
    //     if (len === i) {
    //       arr[j] = !arr[j];
    //       len = 0;
    //     } else {
    //       len++;
    //     }
    //   }
    //   i++;
    // }
    // return arr.filter((item) => item)?.length;
    return Math.floor(Math.sqrt(n));
  };