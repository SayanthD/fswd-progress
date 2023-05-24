import java.util.*;

class Sum 
{
        public static void main(String args[]) 
        {
                Scanner obj = new Scanner(System.in);
                System.out.println("Enter first number: ");
                int num1 = obj.nextInt();
                System.out.println("Enter second number: ");
                int num2 = obj.nextInt();
                obj.close();
                System.out.println("The sum is: " + (num1 + num2));
        }
}


