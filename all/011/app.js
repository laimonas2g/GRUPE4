console.log('Labas, Bebrai!');


console.log(87 + 13);
console.log('87' - '13'); // nelogiska, js apsiruke
console.log('a' - 'b');
// visi skaiciai js yra number tipas
// visi tekstai js yra string tipas

let manoKintamasis = 17;   // galima keisti, nes let
const manoKintamasis2 = 3; // negalima keisti, nes const

manoKintamasis = '20'; 
console.
log('kadsasdasdasdasd');




console.log(typeof manoKintamasis);

console.log(manoKintamasis * manoKintamasis2);

let medis = {};// objektas, kuris turi savybes ir funkcijas

medis.tipas = 'Liepa';
medis.aukstis = 24;
medis.matavimoVienetai = 'm';
medis.amzius = {};
medis.amzius.reiksme = 25;
medis.amzius.matavimas = 'metai';

console.log(medis);

const manoH1 = document.querySelector('h1');

manoH1.style.color = 'crimson';
manoH1.style.fontSize = '50px';

console.log(manoH1);

const p1 = document.querySelector('p'); // pirmas p elementas
const p2 = document.querySelector('p + p'); 

p1.style.color = 'skyblue';
p2.style.color = 'skyblue';

const p3 = document.querySelector('p + p +p'); // trecias p elementas

// p3.innerText = 'Meska';

const mano = 'Vista'; // tekstas, string tipas

p3.innerHTML = '<span class="animal">Me<b>s</>ka</span>'; // pakeicia teksta i html

// const allP = document.querySelectorAll('p'); // visi p elementai

// console.log(allP);

// allP.forEach(el => el.style.color = 'skyblue');
  






























