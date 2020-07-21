/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
  /**
   * 注意：
   * 周一到周日Date.getDay()的返回结果为[1,2,3,4,5,6,0]
   * 因此需要按照周日到周一的结果进行映射[0,1,2,3,4,5,6]
   */
  const map = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(`${year}-${month}-${day}`);
  const idx = date.getDay();
  return map[idx];
};
