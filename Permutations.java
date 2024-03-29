import java.util.List;
import java.util.ArrayList;

public class Permutations {

	public static void main(String[] args) {
		int[] nums = {1, 2, 3};
		List<List<Integer>> output = permute(nums);
		for (int i = 0; i < output.size(); i++){
			for (int j = 0; j < output.get(i).size(); j++){
				System.out.print(output.get(i).get(j));
				System.out.print(" ");
			}
			System.out.println();
		}
	}

	public static List<List<Integer>> permute(int[] nums) {
		List<List<Integer>> list = new ArrayList<>();
		// Arrays.sort(nums); // not necessary
		backtrack(list, new ArrayList<>(), nums);
		return list;
	}

	private static void backtrack(List<List<Integer>> list, List<Integer> tempList, int[] nums) {
		if (tempList.size() == nums.length) {
			list.add(new ArrayList<>(tempList));
		} else {
			for (int i = 0; i < nums.length; i++) {
				if (tempList.contains(nums[i]))
					continue; // element already exists, skip
				tempList.add(nums[i]);
				backtrack(list, tempList, nums);
				tempList.remove(tempList.size() - 1);
			}
		}
	}
}
