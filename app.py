from flask import Flask
from flask import render_template
app = Flask(__name__)
app.debug = True

# http://flask.pocoo.org
# az index fuggveny rendereli le az index.html file-t

@app.route("/")
def index():
    user = "KrupMark"
    # a user valtozo, az a index.html file-ban is user valtozokent lesz elerheto
    return render_template('index.html', user=user)

# a flask minden template file-t a templates mappan belül keres.
@app.route("/login")
def loginPage():
    return render_template('login.html')

if __name__ == "__main__":
	app.run(host='0.0.0.0')

# react
# angular js
# bower.io, npm
