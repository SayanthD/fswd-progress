class Animal {
        void eat() {
                System.out.println("Eating...");
        }
}

class Dog extends Animal {
        void bark() {
                System.out.println("Barking...");
        }
}

class Cat extends Animal {
        void meow() {
                System.out.println("Meowing...");
        }
}

class ClassInheritance2 {
        public static void main(String args[]) {
                Cat kitty = new Cat();

                kitty.meow();
                kitty.eat();
                // kitty.bark();
        }
}
