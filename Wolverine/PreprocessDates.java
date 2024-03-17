package Wolverine;
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;


class Result {

    /*
     * Complete the 'preprocessDate' function below.
     *
     * The function is expected to return a STRING_ARRAY.
     * The function accepts STRING_ARRAY dates as parameter.
     */

    public static List<String> preprocessDate(List<String> dates) {
        List<String> processedDates = new ArrayList<>();
        
        // map months to their corresponding numbers
        Map<String, String> monthMap = new HashMap<String, String>() {{
            put("Jan", "01");
            put("Feb", "02");
            put("Mar", "03");
            put("Apr", "04");
            put("May", "05");
            put("Jun", "06");
            put("Jul", "07");
            put("Aug", "08");
            put("Sep", "09");
            put("Oct", "10");
            put("Nov", "11");
            put("Dec", "12");
        }};
        
        // loop through each date
        for (String date: dates) {
            // split string into components
            String[] dateParts = date.split(" ");
            
            // extract day and remove all except digits
            String day = dateParts[0].replaceAll("\\D", "");
            if (day.length() == 1) {
                day = "0" + day;
            }
            // map month to number representation
            String month = monthMap.get(dateParts[1]);
            
            String year = dateParts[2];
            
            processedDates.add(year + "-" + month + "-" + day);
        }
        return processedDates;
    }

}
public class PreprocessDates {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int datesCount = Integer.parseInt(bufferedReader.readLine().trim());

        List<String> dates = IntStream.range(0, datesCount).mapToObj(i -> {
            try {
                return bufferedReader.readLine();
            } catch (IOException ex) {
                throw new RuntimeException(ex);
            }
        })
            .collect(toList());

        List<String> result = Result.preprocessDate(dates);

        bufferedWriter.write(
            result.stream()
                .collect(joining("\n"))
            + "\n"
        );

        bufferedReader.close();
        bufferedWriter.close();
    }
}
