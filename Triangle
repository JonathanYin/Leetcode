import java.util.List;

public class Triangle {

	public int minimumTotal(List<List<Integer>> triangle) {
		int size = triangle.size();
		int[] arr = new int[size + 1];

		for (int i = size - 1; i >= 0; i--) {
			List<Integer> tmp = triangle.get(i);

			for (int j = 0; j < tmp.size(); j++) {
				arr[j] = Math.min(arr[j], arr[j + 1]) + tmp.get(j);
			}
		}
		return arr[0];
	}
}
