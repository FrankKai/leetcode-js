/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
  const reverseArr = date.split(" ").reverse();
  reverseArr.forEach((item, i, arr) => {
    if (i === 1) {
      arr[i] = replaceMonth(item);
    }
    if (i === 2) {
      arr[i] = replaceDay(item);
    }
  });
  const result = reverseArr.join("-");
  return result;

  // 替换日
  function replaceDay(day) {
    let numDay = day.replace(/\D+/, "");
    if (numDay.length === 1) {
      return `0${numDay}`;
    }
    return numDay;
  }
  // 替换月
  function replaceMonth(month) {
    const map = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    };
    return map[month];
  }
};
