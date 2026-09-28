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

        if(head === null) {
            return null
        }
        let current = head;
        let nodeMap = new Map()

        while(current !== null) {
            nodeMap.set(current, new Node(current.val))
            current = current.next;
        }

        current = head
        while(current !== null) {
            const copy = nodeMap.get(current);
            copy.next = current.next ? nodeMap.get(current.next) : null;
            copy.random = current.random ? nodeMap.get(current.random) : null;
            current = current.next;
        }
        return nodeMap.get(head)
    }
}
