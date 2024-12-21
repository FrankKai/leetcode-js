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
  let listnode = null;
  while (head) {
    const nextListnode = new ListNode(head.val);
    nextListnode.next = listnode;
    listnode = nextListnode;
    head = head.next;
  }
  return listnode;
};
