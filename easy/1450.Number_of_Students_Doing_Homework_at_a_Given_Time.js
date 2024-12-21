/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
  let count = 0;
  for (const i in startTime) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
      count++;
    }
  }
  return count;
};
