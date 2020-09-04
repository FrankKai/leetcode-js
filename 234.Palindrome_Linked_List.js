/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const nodes = [];
  while (head) {
    nodes.push(head.val);
    head = head.next;
  }
  const isPalindromeListNode = nodes.join("") === nodes.reverse().join("");
  return isPalindromeListNode;
};
