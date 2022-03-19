/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
    this.maxSize = maxSize;
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
    if (this.stack.length === this.maxSize) {
        return null;
    }
    this.stack.push(x);
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
    return this.stack.pop() || -1;
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
    this.stack = this.stack.map((num, index) => {
        if (index < k) {
            return num + val
        } else {
            return num
        }
    })
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */