import java.util.*;

class Employeedetail
{
        public static void main(String args[]) 
        {
                Scanner obj = new Scanner(System.in);
                System.out.println("Enter the employee's name: ");
                String eName = obj.nextLine();
                System.out.println("Enter the employee's designation: ");
                String eDesignation = obj.nextLine();
                System.out.println("Enter basic salary: ");
                Float basicSalary = obj.nextFloat();
                obj.close();

                Double da = basicSalary * 0.12;
                Double hra = basicSalary * 0.07;
                Double pf = basicSalary * 0.05;
                Double netSalary = (basicSalary + da + hra) - pf;

                System.out.println("\t-----------------");
                System.out.println("\t Employee Details");
                System.out.println("\t-----------------");
                System.out.println("Fullname:\t" + eName);
                System.out.println("Designation:\t" + eDesignation);
                System.out.println("DA:\t\t" + da);
                System.out.println("HRA:\t\t" + hra);
                System.out.println("PF:\t\t" + pf);
                System.out.println("Net Salary:\t" + netSalary);
        }
}


