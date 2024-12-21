/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let empty = 0;
  let drinksAll = numBottles;
  while (numBottles > 0) {
    numBottles--;
    empty++;
    if (empty === numExchange) {
      empty = 0;
      drinksAll++;
      numBottles++;
    }
  }
  return drinksAll;
};
