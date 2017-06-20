# single-threading
import httplib
import datetime
def get_data():
	conn = httplib.HTTPSConnection('jsonplaceholder.typicode.com')
	conn.request('GET', '/posts')
	resp = conn.getresponse()
	resp.read()
start = datetime.datetime.now()
for i in range(400):
	get_data()
end = datetime.datetime.now()
print(end - start)
print(type(end - start))


# Multi-threading
import httplib
import threading
import datetime

def worker(num):
	start = datetime.datetime.now()
	for i in range(num):
		con = httplib.HTTPSConnection('jsonplaceholder.typicode.com')
		con.request('GET', '/posts')
		resp = con.getresponse()
		resp.read()
	end = datetime.datetime.now()
	print("single thread time")
	print(end - start)

st = datetime.datetime.now()
for i in range(4):
	t = threading.Thread(target = worker, args=(10,))
	t.start()
ed = datetime.datetime.now()
print("main thread time: ")
print(ed - st)
