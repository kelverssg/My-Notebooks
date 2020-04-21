from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    headline = 'This is awesome!'
    nums = range(1, 11)
    return render_template('test.html', headline=headline, nums=nums)

@app.route('/secondary')
def secondary():
    return 'This is my secondary page.'

@app.route('/tertiary')
def tertiary():
    return 'This is my tertiary page.'

@app.route('/main')
def main():
    return render_template('main.html')

@app.route('/<string:name>')
def generic(name):
    return f'This is my {name.title()} page.'