import java.util.*;

class SquareMatrix {
        public static void main(String args[]) {
                Integer arr[][] = new Integer[10][10];
                Scanner scn = new Scanner(System.in);

                System.out.print("Enter the square matrix type: ");
                Integer m = scn.nextInt();

                for (int i = 0; i < m; i++) {
                        for (int j = 0; j < m; j++) {
                                System.out.print("Enter element at position " + (i + 1) + "x" + (j + 1) + " : ");
                                arr[i][j] = scn.nextInt();
                        }
                }
                scn.close();

                System.out.println("Given matrix is: ");

                for (int i = 0; i < m; i++) {
                        for (int j = 0; j < m; j++) {
                                System.out.print(arr[i][j] + "\t");
                        }
                        System.out.println("");
                }
        }
}
