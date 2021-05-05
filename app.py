'''Serves the bookbuster app'''
import os
from flask import Flask, send_from_directory, request, redirect  #json, request
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
    '''Book database'''
    id = DB.Column(DB.Integer, primary_key=True)

    username = DB.Column(DB.String(80), unique=False, nullable=False)

    bookname = DB.Column(DB.String(80), unique=False, nullable=False)

    price = DB.Column(DB.Integer, unique=False, nullable=False)

    condition = DB.Column(DB.String(80), unique=False, nullable=False)

    location = DB.Column(DB.String(80), unique=False, nullable=False)

    category = DB.Column(DB.String(80), unique=False, nullable=False)

    #email = DB.Column(DB.String(120), unique=True, nullable=False)

    def __repr__(self):

        return '<User %r Book %r>' % (self.username, self.bookname)


CORS = CORS(APP, resources={r"/*": {"origins": "*"}})
RESULTS = {}
BOOKCATEGORIES = []
BOOKLISTING = []


def get_results():
    '''queries database for results dictionary'''
    templ = []
    global RESULTS
    RESULTS = {}
    #loop through categories
    for category in DB.session.query(
            Book.category).all():  #loop through categories
        #for each book in that category append it to a list
        for bookname in DB.session.query(Book.bookname).filter(
                Book.category == category.category).all():
            templ.append(bookname.bookname)
        RESULTS[category.category] = templ  #map category name to list of books
        templ = []
    print(RESULTS)


def get_book_listing():
    '''responds to booklisting request'''
    global BOOKLISTING
    BOOKLISTING = []
    for row in Book.query.all():
        rowlist = [row.bookname, row.price, row.condition, row.location]
        BOOKLISTING.append(rowlist)


@APP.route('/', defaults={"filename": "index.html"})
@APP.route('/<path:filename>')
def index(filename):
    '''index'''
    return send_from_directory('./build', filename)


@APP.route('/booksearch', methods=['GET'])
def login():
    '''Responds with book categories'''
    get_results()
    return {'bookcategories': list(RESULTS.keys())}
    #return {'bookcategories': BOOKCATEGORIES}


@APP.route('/booksearch/<category>', methods=['GET'])
def searchresults(category):
    '''responds with results from category search'''
    get_results()
    print('hi')
    return {"results": RESULTS[category]}


@APP.route('/booksearch/<category>/<bookname>', methods=['GET'])
def book(category, bookname):
    '''responds with book from a specific category'''
    get_book_listing()
    for row in BOOKLISTING:
        if row[0] == bookname:
            return {bookname: row}


@APP.route('/loan', methods=['POST'])
def loan():
    '''resonds to loan request'''
    newrow = Book(username=request.form['username'],
                  bookname=request.form['bookname'],
                  price=request.form['price'],
                  condition=request.form['condition'],
                  location=request.form['location'],
                  category=request.form['category'])
    DB.session.add(newrow)
    DB.session.commit()
    get_book_listing()
    print(BOOKLISTING)
    return redirect(
        'https://1b192e7807c346c6bf22353e00e6c8ba.vfs.cloud9.us-east-1.amazonaws.com/'
    )


if __name__ == "__main__":
    APP.run(
        host=os.getenv('IP', '0.0.0.0'),
        port=8081 if os.getenv('C9_PORT') else int(os.getenv('PORT', 8081)),
        debug=True)
