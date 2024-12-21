/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function (head, k) {
  const vals = [];
  while (head) {
    vals.push(head.val);
    head = head.next;
  }
  return vals[vals.length - k];
};
