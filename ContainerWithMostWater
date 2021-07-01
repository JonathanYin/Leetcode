
public class ContainerWithMostWater {

	public int maxArea(int[] height) {
		int left = 0;
		int right = height.length - 1;
		int area = left * right;

		while (left < right) {
			area = Math.max(area, (right - left) * Math.min(height[left], height[right]));
			if (height[left] < height[right]) {
				left++;
			} else {
				right--;
			}
		}
		return area;
	}
}
