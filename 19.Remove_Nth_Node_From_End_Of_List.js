/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  /**
   * 思路：
   * 获取链表长度len
   * 在索引非len-n初构造listnode并链接
   * 谨记新建一个变量记录链表头节点
   */
  let len = getListNodeLength(head);
  let listnode = new ListNode();
  const initialListnode = listnode;
  let i = 0;
  while (i < len) {
    if (i !== len - n) {
      const nextListnode = new ListNode(head.val);
      listnode.next = nextListnode;
      listnode = nextListnode;
    }
    head = head.next;
    i++;
  }
  return initialListnode.next;
  function getListNodeLength(listnode) {
    let i = 0;
    while (listnode) {
      listnode = listnode.next;
      i++;
    }
    return i;
  }
};
