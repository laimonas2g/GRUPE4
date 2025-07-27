console.log('Have fun!');


const manoStringas = 'AAA';

const manoStringas2 = 'A'.repeat(3);

const manoFunkcija = function () {
  return 'BBB';
}

console.log(manoStringas);

console.log(manoFunkcija);

console.log(manoFunkcija())

const manoFunkcija2 = function () {
  return 'B'.repeat(3);
}

console.log(manoFunkcija2());

const manoFunkcija3 = function (kiekis) { // funkcijso deklaravimas, (kiekis - parametras, 'kintamasis')
  kiekis = kiekis + 2;
  return 'B'.repeat(kiekis); // b repeat 5, b repeat 10, b repeat 15
}

console.log(manoFunkcija3(5)); // funkcijos naudojimas (5 - argumentas, 'reiksme')
console.log(manoFunkcija3(10)); // funkcijos naudojimas
console.log(manoFunkcija3(15)); // funkcijos naudojimas


const fun1 = function (pa1, pa2) {
  const rez = pa1 + pa2;
  return rez;
}

const sk1 = 8;

console.log(fun1(8, 1));
console.log(fun1(sk1, 1));


const fun2 = function (pa1, pa2, pa3 = 5, pa4) { // pa3 - defaultine reiksme
  const rez1 = pa1 + pa2;
  const rez2 = pa1 + pa2 + pa3 + pa4;
  const rez = [rez1, rez2]; // masyvas

  // const rez = {}; // objektas {}
  // rez.r1 = rez1;
  // rez.r2 = rez2;  

    // const rez = []; // masyvas []
  // rez.push(rez1)
  // rez.push(rez2)

  return rez; // tik viena
}
console.log(fun2(2, 4, 100, 4));

// desim i objekto vidu

// /Parašykite funkciją kuri gauna du skaičius ir gražina didesnį (dėl paprastumo tarkim, kad skaičiai niekad nebus lygus)

function mano1(pa1, pa2) {
  if(pa1 > pa2) {
    return pa1;  
  } else {
    return pa2;
  }
}

console.log(mano1(6, 20));
console.log(mano1(14, 2));

const daugiau = function(sk1, sk2) {
  let rez; //uzsideklaruoju rezultata
  if (sk1 > sk2) {
    rez = sk1;
  } else {
    rez = sk2;
  }
  return rez;
}

console.log(daugiau(5,8));
console.log(daugiau(10,7));

const daugiau2 = function(sk1, sk2) {
  let rez; //uzsideklaruoju rezultata
  if (sk1 > sk2) {
    return sk1;   // returnas nutraukia funkcijos veikima, ishejimas
  }
  return sk2; // daroma, jei pirma salyga neatitiko
}
console.log(daugiau2(11,8));
console.log(daugiau2(10,11));

const daugiau3 = function(sk1, sk2) {
  return sk1 > sk2 ? sk1 : sk2; // ternary ? if; : else
}

console.log(daugiau3(5,8));
console.log(daugiau3(10,7));

// desim i objekto vidu

const obuoliai = function(){
  return this.sakos * 5
}

console.log(obuoliai());

const medis = {};

medis.sakos = 10;

medis.obuoliai = function() { //neturi parametro , nes grazina obuoliu skaiciu
  return this.sakos * 5; // this - kontekstinis zodelis
}
console.log(medis.obuoliai());

// const medis2 {};

// medis2.sakos = 31;

// medis2.obuoliai = obuoliai;

// console.log(obuoliai());
//================================================

// nieko negrazinanti funkcija 
const hVienas = function(tekstas, spalva = 'crimson') { //anonimine funkcija
const section = document.querySelector('section');
const h1 = document.createElement('div');
h1.style.color = spalva;
h1.innerText = tekstas;
section.appendChild(h1);
}

hVienas('Bebras');
hVienas('Barsukas',  'orange');
hVienas('Briedis');
hVienas('Bebras');

function suma(a,b) { // vardine funkcija
  return a + b;
}


function suma(a,b) { // vardine funkcija
  return a * b;
}

const suma2 = function(a,b) { // taip geriau
  return a + b;
}

// const suma2 = function(a,b) { // parodo klaida
//   return a * b;
// }


console.log(suma(5, 6))
























// function isEven(num) {
//   if(num % 2 === 0) {
//     return true;  
//   } else {
//     return false;
//   }
// }

// console.log(isEven(3));


You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

a can contain numbers or strings. x can be either.

Return true if the array contains the value, false if not.