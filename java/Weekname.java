import java.util.*;

class Weekname
{
        public static void main(String args[]) 
        {
                Scanner obj = new Scanner(System.in);
                System.out.println("Enter a number to find the week name: ");
                Integer num = obj.nextInt();
                obj.close();

                if (num == 1) {
                        System.out.println("Sunday");
                }
                else if (num == 2) {
                        System.out.println("Monday");
                }
                else if (num == 3) {
                        System.out.println("Tuesday");
                }
                else if (num == 4) {
                        System.out.println("Wednesday");
                }
                else if (num == 5) {
                        System.out.println("Thursday");
                }
                else if (num == 6) {
                        System.out.println("Friday");
                }
                else if (num == 7) {
                        System.out.println("Saturday");
                }
                else {
                        System.out.println("Invalid number");
                }
        }
}