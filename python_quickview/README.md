# Python tutorial

## Python basics
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

```python
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
```python
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


### Object Oriented Programming
Firstly, here is an observation about programming. Programming is about two things: data and login to process data.

Now say you want to store and retrieve task data, how would you do it? For example, you can do thi.
1. Store task data as plain string
2. Use list, tuple, or set to store collection of task data
```python
s1 = 'work schedule'
s2 = 'personal schedule'
s3 = 'vacation schedule'
schedule = [s1, s2, s3]
```

There is nothing wrong about this approach, and even works well in simple cases. But what would happen if you have more attributes, such as priority to add. Your old code won't be able to recognize those new attributes, because the data stored are to <b>free-form</b>

Therefore it would be nice to bring some structure to store your data. That is why OOP is useful. In Python, you can define a class like this.
```python
class Schedule(object):

	name = None
	desp = None

	def __init__(self, n, d):
		self.name = n
		self.desp = d

	def __str__(self):
		return 'Schedule %s, %s' % (self.name, self.desp)

s1 = Schedule('s1', 'work schedule')
s2 = Schedule('s2', 'personal schedule')
```
Things to notice in the above program:
1. We created a class called Schedule.
2. Every class/object in Python has some built-in methods. For example,  ____init____ is being used to define how to initialize the object from class
3. ____str____ is a method to represent human readable info about your object
4. __name__ and __desp__ are the member variables of class Schedule.

Once we defined a class, we can then initialize Schedule objects.
```python
s1 = Schedule('s1', 'work schedule')
s2 = Schedule('s2', 'personal schedule')
s3 = Schedule('s3', 'vacation schedule')
print(s1)
print(s2)
print(s3)
```
Things to notice in the above program:
1. Notice how __print__ function outputs the readable format we defined earlier in ____str____ method. This is because __print__ calls ____str____ automatically.
2.__self__ is a particular variable, it points to the object itself.

Just printing information is not particular useful for a class, we can add more functionality to it by adding more methods:
```python
class Schedule(object):

	name = None
	desp = None
	tasks = None

	# - method is in class
	def __init__(self, n, d):
		self.name = n
		self.desp = d
		self.tasks = {}

	def add_task(self, taskname, content, priority):
		if taskname not in self.tasks:
			task = [taskname, priority, content]
			self.tasks.update({taskname: task})
		self.display()

	def remove_task(self, taskname):
		if taskname in self.tasks:
			self.tasks.pop(taskname)
		self.display()

	def display(self):
		if self.tasks:
			print('Here are you tasks: ')
			for v in self.tasks.values():
				print('%-10s %-5s %-50s' % (v[0], v[2], v[1]))

	def __str__(self):
		return 'Schedule %s, %s' % (self.name, self.desp)

s1 = Schedule('s1', 'work schedule')
s1.add_task('cs105', 'teach cs105', 1000)
s1.add_task('cs106', 'teach cs106', 10)
s1.remove_task('cs105')
```
In the above code, we beefed up Schedule class to help the ability of add_task and remove_task.

### Decorator
In Python, functions are first-class objects as well, which means that you can pass functions around and use them as arguments for other functions.
```python
def answer():
	def give42():
		return 42
	return give42

a =  answer()
print(answer)
print(answer())
print(answer()())
print(a())
```
As you can see, functions in Python is exactly like other projects like number, string, ets. The difference is that functions can be invoked with `()` syntax. With this in mind, we shouldn't be surprised about this.
```python
def display_decorator(func):
	def wrapper():
		print('before func')
		func()
		print('after func')
	return wrapper

def test_func():
	print('this is a func')

display_decorator(test_func)()
```
This mechanism of wrapping a function and modify its behaviour before and after that function is called decorator.
Python actually provides a special syntax for the ease of decorator.
```python
from datetime import datetime

def displaytime_decorator(func):

	def wrapper(*args, **kwargs):
		print(str(datetime.now()))
		return func(*args, **kwargs)

	return wrapper

class Schedule(object):

	name = None
	desp = None
	tasks = None

	# - method is in class
	def __init__(self, n, d):
		self.name = n
		self.desp = d
		self.tasks = {}

	@displaytime_decorator
	def add_task(self, taskname, content, priority):
		if taskname not in self.tasks:
			task = [taskname, priority, content]
			self.tasks.update({taskname: task})
		self.display()
	@displaytime_decorator
	def remove_task(self, taskname):
		if taskname in self.tasks:
			self.tasks.pop(taskname)
		self.display()

	def display(self):
		if self.tasks:
			print('Here are you tasks: ')
			for v in self.tasks.values():
				print('%-10s %-5s %-50s' % (v[0], v[2], v[1]))

	def __str__(self):
		return 'Schedule %s, %s' % (self.name, self.desp)

# test code
s1 = Schedule('s1', 'work schedule')
s1.add_task('cs105', 'teach cs105', 1000)
s1.add_task('cs106', 'teach cs106', 10)
s1.remove_task('cs105')
```
Things to notice in the above program:
1. The __@__ symbol plus the decorator is a quick way of applying a decorator to a function/method.

