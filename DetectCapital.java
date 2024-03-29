public class DetectCapital {
    public boolean detectCapitalUse(String word) {
        boolean prevCapital = false;
        boolean firstCapital = false;
        for (int i = 0; i < word.length(); i++){
            if (i == 0){
                // if first character
                if (Character.isUpperCase(word.charAt(i))){
                    firstCapital = true;
                }
            }
            else if (i == 1){
                // if second character
                if (firstCapital == false){
                    if (Character.isUpperCase(word.charAt(i))){
                        return false;
                    }
                }
                if (Character.isUpperCase(word.charAt(i))){
                    prevCapital = true;
                }
                else {
                    prevCapital = false;
                }
            }
            else {
                // if not first or second character
                if (firstCapital == true){
                    if (!Character.isUpperCase(word.charAt(i)) && prevCapital){
                        return false;
                    }
                    else if (Character.isUpperCase(word.charAt(i)) && !prevCapital){
                        return false;
                    }
                }
                else {
                    if (Character.isUpperCase(word.charAt(i))){
                        return false;
                    }
                }
            }
        }
        return true;
    }
    
}
