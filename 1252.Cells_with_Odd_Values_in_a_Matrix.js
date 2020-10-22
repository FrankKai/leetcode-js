/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (n, m, indices) {
  const arr = [];
  let idx = 0;
  while (idx < n) {
    const sub = new Array(m).fill(0);
    arr.push(sub);
    idx++;
  }
  for (const indice of indices) {
    const [ri, ci] = indice;
    arr.forEach((row, i, iarr) => {
      if (ri === i) {
        iarr[i] = row.map((num) => {
          num++;
          return num;
        });
      }
      iarr[i] = iarr[i].map((num, j) => {
        if (ci === j) {
          num++;
        }
        return num;
      });
    });
  }
  let count = 0;
  for (const num of arr.flat()) {
    if (num % 2 === 1) {
      count++;
    }
  }
  return count;
};
