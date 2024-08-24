/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = (lists) => {
	let arr = [];

	// flatten lists into array
	function addNode(node) {
		if (node != null) {
			arr.push(node);
			addNode(node.next);
			node.next = null;
		}
	}
	lists.forEach(addNode);

	// sort array by value and link nodes
	if (arr.length > 1) {
		arr.sort((a, b) => a.val - b.val);
		arr.reduce((a, b) => (a.next = b));
	}

	return arr.length != 0 ? arr[0] : null;
};
