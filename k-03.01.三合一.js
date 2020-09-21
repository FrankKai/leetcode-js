/**
 * @param {number} stackSize
 */
var TripleInOne = function (stackSize) {
  this.stackSize = stackSize;
  this.stack = [[], [], []];
};

/**
 * @param {number} stackNum
 * @param {number} value
 * @return {void}
 */
TripleInOne.prototype.push = function (stackNum, value) {
  if (this.stack[stackNum].length < this.stackSize) {
    this.stack[stackNum].push(value);
  }
};

/**
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.pop = function (stackNum) {
  const pop = this.stack[stackNum].pop();
  return pop === undefined ? -1 : pop;
};

/**
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.peek = function (stackNum) {
  const stack = this.stack[stackNum];
  if (stack.length > 0) {
    return stack[stack.length - 1];
  }
  return -1;
};

/**
 * @param {number} stackNum
 * @return {boolean}
 */
TripleInOne.prototype.isEmpty = function (stackNum) {
  return this.stack[stackNum].length === 0;
};

/**
 * Your TripleInOne object will be instantiated and called as such:
 * var obj = new TripleInOne(stackSize)
 * obj.push(stackNum,value)
 * var param_2 = obj.pop(stackNum)
 * var param_3 = obj.peek(stackNum)
 * var param_4 = obj.isEmpty(stackNum)
 */
