import java.util.*;

class GreatestAmongTwo
{
        public static void main(String args[]) 
        {
                Scanner obj = new Scanner(System.in);
                System.out.println("Enter the first number: ");
                Integer n1 = obj.nextInt();
                System.out.println("Enter the second number: ");
                Integer n2 = obj.nextInt();
                obj.close();

                if (n1 > n2) {
                        System.out.println(n1 + " is the greatest among the two.");
                }
                if (n1 < n2) {
                        System.out.println(n2 + " is the greatest among the two.");
                }

                if (n1 == n2) {
                        System.out.println("both are equal");
                }
        }
}