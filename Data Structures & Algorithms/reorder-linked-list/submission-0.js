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
    let current = head
    let valueArray = []

    while (current !== null) {
        valueArray.push(current.val)
        current = current.next
    }

    let front = 0
    let back = valueArray.length - 1

    let newList = new ListNode(valueArray[front])
    let newCurrent = newList
    front++

    while (front <= back) {
        newCurrent.next = new ListNode(valueArray[back])
        back--
        newCurrent = newCurrent.next

        if (front <= back) {
            newCurrent.next = new ListNode(valueArray[front])
            front++
            newCurrent = newCurrent.next
        }
    }

    // newList now holds the reordered sequence as brand-new nodes —
    // copy those values onto the ORIGINAL nodes, since the problem
    // needs `head` itself modified in place, not a separate list returned
    current = head
    newCurrent = newList
    while (current !== null) {
        current.val = newCurrent.val
        current = current.next
        newCurrent = newCurrent.next
    }
}
    
}
