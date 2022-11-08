import java.util.Collections;
import java.util.PriorityQueue;

public class KthLargestElement {
    public static void main(String[] args){
        int[] arr = {2, 4, 3, 1, 8, 6};
        int k = 3;
        System.out.println(kthLargest(arr, k));
    }
    public static int kthLargest(int[] arr, int k){
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        
        for (int i = 0; i < arr.length; i++){
            pq.add(arr[i]);
        }
        for (int i = 0; i < k - 1; i++){
            pq.poll();
        }
        return pq.peek();
    }
}