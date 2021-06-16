
class ListNode {
	int val;
	ListNode next;

	ListNode() {
	}

	ListNode(int val) {
		this.val = val;
	}

	ListNode(int val, ListNode next) {
		this.val = val;
		this.next = next;
	}

}

public class AddTwoNumbers {

	public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {

		// listnode for output
		ListNode list = new ListNode(0);
		ListNode output = list;
		// digit to carry over
		int carryOver = 0;

		while (l1 != null || l2 != null) {

			int sum = carryOver;
			if (l1 != null) {
				sum += l1.val;
				l1 = l1.next;
			}

			if (l2 != null) {
				sum += l2.val;
				l2 = l2.next;
			}

			if (sum > 9) {
				carryOver = 1;
				sum = sum - 10;
			} else {
				carryOver = 0;
			}

			ListNode l = new ListNode(sum);
			list.next = l;
			list = list.next;

		}

		if (carryOver > 0) {
			ListNode l = new ListNode(carryOver);
			list.next = l;
		}

		return output.next;
	}

	public static void main(String[] args) {
		ListNode l3 = new ListNode(3);
		ListNode l2 = new ListNode(4, l3);
		ListNode l1 = new ListNode(2, l2);

		ListNode l6 = new ListNode(4);
		ListNode l5 = new ListNode(6, l6);
		ListNode l4 = new ListNode(5, l5);

		ListNode output = addTwoNumbers(l1, l4);
		while (output != null) {
			System.out.println(output.val);
			output = output.next;
		}
	}
}
