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
var removeDuplicateNodes = function (head) {
  const nodeSet = new Set();
  while (head) {
    nodeSet.add(head.val);
    head = head.next;
  }
  let listnode = new ListNode();
  const pointer = listnode;
  for (const node of [...nodeSet]) {
    listnode.next = new ListNode(node);
    listnode = listnode.next;
  }
  return pointer.next;
};