### File IO
Our schedule keeping app works fine, but it can't store the state of existing schedules. We need to store the data not in memory, but in a persist location, for example, file system.

Unlike other languages, working with file is very easy in Python. For example, if you want to read the content of a file.
```python
with open ('text.txt', 'r') as f:
	data = f.read()
``` 
Things to notice in the above program:
1. Notice in the open function call, besides the path to the file, we also used `r` meaning that we just want to read the content, any write operation to that file will cause error.
### Error and Exception
Python and all other languages provide mechanism to allow you to address these issues through `Exception`. You can catch exceptions using:
```python
try:
	# - awesome code goes here
except Exception as e:
	# - deal with the exception
finally:
	# - do final clean up
```
Things to notice in the above program:
1. `finally` code block will always get executed no matter what. So it is a good place to some final cleanup.
2.  `Exception` is a predefined base class in Python, it represents <b>ALL</b> exceptions. So sometimes it is too broad.

You can customize and define more fine-grained exceptions.
```python
class AwesomeException(Exception):
	"""docstring for AwesomeException"""
	def __init__(self, *args, **kwargs):
		Exception.__init__(self, *args, **kwargs)

raise AwesomeException('here is an error')		
```
### Testing
In Python there are numerous testing frameworks that can help you write test cases. For example, with pytest. You can express test cases like this.
```python
from scheduler import Schedule

def test_addtask():
	s = Schedule('maoxu', 'work schedule')
	s.add_task('test', 'test content', 100)
	s.add_task('cs106', 'teach cs106', 10)
	assert 'test' in s.tasks
	assert 'cs106' in s.tasks

def test_removetask():
	s = Schedule('maoxu', 'personal schedule')
	s.add_task('test', 'test content', 100)
	s.remove_task('test')
	assert s.tasks == {}
```
Things to notice in the above program:
1. `assert` keyword is used to express some condition must meet. For example, we assert that after adding a new task into schedule, `test` must be in the dictionary of tasks.
2. Test cases are essentially also Python code. The only thing is that they follow the naming conversion of starting with `test_`.

## Python Advanced
### List Comprehension
We have been using Python built-in data structures such as List, Tuple, and Disctionary. They are spuper useful when you need to group data together. Often you want to perform transformation on those collections, for example, filter out certain elements. Of course, you can do this.
```python
result = []
original = [1,2,3,4,5]
for i in original:
	if i < 3:
		result.append(i)
```
Python provides an awesome mechanism called list comprehension to help you achieve this easily. With list comprehension, you can achieve the previous goal with one line.
`original = [1,2,3,4,5]`
`result = [x for x in original if x < 3]`
Also use it to generate set
`result = {x for x in original if x < 3}`
And dictionary
`result = {x:x for x in original if x < 3}`

