/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 * 
 * {position: 0, next: {
 *      position: 1, next: {
 *          position 2, next: null, 
 *      head: false
 *  }, head: false
 * }, head: true} 
 *
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let current = head
        let prev = null
        
        if(!current) {
            return null
        }

        while(current) {
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }

        return prev
    }
}