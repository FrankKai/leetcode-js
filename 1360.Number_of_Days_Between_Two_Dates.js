/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
  const tDate1 = getTimestamp(date1);
  const tDate2 = getTimestamp(date2);
  const times = Math.ceil(Math.abs(tDate1 - tDate2) / (24 * 60 * 60 * 1000));
  return times;

  function getTimestamp(date) {
    return new Date(date).getTime();
  }
};
