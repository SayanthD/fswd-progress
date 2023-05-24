import java.util.*;

class NumberFormatExceptionSample {
        public static void main(String args[]) {
                Scanner scn = new Scanner(System.in);

                System.out.print("Enter a number: ");
                try {
                        Integer num = scn.nextInt();
                        System.out.print("You entered: " + num);
                } catch (NumberFormatException err) {
                        System.out.println("Unable to format " + err.getMessage());
                } catch (InputMismatchException err) {
                        System.out.println("Check input format " + err.getMessage());
                } finally {
                        scn.close();
                }

        }
}