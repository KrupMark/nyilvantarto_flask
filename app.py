from flask import Flask
from flask import render_template
from flask import request, redirect, url_for

app = Flask(__name__)
app.debug = True

# http://flask.pocoo.org
# az index fuggveny rendereli le az index.html file-t
# a / oldalon get és post method-okat is engedünk
# https://www.w3schools.com/tags/ref_httpmethods.asp
# EZ NEM EGY IGAZI BEJELENTKEZO FElULET, igy nem szabad csinalni rendes bejelentkezest
@app.route("/", methods=['GET', 'POST'])
def index():
    # egy error valtozot deklaralunk aminek a kezdo erteken None (azaz semmi)
    error = None
    # ha ez a page ugy van meghivva hogy a kliens POST-ot kuld
    if request.method == 'POST':
        # a login.html-ben levo form adatokat, kiszedjuk a POST-bol es betoltjuk ket darab valtozoba
        email = request.form.get('email')
        passwd = request.form.get('password')
        # print(request.form.get)
        print("A megadott emailcim: {}".format(email))
        print("A megadott jelszo: {}".format(passwd))
        # a bekuldott adatok kozul ellenorizzuk a felahasznalonevet, es ha az helyes
        if email == "KrupMark":
            # atiranyitjuk a felhasznalot a belso oldalra
            return redirect(url_for('nyilvantarto'))
        else:
            # ha rossz adatokat adott meg, akkor egy hibauzenetet kuldonk...
            error = 'Invalid Credentials. Please try again.'
    # a flask minden template file-t a templates mappan belul keres.
    # ha nem POST a http keres, hanem GET, akkor siman csak a login.html-t rendereljuk:
    return render_template('login.html', error=error)

@app.route("/nyilvantarto")
def nyilvantarto():
    user = "KrupMark"
    # a user valtozo,az az index.html file-ban is user valtozokent lesz elerheto
    return render_template('index.html', user=user)

if __name__ == "__main__":
	app.run(host='0.0.0.0')

# react
# angular js
# bower.io, npm
