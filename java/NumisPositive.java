import java.util.*;

class NumisPositive
{
        public static void main(String args[]) 
        {
                Scanner obj = new Scanner(System.in);
                System.out.println("Enter the number: ");
                Integer num = obj.nextInt();
                obj.close();

                if(num > 0) {
                        System.out.println("The given number is positive!.");
                }

                if(num < 0) {
                        System.out.println("The given number is negative!.");
                }

                if(num == 0) {
                        System.out.println("The given number is zero!.");
                }
        }
}