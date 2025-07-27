console.log('Labas, Briedi');

const zodis1 = 'Zuikis';

const antraRaide = zodis1[1];

// Zodi "Didziulis" naudojant cikla for konsoleje atspaudinti po viena raide eiluteje


// const zodis2 = 'Didziulis';
// const antraRaide = zodis1[1];

// for (let i = 0; i < Didziulis.length; i++){ 
//   }


const D = 'Didziulis';

for (let i = 0; i < D.length; i++) {
  console.log(D[i]);
}

let dHtml = '';

for (let i = 0; i < D.length; i++) {
 dHtml += '<span>' + D[i] + '</span>'; // sukure span'a html'e, pasiima is CSS
}                                     

document.querySelector('#d1').innerHTML = dHtml; // labai labai letas


const sekcija2 = document.querySelector('#d2'); //Greitas budas
for (let i = 0; i < D.length; i++) {
    const span = document.createElement('span');
    span.innerText = D[i];
    sekcija2.appendChild(span);
}
 
// idet
const sekcija3 = document.querySelector('#d3');
const sekcija4 = document.querySelector('#d4');
const sekcija31 = document.querySelector('#d31');
const sekcija41 = document.querySelector('#d41');



const melynas1 = '<h1 style="color:skyblue";>Barsukas</h1>'; // CIA STRINGAS, pagal value
sekcija3.innerHTML = melynas1;      
sekcija31.innerHTML = melynas1;  

// NamuDarbam Naudojam !!!!!!!!!!  Greitas budas, veliau React  pagal reference
const melynas2 = document.createElement('h1'); // CIA OBJEKTAS (pilnavertis HTML obj)
melynas2.style.color = 'skyblue'; // objektui duodam savybe
melynas2.innerText = 'Barsukas'; // radom DOM elementa, spalvas, teksta kaitalioti
sekcija4.appendChild(melynas2); // objekta iterpiam i html
sekcija41.appendChild(melynas2); // melynas2 yra objektas, melynas1 yra stringas

if ('A' > 'a') {
  console.log('Jo');
} else {
  console.log('Ne');
}

const zodis2 = 'An-tan--as';

console.log(zodis2.charCodeAt(0));

console.log(zodis2.repeat(200));

console.log(zodis2.split('--')); // dalina ir padaro stringo masyva

const two = zodis2.split('--');


console.log(two);

const all = []

for (let i = 0; i < two.length; i++) {
  all.push(...two[i].split('-')); // spread operatorius
}
console.log(all);

// Yra zodis "Ananasas". Reikai su for ciklu pereiti kiekviena raide ir konsoleje spausdinti
// tik tada jeigu raide yra a

const str1 = 'Ananasas';

for (let i = 0; i < str1.length; i++) {
  str1[i] == 'a' && console.log(str1[i]);
}

// pasidaryti su if



// = vienas lygybes zenklas yra priskyrimas, == palyginimo operatorius




















