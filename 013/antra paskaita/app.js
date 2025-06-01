console.log('Labas, Bebrai');

// const stringas1 = 'Bebras';
// const stringas2 = ' ';
// const stringas3 = ''; // tuscias stringas
//                           // hackinsi konvertavimas
// const log1 = !!stringas1; // ! = loginis kint, stringas1 pakeiciamasi log kintamaji true, ir gaunu false, norejau gauti true
// const log2 = !!stringas2;                          // !! - antras sauktuaks atvercia atgal
// const log3 = !!stringas3;

// console.log(log1, log2, log3); 

// const skaicius4 = 55;
// const skaicius5= -4.55;
// const skaicius6 = 0; // vienintelis is skaiciu - false

// const log4 = !!skaicius4; 
// const log5 = !!skaicius5;
// const log6 = !!skaicius6;

// console.log(log4, log5, log6);


/*
> daugiau
< maziau
>= daugiau arba lygu
<= maziau arba lygu
!= nelygu
== lygu (lyginam reiksmes, neatitinka tipai vistiek lygu 5 == '5')
!== neadekvatu (griezta lygybe, tipas neatitinka)
=== adekvatu 
*/

if (5 === '5') { //teoretiskai sitas tikrinimas yra greitesnis, pirma tipas, tada reiksme
  // šaka true
  console.log('O...taip!');
}
else {
  // šaka false
  console.log('O...ne!');
}

if (5 || 0) { //teoretiskai sitas tikrinimas yra greitesnis, pirma tipas, tada reiksme
  // šaka true
  console.log('O...taip!');
}
else {
  // šaka false
  console.log('O...ne!');
}

//  || grazina pirma true reiksme

//  && grazina pirma false reiksme, jei 0


// const A = 5 && 6; (6)
//const A = 5 || 6 || 8; ()
//const A = 1 || 9 || 8; ()
//const A = 1 || 9 || 8; ()
//const A = 1 & 9 & 8; (nueina iki galo ir palieka 8) (iki rezultato eina, jis juo nekonvertuoaj)
// pirmenybe skliausteliais atskiriame

// const A = 1 || 9 || 10; - pirmas, nes pirmas patikrintas True
// const A = 1 && 8 && 9; // - 9, nes paskutinis patikrintas True

// console.log(A);

const A = (5 || 8) + (7 || 2);

console.log(A);

if (5 > 4 && 7 > 2) { // true tada, kai abudu true
  console.log('O...taip!');
}
else {
  console.log('O...ne!');
}

const B = 9;

if (B > 9) {
  console.log('B daugiau uz 9');
}

else if (8 == 9) {
  console.log('B lygu 9');
}

else {
  console.log('B maziau uz 9'); //turetu but lygu 9, klaida kazkur !!!!!
}



// Ternary - priskiriamoji salyga


// const C = 11;
// let atsakymas;

// if (C == 1) {
//   atsakymas = 'C yra vienas';
// } else {
//   atsakymas = 'C nera vienas';
// }

// console.log(atsakymas);

const C = 1;
let atsakymas

if (C == 1) {
  atsakymas = 'C yra vienas'; //reiksme priskirta veliau
} else {
  atsakymas = 'C nera vienas';
}

console.log(atsakymas);

const atsakymas2 = C == 1 ? 'C yra vienas' : 'C nera vienas'; // terneris, pirma po klaustuko, antra po dvitaskio
// jeigu true po klaustiko, jeigu false to dvitaskio
console.log(atsakymas2);

let KI;


if (C == 1) {
  atsakymas = 'C yra vienas'; //reiksme priskirta veliau
} else {
  atsakymas = 'C nera vienas';
}


const s = 'green';

const turiu = s === 'green' ? 'Zalias' : s == 'red' ? 'Raudonas' : 'Kitas'; //gausi per nagus, issidirbinejimas

console.log(turiu);











