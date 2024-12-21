/**
 * 解法：递归 + 0~n随机索引 + 未取索引stack
 * 核心思想：随机索引碰巧在stack中，则删除一个索引；否则递归直到随机数碰巧在stack中。
 */

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.length = nums.length;
  this.nums = nums;
  this.sortArr = (n) => {
    var i = 0;
    var arr = [];
    for (; i < n; i++) {
      arr[i] = i;
    }
    return arr;
  };
  this.getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  var result = arguments[0] || [];
  var stack = arguments[1] || this.sortArr(this.length);
  for (var i = arguments[2] || 0; i < this.length; i++) {
    var randomIdx = this.getRandomInt(this.length);
    var curIdx = stack.indexOf(randomIdx);
    if (curIdx !== -1) {
      result.push(this.nums[randomIdx]);
      stack.splice(curIdx, 1);
    } else {
      return this.shuffle(result, stack, i);
    }
  }
  return result;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
