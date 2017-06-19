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

print(s1)
print(s2)