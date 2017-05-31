# nyilvantarto_flask
school assignment, no guarantees :D under development

# Telepites:
Python3 kornyezet:
````
sudo apt install python3; sudo apt install python3-pip
````
Virtualenv kornyezet:
````
sudo pip install virtualenv
````
nodejs, bower telepítése:

````
sudo apt-get remove --purge nodejs
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt update;
sudo apt install nodejs
npm install --global bower
````


# Hasznalat
Clone-ozzuk ezt a repot:
````
git clone https://github.com/KrupMark/nyilvantarto_flask.git
````
Keszitsunk virtualenv-et:
````
virtualenv -p python3 ~/virtualenv/nyilvantarto_flask
````
Aktivaljuk a virtualenv-et:
````
source ~/virtualenv/nyilvantarto_flask/bin/activate
````
Telepitsuk a python csomagokat:
````
pip install -r requirements.txt
````
A clone-ozott nyilvantarto_flask mappan belul telepitsuk a bower csomagokat:
````
bower install
````

# Futtatas
A nyilvantarto_flask mappan belul futtassuk az appot:
````
python app.py
````
