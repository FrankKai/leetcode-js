/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    // let len = 0;
    // let i = 0;
    // let j = 1;
    // while (j <= nums.length) {
    //   const arr = nums.slice(i, j);
    //   const sum = arr.reduce((acc, cur) => acc + cur);
    //   if (sum >= target && (arr.length <= len || len === 0)) {
    //     len = arr.length;
    //   }
    //   if (j === nums.length) {
    //     i++;
    //     j = i + 1;
    //   } else {
    //     j++;
    //   }
    // }
    // return len;
    // 暴力解法会超时，得用滑动窗口
    let len = Infinity;
    let i = 0;
    let sum = 0;
    for (let j = 0; j < nums.length; j++) {
      // 先将右侧窗口向右滑动，找到大于等于目标值的临界点
      sum += nums[j];
      while (sum >= target) {
        len = Math.min(len, j - i + 1);
        // 缩小左侧窗口
        sum -= nums[i];
        i++;
      }
    }
    return len === Infinity ? 0 : len;
  };