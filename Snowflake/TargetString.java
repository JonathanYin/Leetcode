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

/*
 * Given an array of strings, each of the same length and a target string, 
 * construct the target string using characters from the strings in the 
 * given array such that the indices of the characters in the order in 
 * which they are used form a strictly increasing sequence. Here, the 
 * index of a character is the position at which it appears in the string. 
 * Note that it is acceptable to use multiple charactesr from the same string.

 * Determine the number of ways to construct the target string. 
 * One construction is different from another if either the sequence of indices 
 * they use are different, or the sequences are the same but there exists a 
 * character at some index such that it is chosen from a different string in these constructions. 
 * Since the answer can be very large, return the value modulo (10^9 + 7)

 * Consider an example: n = 3 strings, each of length 3. 
 * Let the array of strings be words =["adc", "aec", "efg"] and the target string = "ac". There are then 4 ways to reach the target:

 * 1. select 1st char of "adc" and 3rd char of "adc"
 * 2. select 1st char of "adc" and 3rd char of "aec"
 * 3. select 1st char of "aec" and 3rd char of "adc"
 * 4. select 1st char of "aec" and 3rd char of "aec"
 */
class Result {

    /*
     * Complete the 'numWays' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts following parameters:
     * 1. STRING_ARRAY words
     * 2. STRING target
     */
    private static final int MOD = 1_000_000_007;

    public static int numWays(List<String> words, String target) {
        int targetLength = target.length();
        int wordLength = words.get(0).length();

        Map<Character, int[]> charIndexMap = new HashMap<>();
        for (int i = 0; i < wordLength; i++) {
            for (String word : words) {
                char ch = word.charAt(i);
                if (!charIndexMap.containsKey(ch)) {
                    charIndexMap.put(ch, new int[wordLength]);
                }
                charIndexMap.get(ch)[i]++;
            }
        }

        int[][] dp = new int[targetLength + 1][wordLength + 1];
        // dp[0][0] = 1;
        for (int j = 0; j <= wordLength; j++) {
            dp[0][j] = 1;
        }

        for (int i = 1; i <= targetLength; i++) {
            for (int j = 1; j <= wordLength; j++) {
                char targetChar = target.charAt(i - 1);
                if (charIndexMap.containsKey(targetChar)) {
                    dp[i][j] = (dp[i][j]
                            + (int) (((long) dp[i - 1][j - 1] * charIndexMap.get(targetChar)[j - 1]) % MOD)) % MOD;
                }
                dp[i][j] = (dp[i][j] + dp[i][j - 1]) % MOD;
            }
        }

        return dp[targetLength][wordLength];
    }

}

public class TargetString {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int wordsCount = Integer.parseInt(bufferedReader.readLine().trim());

        List<String> words = IntStream.range(0, wordsCount).mapToObj(i -> {
            try {
                return bufferedReader.readLine();
            } catch (IOException ex) {
                throw new RuntimeException(ex);
            }
        })
                .collect(toList());

        String target = bufferedReader.readLine();

        int result = Result.numWays(words, target);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
