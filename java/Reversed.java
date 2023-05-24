class Reversed
{
        public static void main(String args[])
        {
                int arr[] = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100};
                for(int i=0; i<10; i++) {
                        System.out.println(arr[i]);
                }

                System.out.println("\nReversed");
                for(int i=9; i>=0; i--) {
                        System.out.println(arr[i]);
                }
        }
}