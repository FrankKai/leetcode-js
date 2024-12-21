/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  return "http://tinyurl.com/" + Buffer.from(longUrl).toString("base64");
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  const { pathname, search } = new URL(shortUrl);
  return Buffer.from(`${pathname}${search}`.slice(1), "base64").toString();
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
