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
While Object-oriented Programming is useful as a modeling tool, it truly gains power when the concept of inheritance is introduced. Inherticance is the process by which a "child" class derives the data and behavior of a "parent" class. An example will definitely help us here.

Imagine we run a car dealership. We sell all types of vehicles, from motorcyles to trucks. We set ourselves apart from the competition by prices. Specially, how we determine the price of a vehicle on our lot: $5000 x number of wheels a vehicle has. We love buying back our vehicles as well. We offer a flat rate - 10% of the miles driven on the vehicle. For trucks, that flat rage is $10,000. For cars, $8000. For motorcycles, $4000.

If we wanted to create a sales system for our dealership using Object-oriented techniques, how would we do so? What would the object be? We might have a SALE class, a Customer class, an Inventory class, and so forth, but we'd almost certainly have a CAR, TRUCK, and MOTORCYCLE class

What would these classes look like? Using we've talked, here of a possible implementation of the `Car` class:
```python
class Car(object):
	"""A car sale by Maoxu Car Dealership

	Attributes:
		wheels: An integer representing the number of the car has
		miles: The integral number of miles driven on the car
		make: The make of the car as a string
		model: The model of the car as a string
		year: The integral year the car was built
		sold_on: The date the vehicle was sold
	"""

	def __init__(self, wheels, miles, make, model, year, sold_on):
		"""Return a new Car Oject"""
		self.wheels = wheels
		self.miles = miles
		self.make = make
		self.model = model
		self.year = year
		self.sold_on = sold_on

	def sale_prive(self):
		"""Return the sale price for this car as a float number"""
		if self.sold_on is not None:
			return 0.0 # Alreay sold on
		return 5000.0 * self.wheels

	def purchase_price(self):
		"""Return the price for which we would pay to purchase the car."""
		if self.sold_on is None:
			return 0.0 # Not sold yet
		return 8000 - (0.1 * self.miles)
	... # to be continue
```
OK, that looks pretty reasonable. Of course, we would likely have a number of other methods on the class, but I've shown two of particular interests to us: `sale_price` and `purchase_price`. We'll see why these are important a bit.

Now that we've got the `Car` class, perhaps we should create a `Truck` class? Let's follow the same pattern we did for the car:
```python
class Truck(object):
    """A truck for sale by Jeffco Car Dealership.

    Attributes:
        wheels: An integer representing the number of wheels the truck has.
        miles: The integral number of miles driven on the truck.
        make: The make of the truck as a string.
        model: The model of the truck as a string.
        year: The integral year the truck was built.
        sold_on: The date the vehicle was sold.
    """

    def __init__(self, wheels, miles, make, model, year, sold_on):
        """Return a new Truck object."""
        self.wheels = wheels
        self.miles = miles
        self.make = make
        self.model = model
        self.year = year
        self.sold_on = sold_on

    def sale_price(self):
        """Return the sale price for this truck as a float amount."""
        if self.sold_on is not None:
            return 0.0  # Already sold
        return 5000.0 * self.wheels

    def purchase_price(self):
        """Return the price for which we would pay to purchase the truck."""
        if self.sold_on is None:
            return 0.0  # Not yet sold
        return 10000 - (.10 * self.miles)

    ...

```
Well, That's almost identical to the car class. One of the most important rules of programming is "DRY" or "Don't Repeat Yourself". We've definitely repeated ourselves here. In fact, the `Car` and `Truck` classes differ only by a single characters

So what gives? Where did we go wrong? Our main problem is that we raced straight to the concrete: `Car` and `Truck` are real things, tangible objects that make intuitive sense as classes. However, they share so much data and functionality in common that it seems there must be an abstraction we can introduce here. Indeed there is: the notion of `Vehicle`s
### Abstract Classes
A `Vehicle` is not a real-world object. Rather, it is a concept that some real-world objects(like cars, trucks, and motorcycles) embody. We would like to use the fact that each of these objects can be considered a vehicle to remove repeated code. We can do that by creating a `Vehicle` class:
```python
class Vehicle(object):
	"""A Vehicle for sale by Maoxu Car Dealership

	Attributes:
        wheels: An integer representing the number of wheels the vehicle has.
        miles: The integral number of miles driven on the vehicle.
        make: The make of the vehicle as a string.
        model: The model of the vehicle as a string.
        year: The integral year the vehicle was built.
        sold_on: The date the vehicle was sold.
	"""

	base_same_price = 0

	def __init__(self, wheels, miles, make, model, year, sold_on):

        """Return a new Vehicle object."""
        self.wheels = wheels
        self.miles = miles
        self.make = make
        self.model = model
        self.year = year
        self.sold_on = sold_on

    def sale_price(self):
        """Return the sale price for this vehicle as a float amount."""
        if self.sold_on is not None:
            return 0.0  # Already sold
        return 5000.0 * self.wheels

    def purchase_price(self):
        """Return the price for which we would pay to purchase the vehicle."""
        if self.sold_on is None:
            return 0.0  # Not yet sold
        return self.base_sale_price - (.10 * self.miles)
```
Now we can make `Car` and `Truck` class inherit from the `Vehicle` class by replacing `object` in the line
`class Car(object)`. The class in parenthesis is the class that is inherited from. `Object` essentially means "no inheritance".

