/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  /**解法1 Array.prototype.sort()
   */
  return nums.sort((a, b) => a - b);
  /**
   * 解法2 Math.min
   */
  var result = [];
  var length = nums.length;
  for (var i = 0; i < length; i++) {
    var min = Math.min(...nums);
    var idx = nums.indexOf(min);
    var del = nums.splice(idx, 1);
    result.push(del);
  }
  return result;
  /**
   * 解法3：冒泡排序
   * 思路：外层每次循环都是不断将最大值置于尾部,最小值像气泡一样向前冒出
   * 性能：4704ms 39.4MB
   */
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
  /**
   * 解法4：选择排序
   * 思路：已排序区间和未排序区间。在未排序区间中找到最小数，与未排序区间的第一项（已排序区间的下一项）交换，将已排序区间从[]构造成[...]，最终完成排序。若是降序的话，则找最大的数。
   * 性能：2104ms 41.5MB
   */
  for (let i = 0; i < nums.length; i++) {
    let min = nums[i];
    let idx = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < min) {
        min = nums[j];
        idx = j;
      }
      if (j === nums.length - 1) {
        let temp = nums[i];
        nums[i] = nums[idx];
        nums[idx] = temp;
      }
    }
  }
  return nums;
  /**
   * 解法5：插入排序
   * 思路：已排序区间和未排序区间。取出未排序区间的第一项，在已排序区间上找到自己的位置,一般来说是找foo<x<bar，将x插入foo和bar之间，或者是x<bar插入头部。
   * 时间复杂度: O(1)
   * 性能：2008ms 43.9MB
   * 关键点：插入到指定位置后立即停止在已排序数组中查找
   * */
  const sorted = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    // j = i - 1; 也行
    for (let j = sorted.length - 1; j >= 0; j--) {
      if (nums[i] < sorted[j]) {
        if (j === 0) {
          sorted.splice(j, 0, nums[i]);
        }
      } else if (nums[i] >= sorted[j]) {
        sorted.splice(j + 1, 0, nums[i]);
        j = -1; // 这里很关键，插入到指定位置后立即停止在已排序数组中查找
      }
    }
  }
  return sorted;
  /**
   * 解法5优化版：插入排序（不借助辅助数组）
   * 性能：2372ms 42.5MB
   * 思路：插入splice(j/j+1, 0), 删除splice(i, 1)[0]
   * 需要注意的是: splice()返回的是一个数组，例如[1]
   */
  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] < nums[j]) {
        if (j === 0) {
          nums.splice(j, 0, nums.splice(i, 1)[0]);
        }
      } else if (nums[i] >= nums[j]) {
        nums.splice(j + 1, 0, nums.splice(i, 1)[0]);
        j = -1;
      }
    }
  }
  return nums;
};
