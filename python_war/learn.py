# sample code
def add(a, b):
	if type(a) is int and type(b) is int:
		print(a + b)
	else:
		print('inputs are not integer type')

num1 = input('input first number: ')
num2 = input('input second number: ')
add(num1, num2)