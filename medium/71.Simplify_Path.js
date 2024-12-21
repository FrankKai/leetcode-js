/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    // 栈
    const names = path.split("/");
    const stack = [];
    for (const name of names) {
      // !name是因为split('/')后存在空字符串
      if (!name || name === ".") {
        continue;
      }
      // 遇到..出栈即可
      if (name === "..") {
        stack.pop();
        continue;
      }
      stack.push(name);
    }
    const simplifiedPath = "/" + stack.join("/");
    return simplifiedPath;
  };