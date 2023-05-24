import java.util.*;

class Examgrade
{
        public static void main(String args[]) 
        {
                Scanner obj = new Scanner(System.in);
                System.out.println("Enter the mark you got in the subject: ");
                Integer marks = obj.nextInt();
                obj.close();

                if (marks >= 90) {
                        System.out.println("You got an A grade!.");
                }
                else if (marks >= 80) {
                        System.out.println("You got an B grade!.");
                }
                else if (marks >= 70) {
                        System.out.println("You got an C grade!.");
                }
                else if (marks >= 60) {
                        System.out.println("You got an D grade!.");
                }
                else if (marks >= 50) {
                        System.out.println("You got an P grade!.");
                }
                else {
                        System.out.println("You got an F grade!.");
                }
        }
}