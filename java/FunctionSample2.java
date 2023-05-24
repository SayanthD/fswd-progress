class FunctionSample2 {
        public static void main(String args[]) {
                Myclass mcl = new Myclass();
                System.out.println("Printing inside main class");

                mcl.abc();
        }
}

class Myclass
{
        int a;
        void abc() {
                a = 10;
                System.out.println(a);
                this.xyz();
        }
        void xyz() {
                a = 30;
                System.out.println(a);
         }
}