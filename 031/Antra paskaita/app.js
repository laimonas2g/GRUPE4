console.log('Hello, Kitty!');

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

/*

kai reikia suskaiciuot kartus kazkieno
for
while
do while

specialus ir keistas ciklas
switch

kai reikia pereiti per struktura
for in
for of

ciklu valdymas
continue
break

*/

for (let i = 0; i < 7; i++) {
    const random = rand(10, 99);

    if (random > 50) {
        continue;
    }

    console.log(`Nr.${i + 1} - ${random}`);

}

console.log('-------------------------');


for (let i = 0; i < 7; i++) {
    const random = rand(10, 99);

    if (random > 70) {
        break;
    }

    console.log(`Nr.${i + 1} - ${random}`);

}

console.clear();

for (let i = 0; i < 30; i++) {

    const HS = rand(0, 1) ? 'H' : 'S';
    console.log(HS);

    // if (HS == 'H') { labai blogai
    //     break;
    // }

}

console.clear();

let HS1;
let HS2;
let saugiklis = 88;

do {
    if (--saugiklis == 0) {
        console.log('BUM');
        break;
    }

    HS1 = rand(0, 1) ? 'H' : 'S';
    HS2 = rand(0, 1) ? 'H' : 'S';
    console.log(HS1, HS2);

} while (HS1 != 'H' || HS2 != 'H');


/*

== <-> !=
> <-> <=
< <-> >=
|| <-> &&


*/


// Meskite monetą tol, kol tris kartus iškris herbas
// Meskite monetą tol, kol iš eilės tris kartus iškris herbas

console.clear();

let kiekis = 0;
saugiklis = 88;

do {
    if (--saugiklis == 0) {
        console.log('BUM');
        break;
    }
    const HS = rand(0, 1) ? 'H' : 'S';
    console.log(HS);
    if (HS == 'H') {
        kiekis++;
    }


} while (kiekis != 3);