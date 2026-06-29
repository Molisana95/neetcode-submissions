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
     * @return {void}
     */
    reorderList(head) {
                if(head === null) {return null}
        let slow = head
        let fast = head
        let prev = null

        while(fast !== null && fast.next !== null) {
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        let mid = slow.next
        slow.next = null

        let current1 = head
        let current2 = mid
        let prev1 = null
        let prev2 = null
        
        while(current2 !== null) {
            let nextInv = current2.next
            current2.next = prev2
            prev2 = current2
            current2 = nextInv
        }

        current2 = prev2

        while(current2 !== null) {
            let next1 = current1.next
            let next2 = current2.next
            current1.next = current2
            current2.next = next1
            current1 = next1
            current2 = next2
        }
        



        console.log(head)
        console.log(mid)
        console.log(current1)
    }

    
}
