import java.util.Arrays;

public class ThirdMax {

	public int thirdMax(int[] nums) {
		Arrays.sort(nums);
		int n = 0;
		int k = 0;
		int count = 3;
		if (nums.length > 2) {

			k = nums[nums.length - 1];
			for (int i = nums.length - 2; i >= 0; i--) {

				if (nums[i] < k) {

					k = nums[i];
					count--;
				}
				if (count == 1) {

					n = k;
					break;

				} else if (count != 1) {
					n = nums[nums.length - 1];
				}
			}

		} else if (nums.length <= 2) {
			n = nums[nums.length - 1];
		}
		return n;
	}
}
