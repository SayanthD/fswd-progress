import java.util.*;

class Vowelornot {
        public static void main(String args[]) {
                Scanner obj = new Scanner(System.in);
                System.out.println("Enter a alphabet: ");
                String alv = obj.nextLine();
                obj.close();

                switch (alv.toLowerCase()) {
                        case "a":
                                System.out.println("This is an vowel");
                                break;
                        case "e":
                                System.out.println("This is an vowel");
                                break;
                        case "i":
                                System.out.println("This is an vowel");
                                break;
                        case "o":
                                System.out.println("This is an vowel");
                                break;
                        case "u":
                                System.out.println("This is an vowel");
                                break;
                        default:
                                System.out.println("This is not an vowel, its a consonant");
                }
        }
}