
public class ReverseInteger {

	public int reverse(int x) {
        if (x == 0 || x > Math.pow(2, 31) - 1 || x < Math.pow(-2, 31)){
            return 0;
        }
        
        String num = String.valueOf(x);
        String output = "";
        
        // if negative number
        if (num.charAt(0) == '-'){
            output += "-";
            
            for (int i = num.length() - 1; i > 0; i--){
                output += num.charAt(i);
            }
        }
        
        // if positive number
        else {
            for (int i = num.length() - 1; i >= 0; i--){
                output += num.charAt(i);
            }
        }
        
        // if the first digit is a zero, get rid of it
        if (output.charAt(0) == '0'){
            output = output.substring(1, output.length());
        }
        
        // if the reversed number is outside of the 32-bit int range
        long value = Long.parseLong(output);
        if (value > Math.pow(2, 31) - 1 || value < Math.pow(-2, 31)){
            return 0;
        }
        
        int y = Integer.parseInt(output);
        return y;
    }
	
}
