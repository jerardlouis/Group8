'''Serves the bookbuster app'''
import os
from flask import Flask, send_from_directory  #json, request

APP = Flask(__name__, static_folder='./build/static')


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


APP.run(host=os.getenv('IP', '0.0.0.0'),
        port=8081 if os.getenv('C9_PORT') else int(os.getenv('PORT', 8081)),
        debug=True)
