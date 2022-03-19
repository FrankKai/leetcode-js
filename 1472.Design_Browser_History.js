/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
    this.url = homepage;
    this.backs = [this.url];
    this.forwards = [];
    this.index = 0;
    this.urlStacks = [...this.backs, ...this.forwards]
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
    this.forwards = []
    this.backs.push(url)
    this.urlStacks = [...this.backs, ...this.forwards]
    this.index = this.urlStacks.length - 1;
    return null;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
    const validSteps = steps >= this.backs.length ? this.backs.length - 1 : steps;
    this.index -= validSteps;
    this.url = this.urlStacks[this.index]
    let i = 0;
    while (i < validSteps) {
        this.forwards.unshift(this.backs.pop());
        i++
    }
    this.urlStacks = [...this.backs, ...this.forwards]
    return this.url;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
    if(this.forwards.length === 0){ return this.urlStacks[this.index]}
    const validSteps = steps >= this.forwards.length ? this.forwards.length : steps;
    this.index += validSteps;
    this.url = this.urlStacks[this.index]
    let i = 0;
    while (i < validSteps) {
        this.backs.push(this.forwards.shift());
        i++
    }
    this.urlStacks = [...this.backs, ...this.forwards]
    return this.url;
};

// [leetcode.com, goog 9 le.com, facebo 9 ok.com, youtube.com]
/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */