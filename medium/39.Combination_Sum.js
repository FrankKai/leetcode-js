/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const dfs = (target, index, combination) => {
    // 剪枝
    if (target === 0) {
      // 引用类型 需要拷贝一份出来
      result.push(combination.slice());
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      // 剪枝
      if (candidates[i] <= target) {
        combination.push(candidates[i]);
        // 递归
        dfs(target - candidates[i], i, combination);
        // 回溯：清除本次调用（在dfs之前有一次push）的结果
        combination.pop();
      }
    }
  };
  const result = [];
  dfs(target, 0, [], result);
  return result;
};
