# Python Class Intro
## So Everything Has a Class?
Classes can be thought of as blueprints for creating objects. When I define a Customer class using the `class` keyword, I haven't actually created a customer. Instead, what I've created is a sort of instruction manual for constructing "customer" objects. The below are examples code:
```python
class Customer(object):
	"""
	A customer of ABC Bank with a checking account. Customers have the following properties:

	Attributes:
		name: A string representing the customer's name
		balance:  A float tracking the current balance of the customer's account
	"""
	def __init__(self, name, balance = 0.0):
		self.name = name
		self.balance = balance

	def withdraw(self, amount):
		"""
		Return the balance remaining after withdrawing money
		"""
		if amount > self.balance:
			raise RuntimeError('Not enough savings')
		self.balance -= amount
		return self.balance

	def deposit(self, amount):
		"""Return the balance remaining after depositing money"""
		self.balance += amount
		return self.balance

```
The `class Customer(object)` line does not create a new customer. That is, just because we've defined a `Customer` doesn't mean we've created one.
So, to use the blueprint that we created by defining the `class Customer`, we call the class name almost as if it were a function:
`jeff = Customer('Jeff', 1000)`.
This line simply says that a new cutomer who is called "Jeff" and have balence 1000 dollars has been created

The `Jeff` object, known as an instance, is the relized version of the `Customer` class.
## Self?
So what is `Self`? The self means that it points to current instance.\
```python
# Example
Maoxu = Customer("maoxu", 100000) # self points to Maoxu
```
## `__init__`
After `__init__` has finished, the caller can rightly assume that the object is ready to use. That is we can start making `deposit` and `withdraw` calls on `jeff`; `jeff` is a fully-initialized object.
<b>Don't introduce a new attribule outside of `__init__`method</b>
## Instance Attributes and Methods
An function defined in a class is called a "method". Methods have access to all the data contained on the instance of the object; they can access and modify anything previously set on `self`. Because they use `self`, they require an instance of the class in order to be used. For this reason, they're often referred as "instance methods".
If there are "instance methods", then surely there are other types of methods as well. Yes, there are, but these methods are a bit more esoteric. We'll cover them briefly here.
### Static Methods
`Class attributes` are attributes that are set at the `class-level`, as opposed to the `instance-level`. Normal attributes are introduced in the `__init__` method, but some attributes of a class hold for all instances in all cases. For example, consider the following definition of a `Car` object:
```python
class Car(object):

    wheels = 4

    def __init__(self, make, model):
        self.make = make
        self.model = model
    def test(self):
    	print self.wheels
mustang = Car('Ford', 'Mustang')
mustang.test()
#print mustang.wheels # 4
#print Car.wheels # 4
```
A `Car` always has four wheels, regardless of the `make` or `model`. Instance methods can access these attributes in the same way they access regular attributes(like self.wheels)
There is a class of methods, though, called static methods, that don't have access to self. Just like class attributes, they are methods that work without requiring an instance to be present. Since instances are always referenced through self, static methods have no self parameter.
The following would be a valid static method on the `Car` class:
```python
class Car(object):
	...
	def make_car_sound():
		print 'VRooommm!'
```
No matter what kind of car we have, it always makes the same sound.
To make it clear that this method should not receive the instance as the firsts parameter, the `@staticmethod` decorator is used, turning our definition into:
```python
class Car(object):
	...
	@staticmethod
	def make_car_sound():
		print "VRoooommmmm!" 
```
### Class methods
A variant of the static method is the class method. Instead of recieving the instance as the first parameter, it is passed the class. It is also defined using a decorator:
```python
class Vehicle(object):
	...
	@classmethod
	def is_motorcycle(cls):
		return cls.wheels == 2
```
Class methods may not make much sense right now, but that's because they're used most often in connection with our next topic: inheritance
## Inheritance
