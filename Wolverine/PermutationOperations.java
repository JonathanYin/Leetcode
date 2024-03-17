package Wolverine;

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
     * Complete the 'countOperations' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts INTEGER_ARRAY p as parameter.
     */

    private static final int MOD = 1000000007;
    public static int countOperations(List<Integer> p) {
        // Write your code here
        int result = 1;
        
        boolean[] visited = new boolean[p.size() + 1];
        
        // loop through each node
        for (int i = 1; i <= p.size(); i++) {
            if (!visited[i]) {
                int cycleSize = 0;
                int j = i;
                
                while (!visited[j]) {
                    visited[j] = true;
                    j = p.get(j - 1);
                    cycleSize++;
                }
                result = lcm(result, cycleSize);
            }
        }
        
        return result;
    }
    
    private static int gcd(int a, int b) {
        while (b > 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    private static int lcm (int a, int b) {
        return multiplyMod(a / gcd(a, b), b);
    }
    
    private static int multiplyMod(int a, int b) {
        return (int) ((long) a * b % MOD);
    }

}
public class PermutationOperations {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int pCount = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> p = IntStream.range(0, pCount).mapToObj(i -> {
            try {
                return bufferedReader.readLine().replaceAll("\\s+$", "");
            } catch (IOException ex) {
                throw new RuntimeException(ex);
            }
        })
            .map(String::trim)
            .map(Integer::parseInt)
            .collect(toList());

        int result = Result.countOperations(p);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
