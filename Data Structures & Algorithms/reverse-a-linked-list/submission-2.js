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
     * @return {ListNode}
     */
    reverseList(head) {

        let currentNode = head;
        let prevNode = null
        let nextNode

        while(currentNode !== null) {
            nextNode = currentNode.next;
            currentNode.next = prevNode

            prevNode = currentNode
            currentNode = nextNode
        }

        return prevNode
    }
}
