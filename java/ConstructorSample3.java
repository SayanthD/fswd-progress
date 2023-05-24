class ConstructorSample3 {
	public static void main(String args[]) {
		Mycls3 m1 = new Mycls3();
		Mycls3 m2 = new Mycls3("good luck");
		Mycls3 m3 = new Mycls3("some message", 99);
		m1.myMethod();
	}
}

class Mycls3 {
	Mycls3() {
		System.out.println("constructor invoked");
	}

	Mycls3(String msg) {
		System.out.println("parameterized constructor invoked: " + msg);
	}

	Mycls3(String msg, Integer num) {
		System.out.println("two parameters: " + msg + " & " + num);
	}

	void myMethod() {
		System.out.println("message from myMethod");
	}
}
