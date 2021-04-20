'''
This is the server for the bookloaning app
'''
import os
from flask import Flask, send_from_directory #, json, request

APP = Flask(__name__, static_folder='./build/static')


@APP.route('/', defaults={"filename": "index.html"})
@APP.route('/<path:filename>')
def index(filename):
    '''The base html'''
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
    '''When the user sends a get requests with the endpoint '/booksearch' sends all
    the categories from the database'''
    return {'bookcategories': BOOKCATEGORIES}


@APP.route('/booksearch/<category>', methods=['GET'])
def searchresults(category):
    '''when user sends a get requests to the '/booksearch/<category>' endpoint,
    returns all books from the chosen category'''
    return {"results": RESULTS[category]}


@APP.route('/booksearch/<category>/<bookname>', methods=['GET'])
def book(category, bookname):
    '''When user sends get request to given endpoint,
    returns info on the requested book'''
    print(category)
    return {bookname: BOOKLISTING[bookname]}


APP.run(host=os.getenv('IP', '0.0.0.0'),
        port=8081 if os.getenv('C9_PORT') else int(os.getenv('PORT', 8081)),
        debug=True)
