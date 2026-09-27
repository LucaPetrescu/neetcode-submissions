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
         let current = head;
    let nodes = [];
    let newList = new ListNode(0);

    while (current !== null) {
        nodes.push(current);
        current = current.next;
    }

    let removeIdx = nodes.length - n;
    let tail = newList;

    for (let i = 0; i < nodes.length; i++) {
        if (i === removeIdx) continue;          // skip the nth from end
        tail.next = new ListNode(nodes[i].val); // copy value into new node
        tail = tail.next;
    }

    return newList.next;     
    }
}
