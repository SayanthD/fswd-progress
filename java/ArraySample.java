import java.util.*;

class ArraySample
{
        public static void main(String args[])
        {
                Integer arr[] = new Integer[10];
                Scanner scn = new Scanner(System.in);

                for (int i = 0; i < 10; i++){
                        System.out.print("Enter element " + (i+1) + " : ");
                        arr[i] = scn.nextInt();
                }
                scn.close();

                System.out.println("Given array is: ");

                for (int i = 0; i < 10; i++){
                        System.out.print(arr[i] + ", ");
                }
        }
}
               
                