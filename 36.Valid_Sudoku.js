/**
 * @param {character[][]} board
 * @return {boolean}
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  /**
   * 解法1：HashMap （3*3检测小学生版）
   */
  const columnMap = new Map();
  const subMap = new Map();
  for (let i = 0; i < board.length; i++) {
    const rowMap = new Map();
    for (let j = 0; j < board[i].length; j++) {
      // 数字 1-9 在每一行只能出现一次。
      if (board[i][j] === ".") {
        continue;
      }
      if (rowMap.has(board[i][j])) {
        return false;
      } else {
        rowMap.set(board[i][j], true);
      }
      // 数字 1-9 在每一列只能出现一次。
      if (columnMap.has(j)) {
        if (columnMap.get(j).indexOf(board[i][j]) !== -1) {
          return false;
        } else {
          const arr = columnMap.get(j);
          arr.push(board[i][j]);
          columnMap.set(j, arr);
        }
      } else {
        columnMap.set(j, [board[i][j]]);
      }
      // 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
      if (!check(0, 2, 1, i, j)) {
        return false;
      }
      if (!check(3, 5, 4, i, j)) {
        return false;
      }
      if (!check(6, 8, 7, i, j)) {
        return false;
      }
    }
  }
  return true;
  /**
   * 将x轴方向表示列的j分为3段
   * 将y轴方向表示行的i分为3段
   * 分为1~9 9个区域
   */
  function check(startI, endI, boxIndex, i, j) {
    if (i >= startI && i <= endI) {
      if (j >= 0 && j <= 2) {
        if (!checkMap(i, j, boxIndex)) {
          return false;
        }
      }
      if (j >= 3 && j <= 5) {
        if (!checkMap(i, j, boxIndex + 1)) {
          return false;
        }
      }
      if (j >= 6 && j <= 8) {
        if (!checkMap(i, j, boxIndex + 2)) {
          return false;
        }
      }
    }
    return true;
  }
  // 通过map检测一个3*3区域中是否有重复项
  function checkMap(i, j, boxIndex) {
    if (subMap.has(boxIndex)) {
      if (subMap.get(boxIndex).indexOf(board[i][j]) !== -1) {
        return false;
      } else {
        const arr = subMap.get(boxIndex);
        arr.push(board[i][j]);
        subMap.set(boxIndex, arr);
      }
    } else {
      subMap.set(boxIndex, [board[i][j]]);
    }
    return true;
  }
  /**
   * 解法2: HashMap （3*3检测优化版）
   */
  const columnMap = new Map();
  const subMap = new Map();
  for (let i = 0; i < board.length; i++) {
    const rowMap = new Map();
    for (let j = 0; j < board[i].length; j++) {
      // 数字 1-9 在每一行只能出现一次。
      if (board[i][j] === ".") {
        continue;
      }
      if (rowMap.has(board[i][j])) {
        return false;
      } else {
        rowMap.set(board[i][j], true);
      }
      // 数字 1-9 在每一列只能出现一次。
      if (columnMap.has(j)) {
        if (columnMap.get(j).indexOf(board[i][j]) !== -1) {
          return false;
        } else {
          const arr = columnMap.get(j);
          arr.push(board[i][j]);
          columnMap.set(j, arr);
        }
      } else {
        columnMap.set(j, [board[i][j]]);
      }
      // 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
      // 0,1,2 0,3,6=> 0~8
      const boxIndex = Math.floor(j / 3) + Math.floor(i / 3) * 3;
      if (subMap.has(boxIndex)) {
        if (subMap.get(boxIndex).indexOf(board[i][j]) !== -1) {
          return false;
        } else {
          const arr = subMap.get(boxIndex);
          arr.push(board[i][j]);
          subMap.set(boxIndex, arr);
        }
      } else {
        subMap.set(boxIndex, [board[i][j]]);
      }
    }
  }
  return true;
};
