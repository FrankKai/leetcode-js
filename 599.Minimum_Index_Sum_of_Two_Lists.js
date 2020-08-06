/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  /**
   * 解法1: 数组统计法
   */
  const commonLoves = [];
  for (let i = 0; i < list1.length; i++) {
    const list2Index = list2.indexOf(list1[i]);
    if (list2Index !== -1) {
      const indexSum = i + list2Index;
      commonLoves.push({ name: list1[i], indexSum });
    }
  }
  const minIndexSum = Math.min(
    ...commonLoves.map((restaurant) => restaurant.indexSum)
  );
  const result = commonLoves.reduce((acc, restaurant) => {
    if (restaurant.indexSum === minIndexSum) {
      acc.push(restaurant.name);
    }
    return acc;
  }, []);
  return result;
  /**
   * 解法2: 哈希集合统计法
   */
  const map1 = new Map();
  const map2 = new Map();
  for (let i = 0; i < list1.length; i++) {
    map1.set(list1[i], i);
  }
  for (let j = 0; j < list2.length; j++) {
    if (map1.has(list2[j])) {
      map2.set(list2[j], map1.get(list2[j]) + j);
    }
  }
  let min = -Infinity;
  let result = [];
  for (const [key, value] of map2) {
    if (min === -Infinity || min > value) {
      min = value;
      result = [key];
    } else if (min === value) {
      result.push(key);
    }
  }
  return result;
};