With comprehension, you can also play with multiple variables. For example, if you have two sets and you want to generate the product of two sets.
```python
letters = ['a', 'b', 'c', 'd']
numbers = [1, 2, 3, 4, 5]
product  = [(x, y) for x in letters for y in numbers]
```
One special case about comprehension is called `generator comprehension`. Run the example below
```python
a = [1,2,3,4,5]
gen = (x for x in a if x < 3)
type(gen)
gen.next()
gen.next()
gen.next() // error show here if no more elements
```
Things to notice in the above program:
1. `gen` has type of generator rather than list as before.
2. With generator, you iterate through the values using `next()` method. This allows you to work with huge amount of data without putting too much pressure on you memory.
### HTTP Networking
As an awesome programming language, Python has built in support for accessing internet and allow you to grab data without opening up browser. For example, let us say you want to grab data from website <a href="https://jsonplaceholder.typicode.com">jsonplaceholder</a>, which is  a dummy website that can give you random output.
```python
import httplib
conn = httplib.HTTPSConnection('jsonplaceholder.typicode.com')
conn.request('GET', '/posts')
resp = conn.getresponse()
data = resp.read()
```
Things to notice in the above program:
1. We imported the Python built in HTTP library `httplib`
2. Because the website `typicode` uses HTTPS protocol, we used `HTTPSConnection`.
3. Then sent our request to `/posts` endpoint to request some random data given by this site.
### JSON Manipulation
In the previous example, we sent out request and received JSON data. We can parse those data like this.
```python
import httplib
import json
conn = httplib.HTTPSConnection('jsonplaceholder.typicode.com')
conn.request('GET', '/posts')
resp = conn.getresponse()
data = resp.read()
dataparsed = json.load(data)
type(dataparsed)
# see the difference below
data[0]
dataparsed[0]
```
### Multi-threading
We can easily finish 100 requests in 10 seconds. But it is still not good enough.
```python
import httplib
import datetime
def get_data():
	conn = httplib.HTTPSConnection('jsonplaceholder.typicode.com')
	conn.request('GET', '/posts')
	resp = conn.getresponse()
	resp.read()
start = datetime.datetime.now()
for i in range(100):
	get_data()
end = datetime.datetime.now()
print(end - start)
```
As a matter of fact, we have been running our Python program with only one thread, which you can think of as a single worker unit. In modern computers, you can actually leverage more threads to perform work in parallel. This will help us to speed up.
```python
### Multi-threading
import httplib
import threading
import datetime

def worker():
	start = datetime.datetime.now()
	for i in range(100):
		con = httplib.HTTPSConnection('jsonplaceholder.typicode.com')
		con.request('GET', '/posts')
		resp = con.getresponse()
		resp.read()
	end = datetime.datetime.now()
	print("single thread time")
	print(end - start)

st = datetime.datetime.now()
for i in range(4):
	t = threading.Thread(target = worker)
	t.start()
ed = datetime.datetime.now()
print("main thread time: ")
print(ed - st)

```
Things to notice in the above example:
1. We imported Python built-in library `threading`, and we created 5 threads.
2. All the 4 threads will run simultaneously and executing a target worker function, and might give you 4x speed boost.

The main thread spawns four new threads to work on stuff. And they can work independently.

--- main thread
| - thread 1
| - thread 2
| - thread 3
| - thread 4

You can actually pass arguments to worker function like this:
```python
import httplib
import threading
import datetime

def worker(num):
	start = datetime.datetime.now(num)
	for i in range(100):
		con = httplib.HTTPSConnection('jsonplaceholder.typicode.com')
		con.request('GET', '/posts')
		resp = con.getresponse()
		resp.read()
	end = datetime.datetime.now()
	print("single thread time")
	print(end - start)

st = datetime.datetime.now()
for i in range(4):
	t = threading.Thread(target = worker, args = (100, )))
	t.start()
ed = datetime.datetime.now()
print("main thread time: ")
print(ed - st)
```
###Queue
Multi-threading programming is a huge topic, and there are a lot to cover such as Locks, etc. But for implementing network crawler, there is one particular technique is very important.
Any  website is built with many inter-connected pages. For example, the front page of wikipedia logically looks like this:

--- front page
| - page 1
| - page 2
		| - page 3

