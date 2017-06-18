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
