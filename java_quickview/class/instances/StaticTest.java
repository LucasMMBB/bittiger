public class StaticTest{
	static double PI = 3.1415;
	static int id;

	public static void method1{
		// do something	
	} 

	public void method2(){
		System.out.println(StaticTest.PI);
		System.out.println(StaticTest.id);
		StaticTest.method1();
	}
}
