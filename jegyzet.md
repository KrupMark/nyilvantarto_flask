git beallitasa:
git telepitese:
````
apt install git
````
#git alap beallitasa:
````
git config --global user.email "sajat@email.hu"
git config --global user.name "sajatUserem"
````
#git push config:
````
git config --global push.default matching
````
.gitignore file tartalmazza azokat a mappakat vagy fileokat amiket
a git nem kell figyelembe vegyen

#git hasznalata
Elso lepes hogy csinalunk egy ures repository-t, vagy clone-ozunk egy meglevot...
Uj ures repo keszitese:
````
git init
````
Meglevo klonozasa:
````
git clone /path/to/repo
````
Munka utan a valtozasokat az alabbi parancsal tudjuk megnezni:
````
git status
````
Eloszor hozzaadjuk azokat a fileokat amiket fel szeretnenk push-olni:
pl a gitignore file-t:

````
git add .gitignore
````
pl ha az egész mappat hozza akarjuk adni (minden file-t, ehhez benne kell
lennunk abban a mappaban amelyikben a git repository talalhato):
````
  git add .
````
Commit-oljuk azokat a file-okat amelyeket hozzaadtuk az add parancsal:
````
git commit -m "commit uzenetem"
````
 commitot push-olni kell, ekkor adodik hozza a tavoli repo-hoz
````
git push
````
