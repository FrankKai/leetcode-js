/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {
    // 最优解问题：优先考虑取余%
    // 转化成分钟
    // 累加向下取整结果
    // 迭代依次取余
    const cur = parseInt(current.slice(0, 2)) * 60 + parseInt(current.slice(3));
    const cor = parseInt(correct.slice(0, 2)) * 60 + parseInt(correct.slice(3));
    let diff = cor - cur;
    let res = 0;
    for (const num of [60, 15, 5, 1]) {
      res += Math.floor(diff / num)
      diff = diff % num;
    }
    return res;
  };