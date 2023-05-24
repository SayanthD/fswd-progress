import java.util.*;

class NuminboxCustom
{
        public static void main(String args[])
        {
                Integer mat[][] = new Integer[10][10], i, j;

                Scanner scn = new Scanner(System.in);
                System.out.print("Enter prefered row count: ");
                Integer row = scn.nextInt();
                System.out.print("Enter prefered column count: ");
                Integer col = scn.nextInt();
                String divider = "---------------------------------";

                for (i = 1; i <= row; i++) {
                        for (j = 1; j <= col; j++)
                        {
                                System.out.print("Position - " + " " + j + ":\t");
                                mat[i][j] = scn.nextInt();
                        }
                }
                scn.close();

                System.out.println(divider);
                for (i = 1; i <= row; i++) {
                        System.out.print("|\t");
                        for (j = 1; j <= col; j++)
                        {
                                System.out.print(mat[i][j] + "\t");
                        }
                        System.out.println("|");
                }
                System.out.println(divider);
                
        }
}