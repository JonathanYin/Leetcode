/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	let ptr1 = list1;
	let ptr2 = list2;

	// initialize with dummy node
	let curr = new ListNode(0);

	// head points to dummy node
	let head = curr;

	// loop while there are elements to add from both
	while (ptr1 != null && ptr2 != null) {
		// if ptr1 has smaller element
		if (ptr1.val < ptr2.val) {
			// add element to list
			curr.next = ptr1;

			// move pointer
			ptr1 = ptr1.next;
		}
		// else if ptr2 has smaller vaelementlue
		else {
			// add element to list
			curr.next = ptr2;

			// move pointer
			ptr2 = ptr2.next;
		}
		// move pointer
		curr = curr.next;
	}

	// add remaining elements from list, if any
	if (ptr1) {
		curr.next = ptr1;
	}

	if (ptr2) {
		curr.next = ptr2;
	}

	// return node after head as start of the list
	return head.next;
};
