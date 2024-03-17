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
     * Complete the 'maxShared' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts WEIGHTED_INTEGER_GRAPH friends as parameter.
     */

    /*
     * For the weighted graph, <name>:
     *
     * 1. The number of nodes is <name>Nodes.
     * 2. The number of edges is <name>Edges.
     * 3. An edge exists between <name>From[i] and <name>To[i]. The weight of the edge is <name>Weight[i].
     *
     */

    public static int maxShared(int friendsNodes, List<Integer> friendsFrom, List<Integer> friendsTo, List<Integer> friendsWeight) {
        Map<Integer, List<int[]>> map = new HashMap<>();
        for (int i = 0; i < friendsFrom.size(); i++) {
            map.computeIfAbsent(friendsWeight.get(i), k -> new ArrayList<>())
               .add(new int[]{friendsFrom.get(i), friendsTo.get(i)});
        }

        Map<String, Integer> counter = new HashMap<>();
        for (List<int[]> edges : map.values()) {
            for (int[] edge : edges) {
                String key = edge[0] < edge[1] ? edge[0] + "_" + edge[1] : edge[1] + "_" + edge[0];
                counter.put(key, counter.getOrDefault(key, 0) + 1);
            }
        }

        int maxShared = counter.values().stream().max(Integer::compareTo).orElse(0);
        int maxProduct = 0;

        for (Map.Entry<String, Integer> entry : counter.entrySet()) {
            if (entry.getValue() == maxShared) {
                String[] nodes = entry.getKey().split("_");
                int product = Integer.parseInt(nodes[0]) * Integer.parseInt(nodes[1]);
                maxProduct = Math.max(maxProduct, product);
            }
        }

        return maxProduct;
    }
    

}

public class SharedInterest {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String[] friendsNodesEdges = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int friendsNodes = Integer.parseInt(friendsNodesEdges[0]);
        int friendsEdges = Integer.parseInt(friendsNodesEdges[1]);

        List<Integer> friendsFrom = new ArrayList<>();
        List<Integer> friendsTo = new ArrayList<>();
        List<Integer> friendsWeight = new ArrayList<>();

        IntStream.range(0, friendsEdges).forEach(i -> {
            try {
                String[] friendsFromToWeight = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

                friendsFrom.add(Integer.parseInt(friendsFromToWeight[0]));
                friendsTo.add(Integer.parseInt(friendsFromToWeight[1]));
                friendsWeight.add(Integer.parseInt(friendsFromToWeight[2]));
            } catch (IOException ex) {
                throw new RuntimeException(ex);
            }
        });

        int result = Result.maxShared(friendsNodes, friendsFrom, friendsTo, friendsWeight);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
