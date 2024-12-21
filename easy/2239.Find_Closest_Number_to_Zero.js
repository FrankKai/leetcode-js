/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
    // 找出绝对值最小的值
    // 遍历的同时，判断大小，取更大的值
    // 注意当存在绝对值不相同的数据时，清空数组
    let minAbs = Infinity;
    let arr = [];
    for (const num of nums) {
      const abs = Math.abs(num);
      if (abs <= Math.abs(minAbs)) {
        minAbs = abs;
        if(!arr.some((item)=> Math.abs(item) === minAbs)){
          arr = [];
        }
        arr.push(num);
      }
    }
    const res = Math.max.apply(null, arr);
    return res;
  };