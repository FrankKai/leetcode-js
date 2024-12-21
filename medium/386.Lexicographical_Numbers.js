/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
    /**
     * 字典序排列：例如123和012，先比较百位，由于012的0比123的1小，按照字典序升序排列的话，012在123前面
     * 升序：先拉满，再降位。1,10,100,101...，11, 110，...，119，..., 12, 120...,129,...,19, 199,2,20,200,201...999
     */
    const result = [];
    let current = 1;
    for (let i = 1; i <= n; i++) {
      result.push(current);
      if (current * 10 <= n) {
        current *= 10;
      } else {
        if (current >= n) {
          current = Math.floor(current / 10);
        }
        current++;
        while (current % 10 == 0) {
          current = Math.floor(current / 10);
        }
      }
    }
    return result;
  };