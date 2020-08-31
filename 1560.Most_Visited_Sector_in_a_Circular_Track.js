/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function (n, rounds) {
  /**
   * 思路：
   * 构造一个马拉松路径数组
   * 从数组统计出经过次数最多的扇区
   */
  let sectors = [];
  let i = 1;
  while (i < rounds.length) {
    const start = rounds[i - 1];
    const end = rounds[i];
    if (start < end) {
      sectors.pop();
      sectors = collectSector(start, end, sectors);
    }
    if (start <= n && start > end) {
      sectors.pop();
      // 山脉升
      sectors = collectSector(start, n, sectors);
      // 山脉降
      sectors = collectSector(1, end, sectors);
    }
    i++;
  }
  return countSector(sectors);
  // 收集到扇区数组中
  function collectSector(start, end, collector) {
    let i = start;
    while (i <= end) {
      collector.push(i);
      i++;
    }
    return collector;
  }
  // 统计次数
  function countSector(sectors) {
    const map = new Map();
    let result = [];
    for (const sector of sectors) {
      map.set(sector, map.has(sector) ? map.get(sector) + 1 : 1);
    }
    let max = Infinity;
    for (const [num, count] of map) {
      if (max === Infinity || count >= max) {
        if (count > max) {
          result = [];
        }
        max = count;
        result.push(num);
      }
    }
    result.sort((x, y) => x - y);
    return result;
  }
};
