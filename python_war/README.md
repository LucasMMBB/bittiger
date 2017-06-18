# Python tutorial

## Python basics
### Data structure
##### List
`a = []`
`b = [1,2, "maoxu"]// diff types`
##### Tuple(immutable)
`a = ()`
`a = (1,2,"maoxu")// diff types`
##### Dictionary
`a = {}`
`a = { 'firstname': 'maoxu', 'lastname':'liu'}`
##### Set 
What if you want to contain only unique elements? python provides set as a basic data structure for this purpose
`a = set([1,1,2,3])`
`a|b`
`a&b`


### Practice
requirements:
-  take two user input
-  if they are int type, add them up and print

```
def add(a, b):
	if type(a) is int and type(b) is int:
		print(a + b)
	else:
		print('inputs are not integer type')

num1 = input('input first number: ')
num2 = input('input second number: ')
add(num1, num2)
```

## Python intermediate topics
### Pip
Here is a list of dependency management tools in some languages
- Python - pip
- Java - mvn
- JavaScript - npm

After you have pip installed, you can verify pip version
`pip --version`

Also, you can try to install packages
`pip install pytest`
`pip list`
 
### Virtualenv
Pip install dependencies at a central place, so the change will affect all your projects. Virtualenv is a solution and you can use it create an isolation among your projects
`pip install virtualenv`

And now you can create a virtual environment specific to your project
`virtualenv env`
`source env/bin/activate`

And finally you can pip install packages locally which will be located in that env folder, so make sure you don't commit that folder
`pip install [package names]`


### Module
if you want to put whatever Python statements you typed into a file and call it something end up in .py, you have a Python module.

For example, let's create a Python module file called `cal.py` and put code
```
# two sum
def add(a, b):
	if type(a) is int and type(b) is int:
		print(a + b)
	else:
		print('inputs are not integer type')

```
Now create a file at the same folder, and call it `test.py`.

    import cal
	num1 = 1
	num2 = 2
	cal.add(num1,num2)

### Package
Module is awesome, which allows you to reuse your code. But once you start to write more modules, they become hard to manage. Especially, what if you are using other peoples' module and they have the same name.

Packages are designed to solve this problem. You can think of packages as a namespace. And it helps modules from clashing into each other.

In Python, packages are organized according to file systems. So, to create a package, you need to create a directory
`mkdir schedule`

Besides directory, you also need to create a special Python file called `__init__.py`, which is a file to let Python know that this package is an awesome package
`touch __init__.py`