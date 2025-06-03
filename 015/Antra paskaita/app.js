console.log('Labas, Bebrionai!');

const namas = { // object - Maishas, nera eiliskumo
  aukstai: 2,
  kambariai: 5,
  langai: true
};

const piestukai = [ //Masyvas - array, grieztas eiliskumas (tvarka)
  'raudonas',
  'mėlynas',
  'žalias',
  'geltonas'
];

console.log(namas.kambariai);

piestukai[2] = 'oranzinis';

piestukai[4] = 'rozinis';

piestukai.push('baltas'); // pushas, visalaik deda i Masyvo pabaiga


console.log(piestukai[1]); // Masyvo eiles numeris - Indeksas
console.log(piestukai.length); // kiek Masyve elementu

console.log(piestukai, piestukai.length); // suklys, jei 'empty' yra

const temp = piestukai[0] //saugome pirmo piestuko spalva i temp kintamaji
piestukai[0] = piestukai[3] // pirma piestuka pakeiciame i ketvirta
piestukai[3] = temp; // kevtrita piestuka pakeiciame i pirma spalva

console.log(piestukai, piestukai.length); // isvedame piestuko masyva ir jo ilgi
// INDEXO KEISTI NEGALIMA, reikia perstumti

//array
const objektynas = [
  { a: 1, b: 2 }, // Nepriklausomi su a ir b reikshme
  { a: 3, b: 4 },
  777,
  { a: 7, b: 8 }
];

const A = objektynas[0];
objektynas.push(A);

objektynas[0].a = 10; //pakeiciame pirmo objekto reiksme i 10
objektynas[0].c = 20;// pridedame nauja savybe c su reiksme 20

console.log(objektynas);

for (let i = 0; i < 10; i++) {     // i = skaiciuotuvas, kol True, padidinam vienu vientu
  console.log('GA GA');
}

for (let i = 0; i < piestukai.length; i++) {
  console.log(piestukai[i]);
}
// console.log(`Pieštukas ${i + 1}: ${piestukai[i]}`); /padare piestuko numeri


let htmlLis = '';

for (let i = 0; i < piestukai.length; i++) {
  // htmlLis += '<li>${piestukai[i]}</li>'; // +=sintakse nes $, backitai su $ ir garbanuotom, kitaip pliusuot
  htmlLis += '<li>' + piestukai[i] + '</li>'; // 
}

console.log(htmlLis);

const ul = document.querySelector('ul'); // pasirenkame ul elementa
ul.innerHTML = htmlLis; // irasone sukurta HTML i ul elementa
// ul.innerText = htmlLis;

// innerText kaip teksta, innerHTML kaip html viduje esanti elementa?

const allLis = document.querySelectorAll('li') // pasirenkame visus li elementus

console.log(allLis) //isvedame visus li elementus

for (let i = 0; i < allLis.length; i++) {
  const li = allLis[i];
  if (i % 2) { //if (i === 2), kas antra %, i yra skaiciai, % yra dalyba su liekana, jei i = 4 padalinam is 2, liekana, tada false, nudazom crimson, jei 3 / 2, liekana, 1 verciamas i logini kintamaji true 0/0 liekana 0
    li.style.color = 'green';
  } else {
    li.style.color = 'crimson';
  }
}

// vienintelis 0 yra False, visi kiti yra True, tuscias stringas yra false, visi kiti true

























