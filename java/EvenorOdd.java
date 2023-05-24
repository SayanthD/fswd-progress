import java.util.*;

class EvenorOdd
{
        public static void main(String args[]) 
        {
                Scanner obj = new Scanner(System.in);
                System.out.println("Enter the number: ");
                Integer num = obj.nextInt();
                obj.close();

                if ( num % 2 == 0) {
                        System.out.println("The given number " + num + " is an even number!.");
                }
                else {
                        System.out.println("The given number " + num + " is an odd number!.");
                }
        }
}