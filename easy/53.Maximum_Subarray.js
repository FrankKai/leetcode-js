/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  /**
   * 贪心算法：适合解最小/最大和的问题
   * 核心思想：每次遍历都比较数字、数字与上次比较值之和
   * cur 用于代表 Math.max(数字, 数字与上次比较值之和)
   * max 用于代表 Math.max(数字/和, max) 计算出的cur是否比max大，若是更大则更新max
   */
  var cur = nums[0];
  var max = nums[0];
  var i = 1;
  for (; i < nums.length; i++) {
    // 更新cur 第i项元素 第i项元素+下一个元素 取更大的值
    cur = Math.max(nums[i], cur + nums[i]);
    // 更新max max num 取更大的值
    max = Math.max(max, cur);
  }
  return max;
};
