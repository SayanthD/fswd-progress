import java.util.*;

class Radiusofcircle
{
        public static void main(String args[]) 
        {
                Scanner obj = new Scanner(System.in);
                System.out.println("Enter the radius of the circle: ");
                Float radius = obj.nextFloat();
                obj.close();

                System.out.println("Area: " + (3.14 * radius * radius));
                System.out.println("Perimeter: " + (2 * 3.14 * radius));
        }
}