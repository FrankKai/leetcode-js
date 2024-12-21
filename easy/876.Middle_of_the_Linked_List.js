/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    /**
     * 统计链表长度
     * 遍历到中间结点时，返回中间节点
     */
     let length = 0;
     let temp = head;
     while(temp !== null){
         temp = temp.next;
         length++;
     }
     let mid = head;
     let i = 0;
     while(i < length){
         if(i === Math.floor(length / 2)){
             return mid;
         }
         mid = mid.next;
         i++;
     }
     return mid;
};