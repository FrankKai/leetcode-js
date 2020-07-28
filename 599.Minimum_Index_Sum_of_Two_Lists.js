/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
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
};
