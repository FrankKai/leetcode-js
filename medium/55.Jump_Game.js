/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    // 贪心算法
    let farthest = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (i > farthest) {
        return false; // 最远距离到不了当前位置
      }
      farthest = Math.max(farthest, i + nums[i]);
    
  
    if (farthest >= nums.length - 1) {
      return true; // 当前的最远距离已经可以抵达最后一个元素
    }
    }
  
    return false;
  };