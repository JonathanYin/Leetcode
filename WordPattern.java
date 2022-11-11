import java.util.HashMap;
import java.util.Map;

public class WordPattern {

	public boolean wordPattern(String pattern, String s) {
		String[] words = s.split(" ");
		if (words.length != pattern.length())
			return false;
		Map<String, Integer> index = new HashMap<String, Integer>();
		for (Integer i = 0; i < words.length; ++i)
			if (index.put(String.valueOf(pattern.charAt(i)), i) != index.put(words[i], i))
				return false;
		return true;
	}
}
