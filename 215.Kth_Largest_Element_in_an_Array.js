/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  /**
   * 解法1：倒序排序输出
   */
  nums.sort((a, b) => b - a);
  return nums[k - 1];
  /**
   * 解法2：最大堆法
   * Java中有PriorityQueue class
   * Python中有heapq.nlargest
   * js在数据结构方面的封装好的class相对弱很多，想使用最大堆得首先实现一个优先队列
   */

  /**
   * 解法3：快速排序法
   */
};
