from flask import (Flask,
			 url_for,
			 render_template,
			 request,
			 redirect,
			 session)

from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object('config')
db = SQLAlchemy(app)


class User(db.Model):
	id = db.Column(db.Integer, primary_key = True)
	username = db.Column(db.String(64), index = True)
	posts = db.relationship('Post', backref = 'author', lazy = 'dynamic')


class Post(db.Model):
	id = db.Column(db.Integer, primary_key = True)
	content = db.Column(db.String(600))
	timestamp = db.Column(db.DateTime)
	user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

db.create_all()
db.session.commit()



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

@app.route('/signup', methods = ['GET', 'POST'])
def signup():
	if request.method == 'POST':
		# - ADD USER
		username = request.form['username']
		user = User(username=username)
		db.session.add(user)
		db.session.commit()
		return redirect(url_for('index'))
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