/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    /**
     * 思路：
     * 1.不重叠：interval的右值小于newInterval的左值 或者 interval的左值大于newInterval的右值，推入即可
     * 2.重叠：newInterval的左值小于interval的右值 新的区间取[Math.min(interval左值，newInterval左值)， Math.max(interval右值，newInterval右值)]
     * 
     * 图示1
     * 
     *  =>  newInterval min, newInterval max
     * 
     *       |-------------|
     * ---   | ---  --  -- | -----  --  ----  
     * 
     * 图示2
     * 
     *  =>  interval min, interval max
     * 
     *       | ------------- |
     * ---   |------  --  ---| -----  --  ---- 
     * 
     * 图示3
     * 
     *  =>  interval min, newInterval max
     * 
     *       | ---------- |
     * ---   |------  --  |--- -----  --  ---- 
     * 
     * 图示4
     * 
     *  =>  newInterval min, interval max
     * 
     *        |----------- |
     * ---    | ----  -----|   --- -----  --  ---- 
     */
    const result = [];
    let localNewInterval = [...newInterval];
    let hasPushed = false;
    for (let i = 0; i < intervals.length; i++) {
      if (intervals[i][1] < localNewInterval[0]) {
        result.push(intervals[i]);
        continue;
      }
      if (intervals[i][0] > localNewInterval[1]) {
        if (!hasPushed) {
          result.push(localNewInterval);
          hasPushed = true;
        }
        result.push(intervals[i]);
        continue;
      }
      if (localNewInterval[0] <= intervals[i][1]) {
        localNewInterval = [
          Math.min(localNewInterval[0], intervals[i][0]),
          Math.max(localNewInterval[1], intervals[i][1]),
        ];
      }
    }
    if (!hasPushed) {
      result.push(localNewInterval);
      hasPushed = true;
    }
    return result;
  };