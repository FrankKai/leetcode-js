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
  /**
   * 解法1: set
   * 思路：
   * 用hashSet收集元素
   * 遍历hashSet生成去重链表
   */
  const uniqSet = new Set();
  while (head) {
    uniqSet.add(head.val);
    head = head.next;
  }
  let listnode = new ListNode();
  const pointer = listnode;
  for (const node of uniqSet) {
    listnode.next = new ListNode(node);
    listnode = listnode.next;
  }
  return pointer.next;
  /**
   * 解法2: set优化
   */
  let listnode = new ListNode();
  const pointer = listnode;
  const uniqSet = new Set();
  while (head) {
    if (!uniqSet.has(head.val)) {
      listnode.next = new ListNode(head.val);
      listnode = listnode.next;
      uniqSet.add(head.val);
    }
    head = head.next;
  }
  return pointer.next;
};
