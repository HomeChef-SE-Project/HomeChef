import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class NewClass {

    // Complete the hackerrankInString function below.
    static String hackerrankInString(String s) {
        String b="hackerrank";
        int j=0,p=0;
       
for(int i=0;i<s.length();i++)
{
    if(s.charAt(i)==b.charAt(j) && j<b.length())
      
      {j++;
      p=1;
      }
      else
      p=0;
      if(j==b.length()-1)
        break;


}
if(p==1)
   return "YES";
   else
   return "NO";



    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int q = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int qItr = 0; qItr < q; qItr++) {
            String s = scanner.nextLine();

            String result = hackerrankInString(s);

            bufferedWriter.write(result);
            bufferedWriter.newLine();
        }

        bufferedWriter.close();

        scanner.close();
    }
}
