/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	let curr = head;
	let prev = null;

	while (curr) {
		// store pointer for next node
		let next = curr.next;

		// reverse pointer
		curr.next = prev;

		// move prev pointer to next node
		prev = curr;

		// move curr pointer to stored next node
		curr = next;
	}

	return prev;
};
