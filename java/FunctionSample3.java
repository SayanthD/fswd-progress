import java.util.*;

class FunctionSample3 {
        public static void main(String args[]) {
                Pclass p1 = new Pclass();
                Scanner scn = new Scanner(System.in);

                System.out.print("Enter a number: ");
                Integer num = scn.nextInt();
                scn.nextLine();
                System.out.print("enter the message: ");
                String msg = scn.nextLine();
                scn.close();
                p1.printDetails(num, msg);
        }
}

class Pclass {
        void printDetails(Integer number1, String messg) {
                System.out.println("the number is: " + number1);
                System.out.println("the message is: " + messg);
        }
}