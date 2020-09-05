/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  let listnode = new ListNode();
  const pointer = listnode;
  while (head) {
    if (head.val !== val) {
      listnode.next = new ListNode(head.val);
      listnode = listnode.next;
    }
    head = head.next;
  }
  return pointer.next;
};
