/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  const words = title.split(" ").map((word) => {
    if (word.length <= 2) {
      return word.toLowerCase();
    }
    const first = word.slice(0, 1).toUpperCase();
    const last = word.slice(1).toLowerCase();
    return `${first}${last}`;
  });
  return words.join(" ");
};
