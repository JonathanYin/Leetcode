
public class MaximumSubarray {

	public int maxSubArray(int[] nums) {
		int currentSum = nums[0], globalSum = nums[0];
		for (int i = 1; i < nums.length; i++) {
			currentSum = Math.max(nums[i], nums[i] + currentSum);
			if (currentSum > globalSum) {
				globalSum = currentSum;
			}
		}
		return globalSum;
	}
}
