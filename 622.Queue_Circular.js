/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  // 存储数据
  this.data = Array(k).fill(null);
  // 设置队列长度
  this.maxSize = k;
  // 队列头尾指针
  this.headPointer = 0;
  this.tailPointer = 0;
  // 当前使用空间
  this.currentSize = 0;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (!this.isFull()) {
    this.data[this.tailPointer] = value;
    this.currentSize++;
    if (!this.isEmpty()) {
      this.tailPointer++;
    }
    return true;
  }
  return false;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.currentSize !== 0) {
    this.currentSize--;
    this.data[this.headPointer] = null;
    this.headPointer++;
    return true;
  }
  return false;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  console.log(this.isEmpty());
  if (!this.isEmpty()) {
    return this.data[this.headPointer];
  } else {
    return -1;
  }
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if (!this.isEmpty()) {
    return this.data[this.tailPointer - 1];
  } else {
    return -1;
  }
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.data.every(function(e) {
    return Object.prototype.toString.call(e) === "[object Null]";
  });
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  if (this.currentSize == this.maxSize) {
    return true;
  }
  return false;
};
