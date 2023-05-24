import java.util.*;

class simpleInterest
{
        public static void main(String args[]) 
        {
                Scanner obj = new Scanner(System.in);
                System.out.println("Enter the deposit amount: ");
                Float depositAmnt = obj.nextFloat();
                System.out.println("Enter the no of years: ");
                Float Year = obj.nextFloat();
                System.out.println("Enter the rate of interest: ");
                Float ROI = obj.nextFloat();
                obj.close();

                Float simpleInterest = (depositAmnt * Year * ROI) / 100;
                System.out.println("Simple Interest: " + simpleInterest);
        }
}
