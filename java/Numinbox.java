import java.util.*;

class Numinbox
{
        public static void main(String args[])
        {
                Integer i, j;
                Scanner scn = new Scanner(System.in);
                System.out.print("Enter prefered row count: ");
                Integer row = scn.nextInt();
                System.out.print("Enter prefered column count: ");
                Integer col = scn.nextInt();
                scn.close();
                String divider = "---------------------------------";

                System.out.println(divider);
                for (i = 1; i <= row; i++) {
                        System.out.print("|\t");
                        for (j = 1; j <= col; j++)
                        {
                                System.out.print(i + "\t");
                        }
                        System.out.println("|");
                }
                System.out.println(divider);
                
        }
}