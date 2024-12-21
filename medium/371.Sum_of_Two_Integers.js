/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    // 位运算实现加法
    // 异或运算：没有进位的加法 例如：0100 ^ 0100 => 0000
    // 与运算：找到进位的位置，并通过<<1左移一位 例如：0100&0100 => 0100(说明要在这个位置进位了，<<1左进1位)
  
    while (b !== 0) {
      let carry = a & b;
      a = a ^ b;
      b = carry << 1;
    }
    return a;
  };