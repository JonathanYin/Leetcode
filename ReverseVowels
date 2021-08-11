import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class ReverseVowels {

	public String reverseVowels(String s) {
		char[] list = s.toCharArray();
		Set<Character> set = new HashSet<>(
				Arrays.asList(new Character[] 
						{ 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U' }));
		for (int i = 0, j = list.length - 1; i < j;) {
			if (!set.contains(list[i])) {
				i++;
				continue;
			}
			if (!set.contains(list[j])) {
				j--;
				continue;
			}
			char temp = list[i];
			list[i] = list[j];
			list[j] = temp;
			i++;
			j--;
		}
		return String.valueOf(list);
	}
}
