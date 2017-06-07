/*jshint esnext: true */
/*jshint devel: true */
/*jslint node: true */
/*jslint browser: true */
/*jslint jquery: true */

console.log("");
console.log(" --------------------");
console.log(" -------Feladat------");
console.log(" --------------------");
console.log("");

// ---------------Csere-----------------
console.log("");
console.log(" Csere");

let a = 10;
let b = 7;
let c;

console.log(" Csere előtt A értéke: "+a+", B értéke: "+b);

let a2 = b;
let b2 = a;

console.log(" Csere után A értéke: "+a2+", B értéke: "+b2);
console.log("");
// ---------------Összeg-----------------
console.log(" --------------------");
console.log("");
console.log(" Összeg");

let osszeg = 0;
let x = [5, 7, 2, 9, 5, 4];

for (var i = 0; i < x.length; i++) {
    osszeg = osszeg + x[i];
}

console.log(" Az összeg: "+osszeg);
console.log("");

// ---------------Eldöntés-----------------
console.log(" --------------------");
console.log("");
console.log(" Eldöntés");

i = 0;
let VAN = false;

while ( i < x.length && x[i] !== 2) {
    i = i+1;
}
if ( i<=x.length ) {
    VAN = true;
}

console.log(" Van: "+VAN);
console.log("");

// ---------------Eldöntés2-----------------
console.log("");

i = 0;
VAN = false;

while ( i < x.length && x[i] !== 2) {
    i = i+1;
}
if ( i<=x.length ) {
    VAN = true;
}

console.log(" Van: "+VAN);

if ( VAN === true ) {
    console.log(" A tömb "+i+". eleme.");
} else {
    console.log(" Nincs");
}
console.log("");

// ---------------Megszámlálás-----------------
console.log(" --------------------");
console.log("");
console.log(" Megszámlálás");

let db = 0;
for (i=0; i < x.length; i++) {
    if ( x[i] === 2 ) {
        db = db+1;
    }
}
console.log(" "+db+" darab kettes van.");
console.log("");

// ---------------Maximumkiválasztás-----------------
console.log(" --------------------");
console.log("");
console.log(" Maximumkiválasztás");

let max = 0;
for (i=0; i < x.length; i++) {
    if (x[i] > x[max]) {
        max = i;
    }
}

console.log(" A "+max+". elem a legnagyobb.");
console.log("");

// ---------------Buborékrendezés-----------------
console.log(" --------------------");
console.log("");
console.log(" Buborékrendezés");

let bub;
x = [5, 7, 2, 9, 5, 4];

for ( i=x.length; i > 1; i-- ) {
    for ( let j=0; j < i-1; j++ ) {
        if ( x[j] > x[j+1] ) {
            c = x[j];
            x[j] = x[j+1];
            x[j+1] = c;
        }
    }
}

console.log(" A tömb rendezetten: "+x);

console.log("");

// ---------------Minimumkiválasztás-----------------
console.log(" --------------------");
console.log("");
console.log(" Minimumkiválasztás");

x = [5, 7, 9, 2, 5, 4];

for ( i=0; i < (x.length-1); i++ ) {
    let min = i;
    for (let j=(i+1); j < x.length; j++ ) {
        if (x[min] > x[j] ) {
            min = j;
        }
    }
    c = x[i];
    x[i] = x[min];
    x[min] = c;
}

console.log(" A tömb rendezetten: "+x);

console.log("");

// ---------------Faktoriális-rekurzív-algoritmus---------------
console.log(" --------------------");
console.log("");
console.log(" Faktoriális rekurzív algoritmus");

function fakt(N) {
    if ( N === 0 ) {
        return 1;
    } else {
        return(N*fakt(N-1));
    }
}

console.log(" 4!= "+fakt(4));