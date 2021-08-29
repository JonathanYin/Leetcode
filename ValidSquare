
public class ValidSquare {

	public boolean validSquare(int[] p1, int[] p2, int[] p3, int[] p4) {
		long a = distSquare(p1, p2);
		long b = distSquare(p1, p3);
		long c = distSquare(p1, p4);
		// first check if it's rectangle
		if ((a != distSquare(p3, p4)) || (b != distSquare(p2, p4)) || (c != distSquare(p2, p3)))
			return false;
		// check if it's square
		if (a == 0 || b == 0 || c == 0)
			return false; // has overlapping points
		if (a == b || b == c || a == c)
			return true; // is square
		return false;
	}

	public long distSquare(int[] p1, int[] p2) {
		return (p2[0] - p1[0]) * (p2[0] - p1[0]) + (p2[1] - p1[1]) * (p2[1] - p1[1]);
	}
}
