/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  let i = 0;
  while (i < arr.length) {
    const index = pieces.findIndex((piece) => piece.indexOf(arr[i]) === 0);
    if (index === -1) {
      return false;
    }
    let j = 0;
    while (j < pieces[index].length) {
      if (pieces[index][j] === arr[i]) {
        j++;
        i++;
      } else {
        return false;
      }
    }
    pieces.splice(index, 1);
  }
  return true;
};
