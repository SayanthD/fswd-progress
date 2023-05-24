import java.util.*;

class TotalExamMarks
{
        public static void main(String args[])
        {
                Scanner scn = new Scanner(System.in);
                System.out.print("Enter the no of subjects: ");
                Integer nos = scn.nextInt();
                Integer marks[] = new Integer[nos];
                for(int i=0; i<nos; i++) {
                        System.out.print("Enter marks for subject " + (i+1) + " : ");
                        marks[i] = scn.nextInt();
                }
                scn.close();

                Integer total = 0;
                for(int i=0; i<nos; i++){
                        total += marks[i];
                }

                System.out.println("Total marks: " + total);

                Float perc = (float)total/nos;
                System.out.println("Percentage: " + perc);
        }
}