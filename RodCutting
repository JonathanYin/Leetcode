
public class RodCutting {
	// O(n^2) time, O(n) space

	public static int getRodPrice(int[] arr, int length) {
		// returns best possible price for a rod, given its length and prices of different sizes
		int[] subSolutions = new int[arr.length + 1];
		// using tabulation
		
		for (int i = 1; i <= length; i++) {
			// build the table subSolutions[] bottom up
			int currMax = -1;
			for (int j = 0; j < i; j++) {
				currMax = Math.max(currMax, arr[j] + subSolutions[i - j - 1]);
			}
			subSolutions[i] = currMax;
		}
		return subSolutions[length];
	}
}
