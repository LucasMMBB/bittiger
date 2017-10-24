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
for task in range(30):
    q.put(task)

for i in range(3):
    t = threading.Thread(target = worker, args = (i, q, ))
    t.setDaemon(True)
    t.start()
print("main thread done")
q.put(1)
q.join()