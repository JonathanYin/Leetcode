
public class WildcardMatching {

	public boolean isMatch(String s, String p) {
		boolean T[][] = new boolean[s.length() + 1][p.length() + 1];
		T[0][0] = true;

		for (int i = 1; i <= p.length(); i++) {
			T[0][i] = (T[0][i - 1] == true && p.charAt(i - 1) == '*');
		}

		for (int i = 1; i <= s.length(); i++) {
			for (int j = 1; j <= p.length(); j++) {
				char pc = p.charAt(j - 1);

				if (pc == '*') {
					T[i][j] = T[i][j - 1] || T[i - 1][j];
				} else if (pc == '?' || pc == s.charAt(i - 1)) {
					T[i][j] = T[i - 1][j - 1];
				}
			}
		}

		return T[s.length()][p.length()];
	}
}
