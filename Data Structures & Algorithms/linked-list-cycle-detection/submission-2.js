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
     * @return {boolean}
     */
    hasCycle(head) {
        if(!head) {return false}
        let current = head
        let next = head.next
        let prev = null
        let visited = new Set()
        while(current !== null) {
            if(!visited.has(current)) {
                visited.add(current)
                current = current.next
            }
            else {
                return true
            }
            
        }
        return false
    }
}
