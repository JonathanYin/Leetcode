
public class BestTimeToBuyAndSellStock {

	public int maxProfit(int[] prices) {
		if (prices == null || prices.length == 0) {
			return 0;
		}
		int currMin = prices[0];
		int profit = 0;
		for (int i = 0; i < prices.length; i++) {
			if (prices[i] > currMin) {
				profit = Math.max(profit, prices[i] - currMin);
			} else {
				currMin = prices[i];
			}
		}
		return profit;
	}
}
