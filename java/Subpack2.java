import subpack.*;
import java.util.*;

class Subpack2 {
        public static void main(String args[])
        {
                Scanner scn = new Scanner(System.in);
                System.out.print("Enter your name: ");
                String name = scn.nextLine();
                System.out.print("Enter your age: ");
                Integer age = scn.nextInt();

                mypack2 m2 = new mypack2();
                m2.printName(name);
                m2.printAge(age);

                scn.close();
                
        }
}
