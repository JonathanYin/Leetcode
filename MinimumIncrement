import java.util.Arrays;

public class MinimumIncrement {
	public int minIncrementForUnique(int[] nums) {
		Arrays.sort(nums);
		int res = 0;
		int need = 0;
		for (int i : nums) {
			res += Math.max(need - i, 0);
			need = Math.max(need, i) + 1;
		}
		return res;
	}
}
