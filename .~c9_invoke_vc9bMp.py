'''Serves the bookbuster app'''
import os
from flask import Flask, send_from_directory  #json, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

APP = Flask(__name__, static_folder='./build/static')

# Point SQLAlchemy to your Heroku database
APP.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
# Gets rid of a warning
APP.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

DB = SQLAlchemy(APP)
DB.create_all()
# IMPORTANT: This must be AFTER creating db variable to prevent
# circular import issues


class Book(DB.Model):
    
    id = DB.Column(DB.Integer, primary_key=True)
    
    username = DB.Column(DB.String(80), unique=False, nullable=False)
    
    bookname = DB.Column(DB.String(80), unique=False, nullable=False)
    
    price = DB.Column(DB.Integer, unique=False, nullable=False)
    
    condition = DB.Column(DB.String(80), unique=False, nullable=False)
    
    location = DB.Column(DB.String(80), unique=False, nullable=False)
    
    category = DB.Column(DB.String(80), unique=False, nullable=False)
    #email = DB.Column(DB.String(120), unique=True, nullable=False)

    def __repr__(self):
        
        return '<User %r Book %r>' % (self.username,self.bookname)

cors = CORS(APP, resources={r"/*": {"origins": "*"}})
#newbook = Book(username = 'Dezzy',bookname = '200 BC',price = 100,condition = 'good',location = 'brazil',category = 'History');
#DB.session.add(newbook);
#DB.session.commit();
testing = []
testing1 = {}
templ = []

#loop through categories
for category in DB.session.query(Book.category).all():  #
    for bookname in DB.session.query(Book.bookname).filter(Book.category == category.category).all():
        templ.append(bookname.bookname)
    testing1[category.category] = templ
    templ = []

#print(testing1)
#print(list(testing1))
print(list(DB.session.query(Book.bookname).filter(Book.category == 'History').all()))
#print(DB.session.query(Book.bookname).filter(Book.category == 'History').all()
    
#print(testing)
@APP.route('/', defaults={"filename": "index.html"})
@APP.route('/<path:filename>')
def index(filename):
    '''index'''
    return send_from_directory('./build', filename)


BOOKCATEGORIES = ['Computer Science', 'History']
RESULTS = {
    "Computer Science": ["Python for beginners", "Data structures"],
    "History": ["A brand new world", "700 BC"]
}

BOOKLISTING = {
    "700 BC": ["700BC", "120$", "Its in good condition", "Newark"],
    "A brand new world":
    ["A brand new world", "120$", "Its in good condition", "Newark"],
    "Python for beginners":
    ["Python for beginners", "120$", "Its in good condition", "Newark"],
    "Data structures":
    ["Data structures", "400$", "Its in good condition", "Newark"]
}


@APP.route('/booksearch', methods=['GET'])
def login():
    '''Responds with book categories'''
    return {'bookcategories': BOOKCATEGORIES}


@APP.route('/booksearch/<category>', methods=['GET'])
def searchresults(category):
    '''responds with results from category search'''
    return {"results": RESULTS[category]}


@APP.route('/booksearch/<category>/<bookname>', methods=['GET'])
def book(category, bookname):
    '''responds with book from a specific category'''
    print(category)
    return {bookname: BOOKLISTING[bookname]}

if __name__ == "__main__":
    APP.run(host=os.getenv('IP', '0.0.0.0'),
            port=8081 if os.getenv('C9_PORT') else int(os.getenv('PORT', 8081)),
            debug=True)
