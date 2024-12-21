/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    /**
     * 计算2个攻击之间的中毒时间
     * 加上最后一次攻击后的时间
     */
    if (timeSeries.length === 0) {
      return 0
    }
    let total = 0
    for (let i = 1; i < timeSeries.length; i++) {
      total += Math.min(timeSeries[i] - timeSeries[i - 1], duration)
    }
    total += duration
    return total;
  }