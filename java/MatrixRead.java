import java.util.*;

public class MatrixRead {
        public static void main(String args[]) {
                Integer a[][], b[][] = new Integer[10][10];
                // Integer b[][] = new Integer[10][10];
                Integer n = new Integer(2);

                System.out.println("Mat 1");
                 //readMat(a[][], n);
                
        }

        static void readMat(Integer mat[][], Integer n) {
                Scanner scn = new Scanner(System.in);
                for (Integer i = 0; i < n; i++) {
                        for (Integer j = 0; j < n; j ++){
                                System.out.print(i + "x" + j);
                                mat[i][j] = scn.nextInt();
                        }
                }
                scn.close();
        }
}
