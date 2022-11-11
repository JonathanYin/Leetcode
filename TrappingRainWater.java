
public class TrappingRainWater {

	public int trap(int[] height) {
        if (height == null || height.length == 0){
            return 0;
        }
        
        // pointers
        int left = 0; int right = height.length - 1;
        // maximums
        int maxLeft = 0; int maxRight = 0;
        
        int total = 0;
        
        while (left < right){
            
            if (height[left] < height[right]){
                if (height[left] >= maxLeft){
                    maxLeft = height[left];
                }
                else {
                    total += maxLeft - height[left];
                }
                left ++;
            }
            
            else {
                if (height[right] >= maxRight){
                    maxRight = height[right];
                }
                else {
                    total += maxRight - height[right];
                }
                right --;
            }
        }
        
        return total;
    }
}
