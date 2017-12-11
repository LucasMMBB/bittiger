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