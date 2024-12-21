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
var swapPairs = function (head) {
  /**
   * 思路：
   * 逢偶数新建链表，奇数索引收集短链表
   * 遍历短链表并交换
   * 重新链接链表
   * 注意奇数个用例：[1],[1,2,3]
   */

  let i = 0;
  const shortListnodes = [];
  let shortListnode = null;
  while (head) {
    if (i % 2 === 0) {
      shortListnode = new ListNode(head.val);
    }
    if (i % 2 === 1) {
      shortListnode.next = new ListNode(head.val);
      shortListnodes.push(shortListnode);
      shortListnode = null;
    }
    head = head.next;
    i++;
  }
  let finalListnode = new ListNode();
  const initialListnode = finalListnode;
  if (shortListnodes.length > 0) {
    const switchNodes = shortListnodes.map(switchListnode);
    for (const node of switchNodes) {
      finalListnode.next = node;
      finalListnode = node.next;
    }
  }
  if (shortListnode) finalListnode.next = shortListnode;
  return initialListnode.next;
  /**
   * 交换两个节点
   */
  // 方法1:新节点
  // function switchListnode(listnode) {
  //     const headListnode = new ListNode(listnode.val);
  //     const nextListnode = new ListNode(listnode.next.val);
  //     nextListnode.next = headListnode;
  //     return nextListnode;
  // }
  // 方法2:原始节点
  function switchListnode(listnode) {
    listnode.next.next = new ListNode(listnode.val);
    listnode = listnode.next;
    return listnode;
  }
};
