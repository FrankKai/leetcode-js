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
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let nodes = [];
  while (head) {
    nodes.push(head.val);
    head = head.next;
  }
  nodes = nodes.splice(nodes.length - k);
  let listnode = new ListNode();
  const pointer = listnode;
  for (const node of nodes) {
    listnode.next = new ListNode(node);
    listnode = listnode.next;
  }
  return pointer.next;
};
