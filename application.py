from flask import Flask, jsonify, render_template, request, session
from flask_session.__init__ import Session
from datetime import datetime
import requests

app = Flask(__name__)

app.config['SESSION_PERMANENT'] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

@app.route('/')
def index():
    headline = 'This is awesome!'
    nums = range(1, 11)
    return render_template('test.html', headline=headline, nums=nums)

@app.route('/convert', methods=['POST'])
def convert():

    # Query for currency exchange rate
    for i in ['USD', request.form.get('currency').upper()]:
        currency = i
        res = requests.get('http://data.fixer.io/api/latest?access_key=ed84ae9b541401a8b82473165a07ab8e', params={'symbols': currency})
    
        # Make sure request succeeded
        if res.status_code != 200: return jsonify({'success': False})

        # Make sure currency is in response
        data = res.json()
        if currency not in data['rates']: return jsonify({'success': False})
        if currency == 'USD': usd = data['rates'][currency]
    return jsonify({'success': True, 'rate': round(data['rates'][currency]/usd, 4), 'base': 'USD'})

@app.route('/notes', methods=["GET", "POST"])
def le_notes():
    if request.method == 'POST':
        if session.get('notes') == None: session['notes'] = []
        note = request.form.get('note')
        session['notes'].append(note)
    return render_template('notes.html', notes=session['notes'])

@app.route('/secondary')
def secondary():
    return 'This is my secondary page.'

@app.route('/tertiary')
def tertiary():
    return 'This is my tertiary page.'

@app.route('/main')
def main():
    return render_template('main.html')

@app.route('/second')
def second():
    return render_template('second.html')

@app.route('/twentyfifty', methods=["GET","POST"])
def twentyfifty():
    if request.method == 'GET': return render_template('main.html')
    current_year = datetime.now().year
    age = int(request.form.get("age"))
    age2050 = age + 2050 - current_year
    return render_template('twentyfifty.html', current_year=current_year, age=age, age2050=age2050)

@app.route('/<string:name>')
def generic(name):
    return f'This is my {name.title()} page.'