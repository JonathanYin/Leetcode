/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // use two pointers to iterate through both lists
    let ptr1 = l1;
    let ptr2 = l2;

    // use a carry variable to keep track of the carry
    let carry = 0;

    // use a dummy node to keep track of the head of the output list
    let output = new ListNode();
    let ptr3 = output;

    // while there are still numbers to add
    while (ptr1 || ptr2) {
        // initialize the sum to be the carry from before
        let sum = carry;
        // if there is a number in the first list, add it to the sum and move the pointer
        if (ptr1) {
            sum += ptr1.val;
            ptr1 = ptr1.next;
        }
        // if there is a number in the second list, add it to the sum and move the pointer
        if (ptr2) {
            sum += ptr2.val;
            ptr2 = ptr2.next;
        }
        // if the sum is greater than 10, set the carry to be 1 and subtract 10 from the sum
        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        }
        // else, set the carry to be 0
        else {
            carry = 0;
        }
        // move the pointer for the output list and set the value to be the sum
        ptr3.next = new ListNode(sum);
        ptr3 = ptr3.next;
    }
    
    // if there is still a carry after iterating, add it to the end of the output list
    if (carry) {
        ptr3.next = new ListNode(carry);
    }

    // return the head of the output list
    return output.next;
};