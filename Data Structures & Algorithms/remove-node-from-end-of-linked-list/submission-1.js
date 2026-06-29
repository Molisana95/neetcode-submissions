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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if (head === null) {
            return null
        }
        let dummy = new ListNode(0)
        let first = dummy
        let second = dummy
        dummy.next = head

        for(let i = 0; i < n + 1; i++) {
            first = first.next
        }

        console.log(first)

        while(first !== null) {
            second = second.next
            first = first.next
        }
        console.log(second)
        second.next = second.next.next 

        return dummy.next
    }
}
