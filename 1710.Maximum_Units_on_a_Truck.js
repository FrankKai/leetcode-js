/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  // 按照单位容量排序，依次挑选，直到数量等于truckSize
  boxTypes.sort((x, y) => y[1] - x[1]);
  let count = 0;
  let result = 0;
  let i = 0;
  while (count < truckSize) {
    if (i === boxTypes.length) return result;
    // console.log(count, truckSize, boxTypes)
    const pop = boxTypes[i];
    i++;
    const popCount = pop[0];
    const popUnit = pop[1];
    const spaceLeft = truckSize - count;
    if (spaceLeft >= popCount) {
      count += popCount;
      result += popCount * popUnit;
    } else {
      count += spaceLeft;
      result += spaceLeft * popUnit;
    }
  }
  return result;
};
