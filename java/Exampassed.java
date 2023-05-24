import java.util.*;

class Exampassed
{
        public static void main(String args[]) 
        {
                Scanner obj = new Scanner(System.in);
                System.out.println("Enter the marks you got in subject 1: ");
                Integer subj1 = obj.nextInt();
                System.out.println("Enter the marks you got in subject 2: ");
                Integer subj2 = obj.nextInt();
                System.out.println("Enter the marks you got in subject 3: ");
                Integer subj3 = obj.nextInt();
                obj.close();

                Integer total = (subj1 + subj2 + subj3);
                System.out.println("Your total marks is: " + total);
                if (total >= 150) {
                        System.out.println("You have passed the exams!.");
                }
                else {
                        System.out.println("You have failed the exams!.");
                }
        }
}