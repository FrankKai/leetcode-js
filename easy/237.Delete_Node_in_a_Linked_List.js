/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  /**
   * 思路：
   * 1.被删除节点val获取下一个节点的val
   * 2.被删除节点next指向下一个节点的next
   * 3.清空残留的下一个节点
   *
   * 假设删除5
   * 4 -> 5 -> 1 -> 9
   *
   *           1----↓
   * 4 -> 1 ------> 9
   *           1----> null
   * 4 -> 1 ------> 9
   */
  let next = node.next;
  node.val = node.next.val;
  node.next = node.next.next;
  next = null;
};
