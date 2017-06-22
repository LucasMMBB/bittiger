from flask import Flask
from flask import render_template

app = Flask(__name__)

# - index page
@app.route('/')
def index():
	company = 'Fuckyou'
	nums = [1,2,3,4,5]
	blogs = [
				{"id":1,"content":"how are you"},
				{"id":2, "content": "i am fine"}
			]
	return	render_template('index.html.jinja',
		cname = company,
		nums = nums,
		blogs = blogs)

app.run(debug = True)