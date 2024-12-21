/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  /**
   * 思路：
   * 1.获取链表中的每个节点的val，整合在一个数组
   * 2.parseInt(,2)将二进制数转换为十进制
   */
  const arr = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }
  const result = parseInt(arr.join(""), 2);
  return result;
};
