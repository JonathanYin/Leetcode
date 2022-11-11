
public class Fibonacci {

	public static int tabulation(int n) {
		int[] t = new int[n + 1];
		// store fibonacci terms
		
		t[1] = 1;
		for (int i = 2; i <= n; i++) {
			t[i] = t[i - 1] + t[i - 2];
		}
		return t[n];
	}
	
	public static int memoization(int n, int[] memo) {
		// subproblems stored in memo
		if (n == 0 || n == 1) {
			return n;
		}
		int x = memo[n];
		if (x == 0) {
			x = memoization(n - 2, memo) + memoization(n - 1, memo);
			memo[n] = x;
			// stores value in memo
		}
		return x;
	}
	
	public static void main(String[] args) {
		int x = 10;
		System.out.println(tabulation(x));
		int[] arr = new int[x + 1];
		System.out.println(memoization(x, arr));
	}
}
