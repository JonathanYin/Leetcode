package Snowflake;

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {

    /*
     * Complete the 'getPerfectPairsCount' function below.
     *
     * The function is expected to return a LONG_INTEGER.
     * The function accepts INTEGER_ARRAY arr as parameter.
     */

    public static long getPerfectPairsCount(List<Integer> arr) {
        // Write your code here
        int n = arr.size();
        int count = 0;

        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int x = arr.get(i);
                int y = arr.get(j);

                int xMinusY = Math.abs(x - y);
                int xPlusY = Math.abs(x + y);
                int absX = Math.abs(x);
                int absY = Math.abs(y);

                int minDiffSum = Math.min(xMinusY, xPlusY);
                int minXY = Math.min(absX, absY);

                int maxDiffSum = Math.max(xMinusY, xPlusY);
                int maxXY = Math.max(absX, absY);

                if (minDiffSum <= minXY && maxDiffSum >= maxXY) {
                    count++;
                }
            }
        }

        return count;

    }

}

public class PerfectPairs {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int arrCount = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> arr = IntStream.range(0, arrCount).mapToObj(i -> {
            try {
                return bufferedReader.readLine().replaceAll("\\s+$", "");
            } catch (IOException ex) {
                throw new RuntimeException(ex);
            }
        })
                .map(String::trim)
                .map(Integer::parseInt)
                .collect(toList());

        long result = Result.getPerfectPairsCount(arr);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
