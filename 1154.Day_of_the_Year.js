/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  /**
   * 思路：
   * 1.当前时间戳
   * 2.取出年份拼得到第一YYYY-01-01的时间戳
   * 3.时间戳相剪 / 24*60*60*1000
   */
  const startYear = getStartYear(date);
  const timestampStart = getTimestamp(startYear);
  const timestampCurrent = getTimestamp(date);
  const range = (timestampCurrent - timestampStart) / (24 * 60 * 60 * 1000);
  const result = range + 1;
  return result;

  function getTimestamp(date) {
    return new Date(date).getTime();
  }
  function getStartYear(date) {
    return `${date.slice(0, 4)}-01-01`;
  }
};
