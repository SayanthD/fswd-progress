import java.util.*;

class Eligibletovote
{
        public static void main(String args[]) 
        {
                Scanner obj = new Scanner(System.in);
                System.out.println("Enter your age: ");
                Integer age = obj.nextInt();
                obj.close();

                if ( age >= 18) {
                        System.out.println("You are eligible to vote!.");
                }
                else {
                        System.out.println("You are ineligible to vote!.");
                        System.out.println("You still have " + (18 - age) + " year(s) to become eligible.");
                }
        }
}