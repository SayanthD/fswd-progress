class FunctionSample
{
        public static void main(String args[]){
                Mycl mc = new Mycl();
                System.out.println("Printing inside main class");

                mc.myFunc();
        }
}

class Mycl
{
        void myFunc() {
                System.out.println("Invoked myFunc");
                this.mv();
        }
        void mv() {
                System.out.println("Invoked mv");
        } 
}