/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  const playground = Array.from({ length: 3 }, () => Array(3).fill(""));
  let idx = 0;
  for (const [x, y] of moves) {
    if (idx % 2 == 0) {
      playground[x][y] = "X";
    } else {
      playground[x][y] = "O";
    }
    if (checkPlayground(playground)) {
      return idx % 2 == 0 ? "A" : "B";
    }
    idx++;
  }
  const isDraw = playground.flat().every((item) => item !== "");
  if (isDraw) {
    return "Draw";
  }
  const isPending = playground.flat().some((item) => item === "");
  if (isPending) {
    return "Pending";
  }
  function isWon(arr) {
    return (
      arr.every((item) => item === "X") || arr.every((item) => item === "O")
    );
  }
  function checkPlayground(arr) {
    // 检查对角线
    if (
      isWon([arr[0][0], arr[1][1], arr[2][2]]) ||
      isWon([arr[0][2], arr[1][1], arr[2][0]])
    ) {
      return true;
    }
    for (let i = 0; i < 3; i++) {
      // 检查行
      if (isWon(arr[i])) {
        return true;
      }
      // 检查列
      if (isWon([arr[0][i], arr[1][i], arr[2][i]])) {
        return true;
      }
    }
    return false;
  }
};