So when you performing crawling with 4 thread, how do you assign a URL to a specific thread for processing? You basically have a huge collection of tasks that are generating new tasks and a pool of resources to perform the tasks, this kind of problem is normally called `Producer-Consumer Problem`. One way to solve this is to use thread-safe FIFO queue.
```python
import Queue

q = Queue.Queue()
for i in range(100):
	q.put(i)
while not q.empty():
	print(q.get())
```
You can think of a queue as a mailbox, whenever there is a new task, just drop into mailbox, and whoever is ready to work on the new task, just go and get a task from the mailbox. With this idea in mind, we can try to solve `Producer-Consumer Problem`.
```python
import Queue
import random
import threading
import time

q = Queue.Queue()
counter = 0
lock = threading.RLock()

def worker(i, q):
    while True:
        task = q.get()
        print('Thread %d working on task %d' % (i, task))
        time.sleep(1)
        count_new_tasks = random.randrange(0, 10)
        print('putting %d new tasks in queue' % count_new_tasks)
        for new in range(count_new_tasks):
            q.put(new)
        q.task_done()
        global counter
        with lock:
            counter += 1
            print('Totally processed %d tasks so far' % counter)

for i in range(3):
    t = threading.Thread(target = worker, args = (i, q, ))
    t.setDaemon(True)
    t.start()

q.put(1)

q.join()
```
Things to notice in the above program:
1. Whenever we process a task, we put some random number of tasks into queue to simulate crawling websites, because we normally run into more links when we crawl a website.
2. `random` is a built-in module that can generate random stuff, we used `random.randrange()`function to generate a random number in range.
3. The join call in the end will only finish when there's no more task in the queue.
4. Threads come in two flavors, daemon or non-daemon. The difference is that Python will not exit until all non-daemon threads exit
5. In order to count how many tasks we have processes so far, we used a counter to keep track of the number of tasks we processed so far. However, dealing with counter is not as easy as in single thread, because there is race condition. Therefore, we used a lock to lock down stuff and make sure only one thread can access that counter at a time.


## Python Toolbox - Networking/Crawling

### Requests
`Requests` is an awesome Python library that is really good at HTTP/HTTPS requests. Use it like this:
```python
import requests
resp = requests.get('https://jsonplaceholder.typicode.com/posts')
```
### BeautifulSoup
Use library BeautifulSoup to make data from requests are easy to use. See the following example.
```python
import requests
from bs4 import BeautifulSoup
resp = requests.get('https://en.wikipedia.org/wiki/Main_Page')
soup = BeautifulSoup(resp.content, 'html.parser')
links = soup.find_all('a')
urls = [link.get('href') for link in links]
```
### Practice
We have learned a lot so far, now let us put them together, and develop a, wait-for-it, wikipedia crawler. Here are some requirements.
1. Invoke from command line.
2. Crawl up to certain numbers of links
3. Avoid re-crawling since there are web pages pointing to each other.
4. May use Redis to do

## Python for Data Analytics
### Table of Content
- Development Environment
- Python Toolbox - Data Analytics
### Development Environment
In the line of work as Data Analytic, you need to be able to implement huge chunks of code, as well as the ability to quick explore data and reuse some of previous results.

#### Jupyter/IPython
IPython(Interactive Python) is the tool you are looking for. From the developer experience perspective, it looks like an advanced version of Python built-in interactive shell, where syntax highlighting and auto completion is also provided. Underneath, it also a complete development runtime that also works with things like R, Julia, and Mathematic.

Install and verify version.
`pip install jupyter`
`jupyter --version`

In jupyter, your main workspace is called notebook. Notebook, is essentially a web-based application that interacts with Python interpreter. You can start a Jupyter notebook with the following command.
`jupyter notebook`

You will notice we now have started a webserver at `http://localhost:8888`. From there, we can then create a notebook through web UI.

Now you can play around with it.

### Python Toolbox - Data Analytics

#### NumPy

We discussed how to use Python built-in data types such as list to store data. For example.
```
data = [1,2,3,4,5]
data[2:3]
```
As described by the example, Python built-in data types has the ability for basic data storage and indexing. However, as data analytic, you normally need to work with large multi-dimension data. How to quickly manipulate this kind of data is a problem for Python before.
<a>NumPy</a> is a Python module that allows fast access/manipulation to multi-dimensional array. Because of the performance issue of native Python, people normally use tools like R, or Matlab for number crunching. NumPy is inspired by those tools, and implemented similar functionality in C and Fortan.

Installation
`pip install numpy`

Quick start
```python
import numpy as np
a = np.array([1,2,3])
type(a)
```
Things to notice in the above program:
1. We used a syntax `import ... as ...`, this is useful when you have multiple imports and you want to use the module name across the program but module name is tooooo long.

In NumPy, all the ndarray has an attibute called shape
```python
data = [[1,2,3,4],[5,6,7,8]]
b = np.array(data)
b.shape
```
You can reshape them.
`b.reshape([4,2])`

The data types in NumPy is different from Python. Because under the hook, NumPy used C or Fortan and it has more powerful representation of data.
`b.dtype`
