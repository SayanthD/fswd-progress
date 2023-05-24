import java.util.*;

class Program2
{
        public static void main(String args[])
        {
                Scanner obj = new Scanner(System.in);

                System.out.println("Enter first number: ");
                int num1 = obj.nextInt();
                System.out.println("Enter second number: ");
                int num2 = obj.nextInt();
                obj.close();

                System.out.println("Addition: " + (num1 + num2));
                System.out.println("Subtraction: " + (num1 - num2));
                System.out.println("Product: " + (num1 * num2));
                System.out.println("Quotient: " + (num1 / num2));

        }
}