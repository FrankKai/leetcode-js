/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  const nodes = [];
  while (l1) {
    nodes.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    nodes.push(l2.val);
    l2 = l2.next;
  }
  nodes.sort((x, y) => x - y);
  let listnode = new ListNode();
  const pointer = listnode;
  for (const node of nodes) {
    listnode.next = new ListNode(node);
    listnode = listnode.next;
  }
  return pointer.next;
};
