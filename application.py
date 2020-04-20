from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello world!'

@app.route('/secondary')
def secondary():
    return 'This is my secondary page.'

@app.route('/tertiary')
def tertiary():
    return 'This is my tertiary page.'