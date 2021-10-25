
public class Knapsack {

	/*
	 * Given the weights and profits of n items, put these items in a knapsack with
	 * capacity C, maximizing the profit obtained
	 */

	public int solveKnapsack(int[] profits, int[] weights, int capacity) {
		return knapsackRecursive(profits, weights, capacity, 0);
	}

	public static int knapsackRecursive(int[] profits, int[] weights, int capacity, int currentIndex) {
		// base checks
		if (capacity <= 0 || currentIndex < 0 || currentIndex >= profits.length)
			return 0;
		// recursive call after choosing the element at the currentIndex
		// if the weight of the element at currentIndex exceeds the capacity, we shouldn’t process this
		int profit1 = 0;
		if( weights[currentIndex] <= capacity )
			profit1 = profits[currentIndex] + 
			knapsackRecursive(profits, weights, capacity - weights[currentIndex], currentIndex + 1);
		// recursive call after excluding the element at the currentIndex
		int profit2 = knapsackRecursive(profits, weights, capacity, currentIndex + 1);
		return Math.max(profit1, profit2);
	}
	
	public static void tabulation(int c, int wt[], int val[], int n) {
		// capacity, weights, values, # of items
        int i, w;
        int M[][] = new int[n + 1][c + 1];
        // create a table with weights for the horizontal axis, and values for the vertical
     	// arrange the weights in ascending order

        // Build table M[][]
        for (i = 0; i <= n; i++) {
            for (w = 0; w <= c; w++) {
                if (i == 0 || w == 0)
                    M[i][w] = 0;
                else if (wt[i - 1] <= w)
                    M[i][w] = Math.max(val[i - 1] + M[i - 1][w - wt[i - 1]], M[i - 1][w]);
                else
                    M[i][w] = M[i - 1][w];
            }
        }
        System.out.println("Maximum Value:\t" + M[n][c]);

        System.out.println("Selected Packs: ");

        while (n != 0) {
            if (M[n][c] != M[n - 1][c]) {
                System.out.println("Pack " + n + " with weight = " + wt[n - 1] + 
                		" and value = " + val[n - 1]);

                c = c - wt[n - 1];
            }
            n--;
        }
	}
	
	public static void main(String[] args) {
		tabulation(8, new int[]{3, 6, 4, 5}, new int[]{2, 3, 6, 4}, 4);
	}
}
