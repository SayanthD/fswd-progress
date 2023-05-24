import java.util.*;

class Program1
{
        public static void main(String args[])
        {
                Scanner obj = new Scanner(System.in);
                System.out.println("Enter a number: ");
                int num = obj.nextInt();
                System.out.println("Enter a word: ");
                String word = obj.nextLine();
                obj.close();

                System.out.println("You entered " + num + " as a number.");
                System.out.println("You entered "+ word + " as a word.");
        }
}