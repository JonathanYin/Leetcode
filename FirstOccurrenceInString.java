
public class FirstOccurrenceInString {

	public int strStr(String haystack, String needle) {
		if (needle.length() == 0) {
			return 0;
		}

		for (int i = 0; i < haystack.length(); i++) {
			if (i + needle.length() > haystack.length())
				break;

			for (int j = 0; j < needle.length(); j++) {
				if (needle.charAt(j) != haystack.charAt(i + j)) {
					break;
				}
				if (j == needle.length() - 1) {
					return i;
				}

			}
		}
		return -1;
	}
}
