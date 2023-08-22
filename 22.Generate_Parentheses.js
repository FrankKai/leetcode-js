/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  /**
   * 算法思想：DFS（深度优先搜索）
   * 递归：不断搜索可能的组合
   * 剪枝：left>0, right>0，left>right
   * DFS尝试所有可能的组合方式来找出合法解，当前位置尝试多种可能，常用于解组合问题。
   */

  const dfs = (left, right, str, result) => {
    if (left > right) {
      return;
    }
    if (left === 0 && right === 0) result.push(str);
    if (left > 0) {
      dfs(left - 1, right, str + "(", result);
    }
    if (right > 0) {
      dfs(left, right - 1, str + ")", result);
    }
  };
  const result = [];
  dfs(n, n, "", result);
  return result;
};
