package Cisco;

import java.util.*;
import java.lang.*;
import java.io.*;

/*
 * numJars, represents the number of jars.
Value of the array represents the number of chocolates in each jar.
 */
public class MaxJars
{
	public static void  maxSum(int[] inputArr)
	{
		// Write your code here
		
		int n = inputArr.length;

		if (n == 0) {
			System.out.println(0);
			return;
		}
		if (n == 1) {
			System.out.println(inputArr[0]);
			return;
		}

		int include = inputArr[0];
		int exclude = 0;

		for (int i = 1; i < n; i++) {
			int newExclude = Math.max(include, exclude);
			include = exclude + inputArr[i];
			exclude = newExclude;
		}

		System.out.println(Math.max(include, exclude));
	}

	public static void main(String[] args)
	{
		Scanner in = new Scanner(System.in);
		//input for inputArr
		int inputArr_size = in.nextInt();
		int inputArr[] = new int[inputArr_size];
		for(int idx = 0; idx < inputArr_size; idx++)
		{
			inputArr[idx] = in.nextInt();
		}
		
		
		maxSum(inputArr);
	}
}