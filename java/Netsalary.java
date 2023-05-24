import java.util.*;

class Netsalary
{
        public static void main(String args[]) 
        {
                Scanner obj = new Scanner(System.in);
                System.out.println("Enter basic salary: ");
                Float basicSalary = obj.nextFloat();
                obj.close();

                Double da, hra, pf, netSalary;
                if (basicSalary >= 25000) {
                        da = basicSalary * 0.15;
                        hra =  basicSalary * 0.13;
                        pf = basicSalary * 0.12;
                }
                else if (basicSalary >= 20000) {
                        da = basicSalary * 0.12;
                        hra =  basicSalary * 0.10;
                        pf = basicSalary * 0.11;
                }
                else {
                        da = basicSalary * 0.08;
                        hra =  basicSalary * 0.07;
                        pf = basicSalary * 0.09;
                }
                netSalary = (basicSalary + da + hra) - pf;

                System.out.println("DA:\t\t" + da);
                System.out.println("HRA:\t\t" + hra);
                System.out.println("PF:\t\t" + pf);
                System.out.println("Net salary:\t" + netSalary);
        }
}