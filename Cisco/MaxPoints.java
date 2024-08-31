package Cisco;

import java.util.*;

public class MaxPoints {
    public static void funcDrop(int[] xCoordinate, int[] yCoordinate) {
        int n = xCoordinate.length;
        Map<Integer, Set<Integer>> pointsMap = new HashMap<>();
        
        // Create a map of x-coordinates to sets of y-coordinates
        for (int i = 0; i < n; i++) {
            pointsMap.computeIfAbsent(xCoordinate[i], k -> new HashSet<>()).add(yCoordinate[i]);
        }
        
        int maxDropPoints = 0;
        
        // Check horizontal paths
        for (Set<Integer> ySet : pointsMap.values()) {
            maxDropPoints = Math.max(maxDropPoints, ySet.size());
        }
        
        // Check vertical paths
        Map<Integer, Set<Integer>> yToXMap = new HashMap<>();
        for (int i = 0; i < n; i++) {
            yToXMap.computeIfAbsent(yCoordinate[i], k -> new HashSet<>()).add(xCoordinate[i]);
        }
        for (Set<Integer> xSet : yToXMap.values()) {
            maxDropPoints = Math.max(maxDropPoints, xSet.size());
        }
        
        // A valid path must have more than one drop point
        System.out.println(maxDropPoints > 1 ? maxDropPoints : 0);
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int xCoordinate_size = in.nextInt();
        int xCoordinate[] = new int[xCoordinate_size];
        for(int idx = 0; idx < xCoordinate_size; idx++) {
            xCoordinate[idx] = in.nextInt();
        }
        int yCoordinate_size = in.nextInt();
        int yCoordinate[] = new int[yCoordinate_size];
        for(int idx = 0; idx < yCoordinate_size; idx++) {
            yCoordinate[idx] = in.nextInt();
        }
        
        funcDrop(xCoordinate, yCoordinate);
    }
}