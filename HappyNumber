import java.util.HashSet;

public class HappyNumber {

	public boolean isHappy(int n) {
		HashSet<Integer> set = new HashSet<>();
		while (true) {
			int squareSum = 0;
			while (n != 0) {
				squareSum += (n % 10) * (n % 10);
				n /= 10;
			}
			n = squareSum;
			if (n == 1) {
				return true;
			}
			if (set.contains(n)) {
				return false;
			}
			set.add(n);

		}
	}
}
