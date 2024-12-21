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

/**
 * 解题核心：
 * 1.在大多数情况下，我们将使用头结点(第一个结点)来表示整个列表。
 * 2.对于对象类型，使用l1=l1.next，指的是来l1变量指向l1的next节点，可以理解为指针的更新
 * 3.构造一个空的ListNode，不断通过helperL = helperL.next更新结点
 * 4.构造一个healperHead记录helperL的head节点，在最后通过helperL.next得到merge后的节点
 * 4.通过while (l1 !== null || l2 !== null)实现迭代
 * 5.不断通过l1=l1.next，l2=l2.next来更新l1和l2为新的next结点
 */

var mergeTwoLists = function(l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  var helperL = new ListNode(-999);
  var helperLHead = helperL;
  // 迭代
  while (l1 !== null && l2 !== null) {
    // 构造一个WhoHasSmallerValue变量，增强代码可读性
    var WhoHasSmallerValue = "";
    var minVal = Math.min(l1.val, l2.val);
    if (l1.val === l2.val) {
      WhoHasSmallerValue = "listNode1 equals ListNode2";
    } else if (l1.val === minVal) {
      WhoHasSmallerValue = "listNode1";
    } else if (l2.val === minVal) {
      WhoHasSmallerValue = "listNode2";
    }

    // 更新helperL.next为l1和l2中val较小的一个ListNode，或者相等条件下随机一个
    if (WhoHasSmallerValue === "listNode1") {
      helperL.next = l1;
      l1 = l1.next;
    } else if (WhoHasSmallerValue === "listNode2") {
      helperL.next = l2;
      l2 = l2.next;
    } else if (WhoHasSmallerValue === "listNode1 equals ListNode2") {
      // 当l1和l2的val相等时，更新helper.next为l1和l2都行
      // 或`helperL.next = l2;l2 = l2.next;`
      helperL.next = l1;
      l1 = l1.next;
    }
    // 更新helperL
    helperL = helperL.next;
  }
  // 链表尾部
  helperL.next = l1 === null ? l2 : l1;
  return helperLHead.next;
};
