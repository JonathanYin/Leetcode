
public class SortColors {

	public void sortColors(int[] nums) {
		int rCount = 0;
		int wCount = 0;
		// int bCount = 0;
		for (int i = 0; i < nums.length; i++) {
			if (nums[i] == 0) {
				rCount++;
			} else if (nums[i] == 1) {
				wCount++;
			} else {
				// bCount++;
			}
		}

		for (int i = 0; i < nums.length; i++) {
			if (i < rCount) {
				nums[i] = 0;
			} else if (i < wCount + rCount) {
				nums[i] = 1;
			} else {
				nums[i] = 2;
			}
		}
	}
}
