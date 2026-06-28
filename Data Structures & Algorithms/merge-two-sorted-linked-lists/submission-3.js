/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode(0)
        let prev = dummy
        let current1 = list1
        let current2 = list2

        if(current1 === null && current2 !== null) {
            prev.next = current2
        }
        if(current2 === null && current1 !== null) {
            prev.next = current1
        }

        while(current1 !== null && current2 !== null) {
            if(current1.val <= current2.val) {
                prev.next = current1
                current1 = current1.next
            }
            else {
                prev.next = current2
                current2 = current2.next
            }
            prev = prev.next
            if(current1 !== null) {prev.next = current1}
            else if(current2 !== null) {prev.next = current2}
        }
        return dummy.next
}
}