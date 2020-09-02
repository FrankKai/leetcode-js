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
var addTwoNumbers = function (l1, l2) {
  const l1Num = getNumFromListNode(l1);
  const l2Num = getNumFromListNode(l2);
  const result = getListNodeFromNum(l1Num + l2Num);
  return result;

  function getNumFromListNode(listnode) {
    const nums = [];
    while (listnode) {
      nums.unshift(listnode.val);
      listnode = listnode.next;
    }
    const num = BigInt(nums.join(""));
    return num;
  }
  function getListNodeFromNum(num) {
    let l = null;
    for (const digit of `${num}`) {
      const frontNode = new ListNode(digit);
      if (!l) {
        l = frontNode;
      } else {
        frontNode.next = l;
        l = frontNode;
      }
    }
    return l;
  }
};
