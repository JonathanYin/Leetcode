
public class IntToRoman {

	public String intToRoman(int num) {
		String output = "";
		while (num >= 1000) {
			output += "M";
			num -= 1000;
		}
		while (num >= 900) {
			output += "CM";
			num -= 900;
		}
		while (num >= 500) {
			output += "D";
			num -= 500;
		}
		while (num >= 400) {
			output += "CD";
			num -= 400;
		}
		while (num >= 100) {
			output += "C";
			num -= 100;
		}
		while (num >= 90) {
			output += "XC";
			num -= 90;
		}
		while (num >= 50) {
			output += "L";
			num -= 50;
		}
		while (num >= 40) {
			output += "XL";
			num -= 40;
		}
		while (num >= 10) {
			output += "X";
			num -= 10;
		}
		while (num >= 9) {
			output += "IX";
			num -= 9;
		}
		while (num >= 5) {
			output += "V";
			num -= 5;
		}
		while (num >= 4) {
			output += "IV";
			num -= 4;
		}
		while (num >= 1) {
			output += "I";
			num -= 1;
		}
		return output;
	}
}
