class StringHandling {
        public static void main(String args[]) {
                String s = "All String function Examples in Java";
                prts("Original string", s);

                prts("All in lowercase", s.toLowerCase());
                prts("All in uppercase", s.toUpperCase());

                prtn("Length of the string", s.length());

                String sTemp = "     String trimming example    ";
                prts("String before trimming", sTemp);
                prts("String after trimming", sTemp.trim());

                prtc("Character at index 6 is", s.charAt(6));
                prts("String between index 3 to 9", s.substring(3,9));
                prts("String after replacement", s.replace('a', 'Y'));
                prts("String after replacement", s.replace("Java", "Loan"));

        }

        static void prts(String x, String y){
                System.out.println(x + " ==> " + y);
                System.out.println("");
        }

        static void prtn(String x, Integer y){
                System.out.println(x + " ==> " + y);
                System.out.println("");
        }

        static void prtc(String x, Character y){
                System.out.println(x + " ==> " + y);
                System.out.println("");
        }
}

