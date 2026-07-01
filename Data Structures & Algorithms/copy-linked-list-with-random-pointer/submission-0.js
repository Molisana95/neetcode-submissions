// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
         let storage = new Map()
      
         let current = head
        
         if(!head) {
            return null
         }

         while(current !== null) {
            let copyNode = new Node(current.val)
            storage.set(current, copyNode)
            current = current.next
         }
         current = head
         while(current !== null) {
            let currentCopiedNode = storage.get(current)
            let randomLink = storage.get(current.random)
            let nextLink = storage.get(current.next)
            currentCopiedNode.random = randomLink ? randomLink : null
            currentCopiedNode.next = nextLink? nextLink : null
            current = current.next

         }
         
         let newHead = storage.get(head)
         return newHead
    }
}
