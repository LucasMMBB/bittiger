from flask import Flask
from flask import render_template

app = Flask(__name__)

'''
index
	- go to signup
	- go to login
	- if already login, find all the blog posts
	- if already lgoin, go to create blog page

signup
	- create new user account
	- after create, redirect to index

login
	- a form to login
	- after login, redirect to index

logout(no html page)
	- logout user

create_blog
	- a form to create blog
	- after creation, redirect to index
'''
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

@app.route('/signup')
def signup():
	return render_template('signup.html.jinja')

@app.route('/login')
def login():
	return render_template('login.html.jinja')

@app.route('/logout')
def logout():
	return 200

@app.route('/create')
def create_blog():
	return render_template('create_blog.html.jinja')


@app.errorhandler(404)
def page_not_found(error):
	return render_template('404.html.jinja'), 404


app.run(debug = True)