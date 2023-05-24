class ArrayIndexOutOfBoundsExceptionSample {
        public static void main(String args[]){
                Integer x[] = {10, 20, 30};

                try {
                        System.out.println(x[3]);
                }
                catch (ArrayIndexOutOfBoundsException err) {
                        System.out.println("Invalid index number " + err.getMessage());
                }

        }
}