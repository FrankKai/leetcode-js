/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let farthest = 0;
    let jumps = 0;
    let end = 0; // 找出上一次跳跃位置到end的最优解
    for (let i = 0; i < nums.length - 1; i++) {
      // 因为跳到最后一个位置就可以了，所以此处i<nums.length -1
      farthest = Math.max(farthest, i + nums[i]);
  
      if (i === end) {
        jumps++;
        end = farthest;
      }
    }
    return jumps;
  };