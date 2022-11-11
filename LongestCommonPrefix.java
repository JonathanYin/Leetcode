
public class LongestCommonPrefix {

	public String longestCommonPrefix(String[] strs) {
		String output = strs[0];
		StringBuilder s = new StringBuilder();

		for (int i = 1; i < strs.length; i++) {
			for (int j = 0; j < strs[i].length() && j < output.length(); j++) {
				if (strs[i].charAt(j) == output.charAt(j)) {
					// if a common character is found, add it
					s.append(strs[i].charAt(j));
				} else {
					// break upon reaching a different character
					break;
				}
			}
			if (s.toString().length() < output.length()) {
				output = s.toString();
			}
			s.setLength(0);
		}
		return output;
	}
}
