class ConstructorSample
{
	public static void main(String args[])
	{
		Mycls m1=new Mycls();
		m1.myMethod();
	}
}
class Mycls
{
	Mycls()
	{
		System.out.println("constructor invoked");
	}
	void myMethod()
	{
		System.out.println("message from myMethod");
	}
	
}
