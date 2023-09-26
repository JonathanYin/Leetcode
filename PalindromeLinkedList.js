/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // tortoise and hare method
    let fast = head;
    let slow = head;

    // iterate through the list, until fast reaches the end and slow reaches the middle
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    // reverse the second half
    let prev = null;
    let curr = slow;

    while (curr !== null) {
        // save the next node
        let next = curr.next;
        // set the next node to the previous node (reversing direction)
        curr.next = prev;
        // set the previous node to the current node
        prev = curr;
        // move to next node
        curr = next;
    }

    // compare the first half and the second half
    let p1 = head;
    let p2 = prev;

    while (p2 !== null) {
        // if the values are not equal, return false
        if (p1.val !== p2.val) {
            return false;
        }
        // advance pointers
        p1 = p1.next;
        p2 = p2.next;
    }

    return true;
};