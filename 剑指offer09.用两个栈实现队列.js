var CQueue = function () {
  this.queue = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.queue.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  const head = this.queue.shift();
  const result = head || -1;
  return result;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
