import java.util.*;

class Largestamongthree {
        public static void main(String args[]) {
                Scanner obj = new Scanner(System.in);
                System.out.println("Enter the first number: ");
                Integer n1 = obj.nextInt();
                System.out.println("Enter the second number: ");
                Integer n2 = obj.nextInt();
                System.out.println("Enter the third number: ");
                Integer n3 = obj.nextInt();
                obj.close();

                if (n1 > n2) {
                        if (n1 > n3) {
                                System.out.println(n1 + " is the largest among the three given numbers!.");
                        } else {
                                System.out.println(n3 + " is the largest among the three given numbers!.");
                        }
                } else if (n2 > n3) {
                        System.out.println(n2 + " is the largest among the three given numbers!.");
                } else {
                        System.out.println(n3 + " is the largest among the three given numbers!.");
                }
        }
}