/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  /**
   * 思路：
   * 一、拆词
   * 1.正则匹配过滤标点符号 ,.
   * 2.统一转为小写 不区分BALL ball
   * 3.拆除单词 split(/\s+/)匹配一个或多个空白字符串
   * 二、过滤
   * 过滤出不在单词列表中的数据
   * 三、计数
   * 1.构造出{foo: 3, bar:2}的数据结构
   * 2.返回值最大的字符串
   * 四、查词
   * 1.找最大数
   * 2.找到最大数更新result
   * 特殊测试用例：
   * 1."a." [] // trim() "a " ["a", ""]=> "a" ["a"]
   * 2."a, a, a, a, b,b,b,c, c", ["a"] //repalce(..., "")=>replace(..., "")
   */
  // 拆词
  const pureParagraph = paragraph.replace(/[^a-zA-Z]/g, " ");
  const lowerParagraph = pureParagraph.toLowerCase();
  const splitWords = lowerParagraph.trim().split(/\s+/);
  // 过滤
  const bannedSet = new Set(banned);
  const filterWords = splitWords.filter((word) => !bannedSet.has(word));
  // 计数
  const obj = {};
  for (let word of filterWords) {
    if (!obj[word]) {
      obj[word] = 1;
    } else {
      obj[word]++;
    }
  }
  // 查词
  let max = 1;
  let result = "";
  for (let key in obj) {
    if (obj[key] >= max) {
      max = obj[key];
      result = key;
    }
  }
  return result;
};

// TypeScript版
function mostCommonWord(paragraph: string, banned: string[]): string {
  /**
   * 特殊注意的地方：
   * 定义空对象obj前，需要定义个interface，注明index和value的类型
   * 定义空对象obj时，指定obj为自定义的interface的类型
   */
  // 拆词
  const pureParagraph = paragraph.replace(/[^a-zA-Z]/g, " ");
  const lowerParagraph = pureParagraph.toLowerCase();
  const splitWords = lowerParagraph.trim().split(/\s+/);
  // 过滤
  const bannedSet = new Set(banned);
  const filterWords = splitWords.filter((word) => !bannedSet.has(word));
  // 计数
  interface countWords {
    [index: string]: number;
  }
  const obj: countWords = {};

  for (let word of filterWords) {
    if (!obj[word]) {
      obj[word] = 1;
    } else {
      obj[word]++;
    }
  }
  // 查词
  let max = 1;
  let result = "";
  for (let key in obj) {
    if (obj[key] >= max) {
      max = obj[key];
      result = key;
    }
  }
  return result;
}
