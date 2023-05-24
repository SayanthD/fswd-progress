class StringHandling3 {
        public static void main(String args[]) {

                String s = "All String function Examples in Java";
                prntStr.prt("Original string", s);

                prntStr.prt("All in lowercase", s.toLowerCase());
                prntStr.prt("All in uppercase", s.toUpperCase());

                prntStr.prt("Length of the string", s.length());

                String sTemp = "     String trimming example    ";
                prntStr.prt("String before trimming", sTemp);
                prntStr.prt("String after trimming", sTemp.trim());

                prntStr.prt("Character at index 6 is", s.charAt(6));
                prntStr.prt("String between index 3 to 9", s.substring(3, 9));
                prntStr.prt("String after replacement", s.replace('a', 'Y'));
                prntStr.prt("String after replacement", s.replace("Java", "Loan"));

        }
}

class prntStr {

        static void prt(String param1, String param2) {
                System.out.println(param1 + " ==> " + param2);
        }

        static void prt(String param1, Integer param2) {
                System.out.println(param1 + " ==> " + param2);
        }

        static void prt(String param1, Character param2) {
                System.out.println(param1 + " ==> " + param2);
        }
}
