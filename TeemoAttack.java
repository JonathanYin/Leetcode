
public class TeemoAttack {

	public int findPoisonedDuration(int[] timeSeries, int duration) {
		int res = 0;
		if (timeSeries == null || timeSeries.length == 0 || duration <= 0)
			return res;
		for (int i = 1; i < timeSeries.length; i++) {
			res += Math.min(duration, timeSeries[i] - timeSeries[i - 1]);
		}
		return res + duration;
	}
}
