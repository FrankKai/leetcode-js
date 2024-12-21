/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
    return s.split("0").filter((item) => item).length === 1;
  };