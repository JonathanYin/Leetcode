import java.util.List;


class PerfectPairs {

    /*
     * Complete the 'getPerfectPairsCount' function below.
     *
     * The function is expected to return a LONG_INTEGER.
     * The function accepts INTEGER_ARRAY arr as parameter.
     */

    public static long getPerfectPairsCount(List<Integer> arr) {
    // Write your code here
        long count = 0;
        for (int i = 0; i < arr.size(); i++){
            int x = arr.get(i);
            for (int j = i + 1; j < arr.size(); j++){
                int y = arr.get(j);
                
                if (Math.min(Math.abs(x - y), Math.abs(x + y)) <= Math.min(Math.abs(x), Math.abs(y))
                && Math.max(Math.abs(x - y), Math.abs(x + y)) >= Math.max(Math.abs(x), Math.abs(y))) {
                    count ++;
                }
            }
        }
        return count;
    }

}

// public class Solution {
//     public static void main(String[] args) throws IOException {
//         BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
//         BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

//         int arrCount = Integer.parseInt(bufferedReader.readLine().trim());

//         List<Integer> arr = IntStream.range(0, arrCount).mapToObj(i -> {
//             try {
//                 return bufferedReader.readLine().replaceAll("\\s+$", "");
//             } catch (IOException ex) {
//                 throw new RuntimeException(ex);
//             }
//         })
//             .map(String::trim)
//             .map(Integer::parseInt)
//             .collect(toList());

//         long result = Result.getPerfectPairsCount(arr);

//         bufferedWriter.write(String.valueOf(result));
//         bufferedWriter.newLine();

//         bufferedReader.close();
//         bufferedWriter.close();
//     }
// }
