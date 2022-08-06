/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
    // 最大值与最小值是否会发生对撞，无限趋近于最大最小值中间的某一个数，一个位置。
    // 对撞时，可以改为相同数字，最低分为0；否则，min + k和max-k 二者之间最小距离为最低分
    // k可以理解为误差范围；max - k 和 min + k
    // 对撞最低分为0：max - k <= min + k时
    // 未对撞最低分为距离：(max - k) - (min + k)
    // 形象比喻：如果两个人差距太大，就永远不可能有交集，不会有任何故事。这道题又可以叫”最小距离“，"是否相遇"等等
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    if (max - k <= min + k) {
      return 0;
    }
    return (max - k) - (min + k);
  };