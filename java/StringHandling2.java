class StringHandling2 {
        public static void main(String args[]) {
                String s = "All String function Examples in Java";
                System.out.println("Original string: " + s);

                System.out.println("All in lowercase: "+ s.toLowerCase());
                System.out.println("All in uppercase: " + s.toUpperCase());

                System.out.println("Length of the string: " + s.length());

                String sTemp = "     String trimming example    ";
                System.out.println("String before trimming: " + sTemp);
                System.out.println("String after trimming: " + sTemp.trim());

                System.out.println("Character at index 6 is: " + s.charAt(6));
                System.out.println("String between index 3 to 9: " + s.substring(3,9));
                System.out.println("String after replacement: " + s.replace('a', 'Y'));
                System.out.println("String after replacement: " + s.replace("Java", "Loan"));

        }
}

