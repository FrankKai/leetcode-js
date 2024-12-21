/**
 * 题解：
 * 先决：需要掌握链表数据结构基础知识
 * 1.定义：https://leetcode-cn.com/explore/learn/card/linked-list/193/singly-linked-list/738/
 * 2.添加：https://leetcode-cn.com/explore/learn/card/linked-list/193/singly-linked-list/739/
 * 3.删除：https://leetcode-cn.com/explore/learn/card/linked-list/193/singly-linked-list/740/
 * 注意点：
 * 1.需要定义链表节点ListNode
 * 2.需要记录当前链表长度，用于get
 * 3.边界条件众多，做好面向测试用例debug的准备
 * 4.自定义内部辅助函数用于获取节点_getItem()
 */

/**
 * Initialize your data structure here.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (this.size === 0) return -1;
  if (index < 0 || index >= this.size) return -1;
  let cur = this.head;
  while (index > 0) {
    cur = cur.next;
    index--;
  }
  return cur.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const cur = new ListNode(val);
  cur.next = this.head;
  this.head = cur;
  this.size++;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const tail = this._getItem(this.size - 1);
  if (!tail) return;
  const cur = new ListNode(val);
  tail.next = cur;
  this.size++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) return;
  const cur = new ListNode(val);
  if (index <= 0) {
    return this.addAtHead(val);
  }
  if (index === this.size) {
    return this.addAtTail(val);
  }
  const prev = this._getItem(index - 1);
  cur.next = prev.next;
  prev.next = cur;
  this.size++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (this.size === 0) return;
  if (index < 0 || index >= this.size) return;
  if (index === 0) {
    this.head = this.head.next;
  }
  if (index > 0 && index < this.size) {
    const prev = this._getItem(index - 1);
    const next = this._getItem(index + 1);
    prev.next = next;
  }
  this.size--;
};

MyLinkedList.prototype._getItem = function (index) {
  if (this.size === 0) return null;
  if (index < 0 || index >= this.size) return null;
  let cur = this.head;
  while (index > 0) {
    cur = cur.next;
    index--;
  }
  return cur;
};
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

// let keys =  ["addAtHead","deleteAtIndex","addAtHead","addAtHead","addAtHead","addAtHead","addAtHead","addAtTail","get","deleteAtIndex","deleteAtIndex"]
// let values = [[2],[1],[2],[7],[3],[2],[5],[5],[5],[6],[4]]

// var linkedList = new MyLinkedList();
// // 5->2->3->7->2->2->5
// linkedList.addAtHead(2);
// linkedList.deleteAtIndex(1);
// linkedList.addAtHead(2);
// linkedList.addAtHead(7)
// linkedList.addAtHead(3)
// linkedList.addAtHead(2)
// linkedList.addAtHead(5)
// linkedList.addAtTail(5)
// linkedList.get(5)
// linkedList.deleteAtIndex(6)
// linkedList.deleteAtIndex(4)
