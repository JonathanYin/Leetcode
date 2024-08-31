package Cisco;
import java.util.*;
import java.lang.*;
import java.io.*;

/*
 * grid, represents the letters in the grid of size N*M.
word, represents the words to be searched of size K.
 */
public class Grid
{
	public static void  funcPuzzle(char[][] grid, String[] words)
	{
		// Write your code here
		int rows = grid.length;
		int cols = grid[0].length;

		List<String> results = new ArrayList<>();

		for (String word : words) {
			boolean found = false;

			for (int r = 0; r < rows && !found; r++) {
				String rowString = new String(grid[r]);
				if (rowString.contains(word) || new StringBuilder(rowString).reverse().toString().contains(word)) {
					found = true;
				}
			}

			if (!found) {
				for (int c = 0; c < cols && !found; c++) {
					StringBuilder colString = new StringBuilder();
					for (int r = 0; r < rows; r++) {
						colString.append(grid[r][c]);
					}
					String colStringStr = colString.toString();
					if (colStringStr.contains(word) || colString.reverse().toString().contains(word)) {
						found = true;
					}
				}
			}

			results.add(found ? "Yes" : "No");
		}

		System.out.println(String.join(" ", results));
	}

	public static void main(String[] args)
	{
		Scanner in = new Scanner(System.in);
		// input for grid
		int grid_row = in.nextInt();
		int grid_col = in.nextInt();
		char grid[][] = new char[grid_row][grid_col];
		for(int idx = 0; idx < grid_row; idx++)
		{
			for(int jdx = 0; jdx < grid_col; jdx++)
			{
				grid[idx][jdx] = in.next().charAt(0);
			}
		}
		//input for word
		int word_size = in.nextInt();
		String word[] = new String[word_size];
		for(int idx = 0; idx < word_size; idx++)
		{
			word[idx] = in.next();
		}
		
		
		funcPuzzle(grid, word);
	}
}