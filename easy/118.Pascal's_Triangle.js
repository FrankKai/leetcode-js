/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  //                 1
  //             1       1
  //         1               1
  //     1                       1
  // 1                               1
  //                 1
  //             1       1
  //         1       2       1
  //     1       3        3       1
  // 1        4       6        4      1
  /**
   * 思路：
   * 构建numRows.length个数组
   * 首尾设置为1
   * 首尾外的元素i，通过上一行的j和j+1计算得出
   */
  const parent = [];
  for (let i = 0; i < numRows; i++) {
    const child = new Array(i + 1);
    child[0] = 1;
    child[i] = 1;
    let j = 1;
    while (i >= 2 && j > 0 && j < child.length - 1) {
      child[j] = parent[i - 1][j - 1] + parent[i - 1][j];
      j++;
    }
    parent.push(child);
  }
  return parent;
};
