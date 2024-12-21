/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
    const columnArr = generateAll(matrix);
    const all = [...matrix, ...columnArr];
    const result = all.every((item) =>
      check(
        item.map((num) => num - 1),
        item.length
      )
    );
  
    return result;
  
    function check(arr, n) {
      const flags = Array(n).fill(false);
      for (const idx of arr) {
        flags[idx] = true;
      }
      return flags.every((item) => item);
    }
  
    function generateAll(arr) {
      const result = Array.from(
        { length: arr[0].length },
        () => Array.from({ length: arr.length }),
        0
      );
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          result[j][i] = arr[i][j];
        }
      }
      return result;
    }
  };