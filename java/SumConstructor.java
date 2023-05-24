class Rsum{
        private double num1, num2;

        Rsum(double x, double y){
                num1 = x;
                num2 = y;
        }

        void sum(){
                System.out.print("Sum: " + (num1 + num2));
        }

}
class SumConstructor {
        public static void main(String args[]) {
                Rsum su = new Rsum(10, 22.5);
                su.sum();
        }
}