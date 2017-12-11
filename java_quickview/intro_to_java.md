
# Intro to Java
I didn't use too much Java since i thought it was complex with a lot of syntaxes compared with java. But i am still making this tutorial since no language is perfect and there are for sure a lot of good things in Java

## chapter one: brief introduction
### Set up environment for Java - Java SDK
### First program in java
```java
public class HelloJava{
	public static void main(String[] args){
		System.out.println("Hello Java");
	}
}
```
In command line, input `javac HelloJava.java` to compile this file and then run this program by inputting `java HelloJava`

## chapter two: Eclipse and IntelliJ
## chapter three: Java structure
### package
A java package is a group of similar types of classes, interfaces and sub-packages. Package in java can be categorized in two form, built-in package and user-defined package. There are many built-in packages such as java, lang, awt, javax, swing, net, io etc.
## chapter four: control statements
### while loop
The *java while loop* is used to iterate a part of the program serveral times. If the number of iteration is not fixed, it is recommanded to use while loop.
**Syntax**
```java
while(condition){
	// code to be executed several times
}
```
### do while loop
The *Java do-while loop* is used to iterate a part of the program serveral times. If the number of iteration is not fixed and you must have to execute the loop at least once, it is recommanded to use do-while loop.
The *Java do-while* loop is executed at least once because condition is checked after loop body.
**Syntax**
```java
do{
	// code
}while(condition);
```
### for loop
The *Java for loop* is used to iterate a part of the program serveral times. If the number of iteration is fixed, it is recommanded to use for loop.
There are three types of loop in Java
- Simple For Loop
- For-each or Enhanced For loop
- Labeled For loop

#### for-each loop
The for-each loop is used to traverse array or collection in java. It is easier to use than simple for loop because we don't need to increment value and use subscript notation. It works on elements basis not index. It returns element one by one in the defined variable;

**Syntax**
```java
for (Type var: array){
	// code to be executed
}
```

#### Java Labeled For Loop
**Syntax**
```java
labelname:
for(initialization; condition; incr/decr){
	// code
}
```
**Example**
```java
public class LabeledForExample {  
public static void main(String[] args) {  
    aa:  
        for(int i=1;i<=3;i++){  
            bb:  
                for(int j=1;j<=3;j++){  
                    if(i==2&&j==2){  
                        break aa;  
                    }  
                    System.out.println(i+" "+j);  
                }  
        }  
}  
}  
```
output:
```
1 1
1 2
1 3
2 1
```
#### Java infinitive for loop
If you use two semicolons ;; in the for loop, it will be infinitive for loop.
**Syntax**
```
for(;;){
	// code to be executed
}
```
