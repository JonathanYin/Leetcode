import java.util.ArrayList;
import java.util.List;

public class PascalsTriangle {

	public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> triangle = new ArrayList<List<Integer>>();
        List<Integer> l1 = new ArrayList<Integer>();
        List<Integer> l2 = new ArrayList<Integer>();
        
        l1.add(1);
        l2.add(1);
        l2.add(1);
        
        triangle.add(l1);
        if (numRows == 1){
            return triangle;
        }
        
        triangle.add(l2);
        if (numRows == 2){
            return triangle;
        }
        for (int i = 2; i < numRows; i++){
            List<Integer> l3 = new ArrayList<Integer>();
            l3.add(1);
            for (int j = 0; j < triangle.get(triangle.size() - 1).size() - 1; j++){
                int sum = triangle.get(triangle.size() - 1).get(j) + 
                    triangle.get(triangle.size() - 1).get(j + 1);
                l3.add(sum);
            }
            l3.add(1);
            triangle.add(l3);
        }
        
        return triangle;
    }
}
