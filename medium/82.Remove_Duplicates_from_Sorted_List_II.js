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
var deleteDuplicates = function (head) {
  const map = new Map();
  while (head) {
    if (!map.has(head.val)) {
      map.set(head.val, "only one");
    } else {
      map.set(head.val, "duplicated");
    }
    head = head.next;
  }
  let listnode = new ListNode();
  const pointer = listnode;
  for (const [node, status] of map) {
    if (status === "only one") {
      listnode.next = new ListNode(node);
      listnode = listnode.next;
    }
  }
  return pointer.next;
};
