import java.util.*;

class Astriktriangle {
        public static void main(String args[]) {
                Scanner obj = new Scanner(System.in);
                System.out.println("Enter row count: ");
                Integer rows = obj.nextInt();
                obj.close();

                for (Integer i = 0; i <= rows; i++)
                {
                        for (Integer j = 0 ; j < i ; j++) {
                                System.out.print("* ");
                        }
                        System.out.println("");
                }
        }
}