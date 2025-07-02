console.log('Hello, Kitty!');

function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

/*

kai reiskia suskaiciuoti kartus kazkieno
for
while
do while

specialus ir keistas ciklas
switch

kai reikia pereit per struktura
for in
for of

ciklus valdymas
continue
break

*/

for (let i = 0; i < 7; i++) {
  const random = rand(10, 99);

  if (random > 50) {
    continue; // nevykes pavadinimas, peršoka ir pradeda is naujo iki kito jump
  }

  console.log(`Nr.${i + 1} - ${random}`)
}

console.log('-------------------')

for (let i = 0; i < 7; i++) {
  const random = rand(10, 99);

  if (random > 70) {
    break; // nutraukia cikla
  }

  console.log(`Nr.${i + 1} - ${random}`)
}

console.clear();

// for (let i = 0; i < 30; i++) {

//   const HS = rand(0, 1) ? 'H' : 'S';
//   console.log(HS);

//   // if (HS == 'H') { labai blogai
//   //   break;
//   // }
// }

console.clear();

let HS1;
let HS2;
let saugiklis = 88;

do {
  if (--saugiklis == 0) {  // rankinis stabdis
    console.log('Klaida, uzsiciklinai!!!');
    break;
  }


  HS1 = rand(0, 1) ? 'H' : 'S';
  HS2 = rand(0, 1) ? 'H' : 'S';
  //   const HS1 = rand(0, 1) ? 'H' : 'S';
  // // const HS2 = rand(0, 1) ? 'H' : 'S';
  // console.log(HS1, HS2);

} while (HS1 != 'H' || HS2 != 'H');
// } while (HS1 != 'H' && HS2 != 'H');

/*

<-> - verciam

== <-> !=
> <-> <=
> <-> >=
|| <-> &&


*/
// Meskite monetą tol, kol tris kartus iškris herbas

let HS3;
let saugiklis3 = 100;

do {
  if (--saugiklis3 == 0) {
    console.log('Klaida, uzsiciklinai!!!');
    break;
  }

  HS1 = rand(0, 1) ? 'H' : 'S';
  HS2 = rand(0, 1) ? 'H' : 'S';
  HS3 = rand(0, 1) ? 'H' : 'S';
  console.log(HS1, HS2, HS3);

} while (HS1 != 'H' || HS2 != 'H' || HS3 != 'H');

// Meskite monetą tol, kol iš eilės tris kartus iškris herbas

let kiekis = 0;
saugiklis = 10000;

do {
    if (--saugiklis3 == 0) {
    console.log('BUM');
    break;
  }

  const HS = rand(0, 1) ? 'H' : 'S';
  console.log(HS);
  if (HS == 'H') {
    kiekis++;
  }

} while (kiekis != 3);
























