import os
from flask import Flask, send_from_directory, json, request

app = Flask(__name__, static_folder='./build/static')


@app.route('/', defaults={"filename": "index.html"})
@app.route('/<path:filename>')
def index(filename):
    return send_from_directory('./build', filename)
bookcategories = ['Computer Science','History']
results = {"Computer Science" : ["Python for beginners", "Data structures"], 
"History" : ["A brand new world", "700 BC"]}
@app.route('/booksearch', methods=['GET'])
def login():
    if request.method == 'GET':
        return {
            'bookcategories': bookcategories
        }
@app.route('/booksearch/<category>', methods=['GET'])
def searchresults(category):
    return {"results" : results[category]}
    

app.run(
    host=os.getenv('IP', '0.0.0.0'),
    port=8081 if os.getenv('C9_PORT') else int(os.getenv('PORT', 8081)),
    debug=True
)
