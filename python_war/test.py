class AwesomeException(Exception):
	"""docstring for AwesomeException"""
	def __init__(self, *args, **kwargs):
		Exception.__init__(self, *args, **kwargs)

raise AwesomeException('here is an error')		