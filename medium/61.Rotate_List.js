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
var rotateRight = function (head, k) {
  /**
   * 思路:
   * 节点存入数组
   * 数组做队列操作：尾部出队、头部入队
   * 生成链表
   * 注意:
   * 空链表、优化k（对链表长度取余）
   */
  if (!head) return null;
  const listnodes = [];
  let len = 0;
  while (head) {
    listnodes.push(head.val);
    head = head.next;
    len++;
  }
  let i = 0;
  let optimizationK = k % len;
  while (i < optimizationK) {
    listnodes.unshift(listnodes.pop());
    i++;
  }
  let listnode = new ListNode();
  const pointer = listnode;
  for (const node of listnodes) {
    const nextNode = new ListNode(node);
    listnode.next = nextNode;
    listnode = listnode.next;
  }
  return pointer.next;
};
