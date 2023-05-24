public class ArithmeticExceptionSample {
        public static void main(String args[]){
                Integer x = 100, y = 0, z;

                try {
                        z = x / y;
                        System.out.println(z);
                }
                catch (ArithmeticException err) {
                        System.out.println("Division by zero not possible " + err.getMessage());
                }

        }       
}