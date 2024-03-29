
public class LongestPalindromicSubstring {

	public String longestPalindrome(String s) {

		int maxLength = 1, startIndex = 0;

		for (int i = 0; i < s.length(); i++) {
			for (int j = i; j < s.length(); j++) {
				int flag = 1;

				// Check palindrome
				for (int k = 0; k < (j - i + 1) / 2; k++)
					if (s.charAt(i + k) != s.charAt(j - k))
						flag = 0;

				// Palindrome
				if (flag != 0 && (j - i + 1) > maxLength) {
					startIndex = i;
					maxLength = j - i + 1;
				}
			}
		}
		String output = "";
		for (int i = startIndex; i <= startIndex + maxLength - 1; i++) {
			output += s.charAt(i);
		}
		return output;
	}
}
