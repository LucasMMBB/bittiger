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