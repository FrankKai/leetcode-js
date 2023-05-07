/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    const map = new Map();
    map.set(0, 0);
    map.set(1, 1);
    map.set(2, 1);
    if (n <= 2) {
      return map.get(n);
    }
    for (let i = 3; i <= n; i++) {
      map.set(i, map.get(i - 1) + map.get(i - 2) + map.get(i - 3));
    }
    return map.get(n);
  };