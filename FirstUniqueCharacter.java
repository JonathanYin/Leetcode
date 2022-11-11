import java.util.Map;
import java.util.HashMap;

public class FirstUniqueCharacter {

	public int firstUniqChar(String s) {
		Map<Character, Integer> map = new HashMap<>();
		for (int i = 0; i < s.length(); i++) {
			char c = s.charAt(i);
			if (map.containsKey(c)) {
				map.put(c, map.get(c) + 1);
			} else
				map.put(c, 1);
		}
		for (int i = 0; i < s.length(); i++) {
			char c = s.charAt(i);
			if (map.get(c) == 1)
				return i;
		}
		return -1;
	}
}
