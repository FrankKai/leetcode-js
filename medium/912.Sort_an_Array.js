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
   * 时间复杂度：O(n^2)
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
   * 时间复杂度：O(n^2)
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
   * 关键点：插入到指定位置后立即停止在已排序数组中查找
   * 性能：2008ms 43.9MB
   * 时间复杂度：O(n^2)
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
   * 思路：插入splice(j/j+1, 0), 删除splice(i, 1)[0]
   * 需要注意的是: splice()返回的是一个数组，例如[1]
   * 性能：2372ms 42.5MB
   * 时间复杂度：O(n^2)
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
  /**
   * 解法6：归并排序
   * 思路：将长度为n的数组拆为n/2长度的数组，分别对各自进行排序。再将n/2长度的数组使用归并排序，直到最终的排序的数组长度为2，最后将最终排序的数组依次向上合并
   * 核心：二分和递归。类似二分排序，自顶向下二分拆解排序，自底向上合并排序结果。
   * 注意：终止递归的条件为if (length <= 1) { return nums; }
   * 性能：260ms 47.9MB
   * 时间复杂度: O(nlogn)
   */
  const merge = (left, right) => {
    const result = [];
    while (left.length && right.length) {
      if (left[0] >= right[0]) {
        result.push(right.shift());
      } else {
        result.push(left.shift());
      }
    }
    while (left.length) {
      result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }
    return result;
  };
  let length = nums.length;
  if (length <= 1) {
    return nums;
  }
  let middle = Math.floor(length / 2);
  let left = nums.splice(0, middle);
  let right = nums;
  return merge(sortArray(left), sortArray(right));
  /**解法7：快速排序
   * 思路：
   * 1.选中一个分割点split
   * 2.定义左右双指针，一次遍历将分割值小的置于左侧，比分割值大的置于右侧
   * 2.1 左右指针不相遇时 swap(left, right)
   * 2.2 左右指针相遇时，swap(start, left)并且返回left
   * 3.分治递归式为左右两侧序列快排
   * 性能：128ms 40.8MB
   * 时间复杂度：O(nlogn)
   */
  quickSort(nums, 0, nums.length - 1);
  return nums;
  // 定义一个快排函数
  function quickSort(arr, left, right) {
    if (left < right) {
      let splitIndex = findSplitIndex(nums, left, right);
      quickSort(nums, left, splitIndex - 1);
      quickSort(nums, splitIndex + 1, right);
    }
  }
  // 查找分割值索引
  function findSplitIndex(arr, left, right) {
    const start = left;
    const splitValue = arr[start];
    while (left !== right) {
      while (left < right && arr[right] > splitValue) {
        right--;
      }
      while (left < right && arr[left] <= splitValue) {
        left++;
      }
      if (left < right) {
        swap(arr, left, right);
      }
    }
    swap(arr, start, left);
    return left;
  }
  // 交换位置：左右交换、分割点与left交换
  function swap(arr, i, j) {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
};
