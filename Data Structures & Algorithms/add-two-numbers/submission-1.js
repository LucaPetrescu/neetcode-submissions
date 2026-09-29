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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {

        let l1Current = l1
        let l2Current = l2

        let resultList = new ListNode()
        let tail = resultList
        let carry = 0

        while(l1Current !== null || l2Current !== null || carry > 0) {
            const sum = (l1Current ? l1Current.val : 0) + (l2Current ? l2Current.val : 0) + carry
            carry = Math.floor(sum / 10)
            tail.next = new ListNode(sum % 10)
            tail = tail.next
            
            l1Current = l1Current ? l1Current.next : null
            l2Current = l2Current ? l2Current.next : null
        }
        
        return resultList.next
    }
}
