class ConstructorSample2
{
	public static void main(String args[])
	{
		Mycls2 m1=new Mycls2();
		new Mycls2("good luck");
		m1.myMethod();
	}
}
class Mycls2
{
	Mycls2()
	{
		System.out.println("constructor invoked");
	}
	Mycls2(String msg)
	{
		System.out.println("parameterized constructor invoked: " + msg);
	}
	void myMethod()
	{
		System.out.println("message from myMethod");
	}
	
}