We can now define `Car` and `Truck` in a very straightforward way:
```python
class Car(Vehicle):

    def __init__(self, wheels, miles, make, model, year, sold_on):
        """Return a new Car object."""
        self.wheels = wheels
        self.miles = miles
        self.make = make
        self.model = model
        self.year = year
        self.sold_on = sold_on
        self.base_sale_price = 8000


class Truck(Vehicle):

    def __init__(self, wheels, miles, make, model, year, sold_on):
        """Return a new Truck object."""
        self.wheels = wheels
        self.miles = miles
        self.make = make
        self.model = model
        self.year = year
        self.sold_on = sold_on
        self.base_sale_price = 10000
```
This work, but has a few problems. First, we're still repeating a lot of code. We'd ultimately like to get rid of all repetition. Second, and more problematically, we've introduced the `Vechicle` class, but should we really allow people to create `Vehicle` objects(as opposed to `Car`s and `Truck`s)? A `Vehicle` is just a concept, not a real thing, so what does it mean to say the following:
```python
v = vehicle(4, 0, 'Honda', 'Accord', 2014, None)
print v.purchase_price()
```
A `Vehicle` doesn't have a base_sale_price, only the individual child classes like Car and Truck do. The issue is that `Vechile` should really be an <i>Abstract Base Class</i>. Abstract Base Classes are classes that are only meant to be inherited from; you can't create instance of an ABC. That means that, if `Vehicle` is an ABC, THE FOLLOWING IS ILLEGAL:
`v = vehicle(4, 0, 'Honda', 'Accord', 2014, None)`

It makes sense to disallow this, as we never meant for vehicles to be used directly. We just wanted to use it to abstract away some common data and behivior. So how do we make a class an ABC? The ABC model contains a metaclass called `ABCMeta`. Setting a class's metaclass to `ABCMeta` and making one of its methods virtual makes it an ABC. A virtual method is one that the ABC say must exist in child classes, but doesn't necessarily actually implement. For example, the `Vehicle` class may be defined as follows:

```python
from abc import ABCMeta, abstractmethod
class Vehicle(object):
    """A vehicle for sale by Jeffco Car Dealership.


    Attributes:
        wheels: An integer representing the number of wheels the vehicle has.
        miles: The integral number of miles driven on the vehicle.
        make: The make of the vehicle as a string.
        model: The model of the vehicle as a string.
        year: The integral year the vehicle was built.
        sold_on: The date the vehicle was sold.
    """

    __metaclass__ = ABCMeta

    base_sale_price = 0
    wheels = 0

    def __init__(self, miles, make, model, year, sold_on):
        self.miles = miles
        self.make = make
        self.model = model
        self.year = year
        self.sold_on = sold_on

    def sale_price(self):
        """Return the sale price for this vehicle as a float amount."""
        if self.sold_on is not None:
            return 0.0  # Already sold
        return 5000.0 * self.wheels

    def purchase_price(self):
        """Return the price for which we would pay to purchase the vehicle."""
        if self.sold_on is None:
            return 0.0  # Not yet sold
        return self.base_sale_price - (.10 * self.miles)

    @abstractmethod
    def vehicle_type(self):
        """"Return a string representing the type of vehicle this is."""
        pass
```

Now `Car` and `Truck` classes become:
```python
class Car(Vehicle):
    """A car for sale by Jeffco Car Dealership."""

    base_sale_price = 8000
    wheels = 4

    def vehicle_type(self):
        """"Return a string representing the type of vehicle this is."""
        return 'car'

class Truck(Vehicle):
    """A truck for sale by Jeffco Car Dealership."""

    base_sale_price = 10000
    wheels = 4

    def vehicle_type(self):
        """"Return a string representing the type of vehicle this is."""
        return 'truck'

```
## Inheritance and the LSP
Even though it seems like we used inheritance to get rid of duplication, what we were really doing was simply providing the proper level of abstraction. And abstraction is the key to understanding inheritance. We've seen how one side-effect of using inheritance is that we reduce duplicated code, but what about from the caller's perspective. How does using inheritance change the code?

Quite a bit, it turns out. Imagine we have two classes, Dog and Person, and we want to write a function that takes either type of object and prints out whether or not the instance in question can speak (a dog can't, a person can). We might write code like the following:
```python
def can_speak(animal):
    if isinstance(animal, Person):
        return True
    elif isinstance(animal, Dog):
        return False
    else:
        raise RuntimeError('Unknown animal!')
```
That works when we only have two types of animals, but what if we have twenty, or two hundred? That if...elif chain is going to get quite long.

The key insight here is that can_speak shouldn't care what type of animal it's dealing with, the animal class itself should tell us if it can speak. By introducing a common base class, Animal, that defines can_speak, we relieve the function of it's type-checking burden. Now, as long as it knows it was an Animal that was passed in, determining if it can speak is trivial:
```python
def can_speak(animal):
	return animal.can_speak()
```
This works because Person and Dog (and whatever other classes we crate to derive from Animal) follow the Liskov Substitution Principle. This states that we should be able to use a child class (like Person or Dog) wherever a parent class (Animal) is expected an everything will work fine. This sounds simple, but it is the basis for a powerful concept we'll discuss in a future article: interfaces.