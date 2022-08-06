/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function (cards) {
    // 连续
    // 最短
    // 思路：hashmap记录数字位置，与上一个相同值的数字计算距离，更新数字的最新index，取最小值
    // 空间换时间
    // 有一点很重要：当前数字到前一个数字的距离，肯定小于当前数字到前前一个数字的距离，所以才能去更新数字最新的index位置
    const map = new Map();
    let min = Infinity;
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      if (map.has(card)) {
        const dist = i - map.get(card) + 1;
        if (dist < min) {
          min = dist;
        }
      }
      map.set(card, i);
    }
    return min === Infinity ? -1 : min;
  };