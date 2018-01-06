"""
* Website url parser
* Maoxu
"""
import time
import Queue
import threading
import requests
from bs4 import BeautifulSoup

q = Queue.Queue()
counter = 0
lock = threading.RLock()

def url_parser(url):
    try:
        rp = requests.get(url)
        sp = BeautifulSoup(rp.content, 'html.parser')
        lks = sp.find_all('a')
        uls = [lk.get('href') for lk in lks]
        print('putting %d new URLs in queue' % len(uls))
        return uls

    except:
        print("Can't parse this url %s" % str(url))
        return None

def worker(i, q):
    while True:
        task = q.get()
        print('Thread %d working on parsing URL %s' % (i, task))
        new_urls = url_parser(task)
        print('Parsed url %s ' % task)
        if new_urls != None:
            for new_url in new_urls:
                q.put(str(new_url))
        time.sleep(0.1)
        #count_new_tasks = random.randrange(0, 10)
        q.task_done()
        global counter
        with lock:
            # everytime q.get is called, it parse a url
            counter += 1
            print('Totally parsed %d URLs so far' % counter)
            if counter > 40:
                break

# Parse the main site
resp = requests.get('http://welcometolucs.com')
soup = BeautifulSoup(resp.content, 'html.parser')
links = soup.find_all('a')
urls = [link.get('href') for link in links]
for url in urls:
    print(str(url))
    q.put(str(url))

# open four threads to parse the whole site
for i in range(4):
    t = threading.Thread(target = worker, args = (i, q, ))
    t.setDaemon(True)
    t.start()

print("main thread done")
q.join()