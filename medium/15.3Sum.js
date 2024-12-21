/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  /**
   * 思路：统计 + 去重
   *
   * 统计：双指针
   * 定值、左右值
   * 判断三者之和大于小于等于0
   *  - 大于0 右值左移
   *  - 小于0 左值右移
   *  - 等于0 推入
   * 定值右移循环继续
   *
   * 去重：对象key方式去重
   *
   * 边界条件：
   * 3000个零、[]
   *
   * 暴力解法：
   * 3000个数字时会超时
   */
  // 边界条件
  if (nums.length === 0) {
    return [];
  }
  if (nums.length >= 3 && nums.every((num) => num === 0)) {
    return [[0, 0, 0]];
  }
  // 统计
  nums.sort((x, y) => x - y);
  let i = 0;
  let j = 1;
  let k = nums.length - 1;
  const countArr = [];
  while (j < k) {
    const sum = nums[i] + nums[j] + nums[k];
    if (sum === 0) {
      countArr.push([nums[i], nums[j], nums[k]]);
      j++;
    }
    if (sum > 0) {
      k--;
    }
    if (sum < 0) {
      j++;
    }
    if (j >= k) {
      i++;
      j = i + 1;
      k = nums.length - 1;
    }
  }
  // 去重
  const obj = {};
  for (const count of countArr) {
    const sortNum = JSON.stringify(count.sort());
    if (!obj[sortNum]) {
      obj[sortNum] = true;
    }
  }
  const result = Object.keys(obj).map(JSON.parse);
  return result;
};

/**
 * 超时的暴力解法
 * 统计部分可用于解Leetcode第200场周赛 第一题 1534.统计好三元组
 */
// var threeSum = function (nums) {
//     /**
//      * 统计 + 去重
//      */
//     // 统计
//     let i = 0;
//     let j = 1;
//     let k = 2;
//     const countArr = [];
//     while (k < nums.length) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//             countArr.push([nums[i], nums[j], nums[k]]);
//         }
//         k++;
//         if (k === nums.length) {
//             j++;
//             k = j + 1;
//         }
//         if (j === nums.length - 1) {
//             i++;
//             j = i + 1;
//             k = j + 1;
//         }
//     }
//     // 去重
//     const obj = {};
//     for (const count of countArr) {
//         const sortNum = JSON.stringify(count.sort());
//         if (!obj[sortNum]) {
//             obj[sortNum] = true;
//         }
//     }
//     const result = Object.keys(obj).map(JSON.parse);
//     return result;
// };
