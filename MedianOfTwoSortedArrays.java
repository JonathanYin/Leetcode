public class MedianOfTwoSortedArrays {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int len1 = nums1.length;
        int len2 = nums2.length;
        
        int[] output = new int[len1 + len2];
        int index = 0;
        int i = 0;
        int j = 0;
        
        while (i < len1 || j < len2){
            // while we are not done iterating through at least one of the arrays
            if (i >= len1){
                output[index] = nums2[j];
                j++;
            }
            else if (j >= len2){
                output[index] = nums1[i];
                i++;
            }
            else {
                /* if neither of the arrays are done iterating, pick the element  
                that is smaller
                */
                if (nums1[i] < nums2[j]){
                    output[index] = nums1[i];
                    i++;
                }
                else {
                    output[index] = nums2[j];
                    j++;
                }
            }
            index++;
        }
        
        // after filling the new array, find median
        
        int middle = (len1 + len2)/2;
        double x = output[middle];
        
        if ((len1 + len2) % 2 == 0){
            x = (output[middle] + output[middle - 1]) / 2.0;
        }

        return x;
    }
}
