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