
public class MergeSortedArray {

	public void merge(int[] nums1, int m, int[] nums2, int n) {
		if (m == 0) { // First check if 'm' is 0 or not
			for (int i = 0; i < n; i++) // If Yes, then run a loop that traverse 'n' times
				nums1[i] = nums2[i]; // And add all the elements of 'nums2' to 'nums1'
		}
		// Else, first initialize some variables
		int i = m - 1; // A var to point the (m-1)th index of the 'nums1' array
		int j = n - 1; // A var to point the last index of the 'nums2' array
		int k = m + j; // A var to point the last index of the 'nums1' array

		while (i >= 0 && j >= 0) { // Now, run a loop till both 'i' and 'j' is not 0
			if (nums1[i] > nums2[j]) { // Check, if the 'i'th element of 'nums1' is greater than the 'j'th element of
										// 'nums2' or not
				nums1[k] = nums1[i--]; // If Yes, then update the 'k'th element of 'nums1' with the 'i'th element of
										// 'nums1'
			} else { // Else
				nums1[k] = nums2[j--]; // Update the 'k'th element of 'nums1' with the 'j'th element of 'nums2'
			}
			k--; // Decrease 'k' to move to the previous index
		}

		while (j >= 0) // If 'j' is still greater than 0; then it means that not all the elements of
						// 'nums2' are not added to 'nums1'
			nums1[k--] = nums2[j--]; // So, keep adding them to the 'k'th element of 'nums1'
	}
}
