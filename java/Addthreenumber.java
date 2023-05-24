import java.util.*;

class Addthreenumber
{
        public static void main(String args[]) 
        {
                Scanner obj = new Scanner(System.in);
                System.out.println("Enter first number: ");
                int num1 = obj.nextInt();
                System.out.println("Enter second number: ");
                int num2 = obj.nextInt();
                System.out.println("Enter third number: ");
                int num3 = obj.nextInt();
                obj.close();

                int sum = (num1 + num2 + num3);
                System.out.println("The sum of given three numbers is: " + sum);
                System.out.println("The average is: " + (sum / 3));
        }
}


