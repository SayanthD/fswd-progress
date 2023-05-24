import java.util.*;

class Sumofmany
{
        public static void main(String args[])
        {
                Scanner scn = new Scanner(System.in);
                Integer ar[] = new Integer[10];
                Integer idx = new Integer(0);

                System.out.print("Enter the values one by one to find sum, type 'ok' when finished: ");
                do{
                        try {
                                ar[idx] = scn.nextInt();
                                idx++;
                        }
                        catch (InputMismatchException e1) {
                                break;
                        }
                }while(idx != -1);

                scn.close();

                Integer sum = new Integer(0);
                System.out.println("Sum of all numbers is: ");
                for(Integer j = 0; j < idx; j++){
                        sum += ar[j];
                }

                System.out.print(sum);
        }
}