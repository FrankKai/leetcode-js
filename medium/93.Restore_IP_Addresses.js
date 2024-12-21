/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const arr = [];
    let str = "";
    for (let a = 1; a <= 3; a++) {
      for (let b = 1; b <= 3; b++) {
        for (let c = 1; c <= 3; c++) {
          for (let d = 1; d <= 3; d++) {
            if (a + b + c + d === s.length) {
              const num1 = parseInt(s.slice(0, a));
              const num2 = parseInt(s.slice(a, a + b));
              const num3 = parseInt(s.slice(a + b, a + b + c));
              const num4 = parseInt(s.slice(a + b + c));
              if (num1 <= 255 && num2 <= 255 && num3 <= 255 && num4 <= 255) {
                str = `${num1}.${num2}.${num3}.${num4}`;
                if (str.length === s.length + 3) {
                  arr.push(str);
                }
                str = "";
              }
            }
          }
        }
      }
    }
    return arr;
  };