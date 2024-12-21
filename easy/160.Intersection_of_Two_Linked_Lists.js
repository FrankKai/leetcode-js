/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    /**
    * 有一点很重要：相交后的链表，引用是相同的
    * 除此之外，还需要熟悉遍历链表的方式，依次遍历两个链表即可
     */
    const set = new Set();
    let temp = headA;
    while(temp !== null){
        set.add(temp)
        temp = temp.next
    }
    temp = headB
    while(temp !== null){
        if(set.has(temp)){
            return temp
        }
        temp = temp.next
    }
    return null
};