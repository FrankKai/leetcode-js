/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  /**
   * 解法1：辅助节点
   * 思路：
   * 1.不断取出头节点
   * 2.不断置尾头结点
   */
  let list = null;
  while (head) {
    const cur = new ListNode(head.val);
    cur.next = list;
    list = cur;
    head = head.next;
  }
  return list;
};
