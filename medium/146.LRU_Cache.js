/**
 * 解题思路：利用Map的key具有顺序的特性实现LRU缓存机制
 */

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    const value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value);
    return value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.map.delete(key);
  }
  this.map.set(key, value);
  if (this.map.size > this.capacity) {
    this.map.delete(this.map.keys().next().value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// 栈版本，用例通过20/21
/**
 * 解题思路：利用栈（栈顶栈底），Map记录值的特性实现LRU缓存机制
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.stack = [];
  this.map = new Map();
};
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    const index = this.stack.findIndex((item) => item.key === key);
    this.stack.unshift(this.stack.splice(index, 1)[0]);
    return this.map.get(key);
  }
  return -1;
};
LRUCache.prototype.put = function (key, value) {
  // 存储相同key时的处理
  if (this.map.has(key)) {
    const index = this.stack.findIndex((item) => item.key === key);
    // 替换value并移动到栈底
    this.stack[index].value = value;
    this.stack.unshift(this.stack.splice(index, 1)[0]);
    // 更新key的值
    this.map.set(key, value);
    return;
  }
  if (this.map.size === this.capacity) {
    this.map.delete(this.stack.pop().key);
  }
  this.map.set(key, value);
  this.stack.unshift({ key, value });
};
