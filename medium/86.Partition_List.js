/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const nodes = [];
  let i = 0;
  while (head) {
    if (head.val < x) {
      nodes.splice(i, 0, head.val);
      i++;
    } else {
      nodes.push(head.val);
    }
    head = head.next;
  }
  let listnode = new ListNode();
  const pointer = listnode;
  for (const node of nodes) {
    const nextListnode = new ListNode(node);
    listnode.next = nextListnode;
    listnode = listnode.next;
  }
  return pointer.next;
};
