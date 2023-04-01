/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function (s) {
  const isEmail = s.includes("@");
  if (isEmail) {
    const chars = s
      .split("")
      .map((item) => item.toLowerCase())
      .join("")
      .split("@");
    const name = chars[0];
    const domain = chars[1];
    return `${name[0]}*****${name[name.length - 1]}@${domain}`;
  }

  const number = s.replace(/[\+\-\(\) ]+/g, "");
  const suffix = `${number.slice(-4)}`;
  let prefix = "***-***-";
  const local = number.length - 10;
  if (local > 0) {
    prefix = `+${"*".repeat(local)}-` + prefix;
  }
  return prefix + suffix;
};
