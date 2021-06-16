import java.util.HashSet;
import java.util.Set;

public class LongestSubstringWithoutRepeatingCharacters {

	public static int lengthOfLongestSubstring(String s) {
        if (s == null){
            return 0;
        }
        else {
            int max = 0;
            for (int i = 0; i < s.length(); i++){

                Set<Character> visited = new HashSet<Character>();
                
                int j = i;
                for (; j < s.length(); j++){
                    char s1 = s.charAt(j);
                    if (visited.contains(s1)){
                        break;
                    }
                    
                    else {
                        visited.add(s1);
                    }
                }
                if ((j - i) > max){
                    max = j - i;
                }
            }
            return max;
        }
    }
	
	public static void main(String[] args) {
		int x = lengthOfLongestSubstring("abcabcbasdfdsfab");
		System.out.println(x);
	}
}
