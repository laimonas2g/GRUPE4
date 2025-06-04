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
}                                       // library daro dinamiskuma, mokinsimes React

document.querySelector('#d1').innerHTML = dHtml; // labai labai letas


const sekcija2 = document.querySelector('#d2');
for (let i = 0; i < D.length; i++) {
    const span = document.createElement('span');
    span.innerText = D[i];
    sekcija2.appendChild(span);
}
 
// idet Div'us
const sekcija3 = document.querySelector('#d3');
const sekcija4 = document.querySelector('#d4');




const melynas1 = '<h1 style="color:skyblue";>Barsukas</h1>'; // cia stringas
sekcija3.innerHTML = melynas1;

// NamDarbam Naudojam !!!!!!!!!!  Greitas budas, veliau React
const melynas2 = document.createElement('h1'); // cia objektas (pilnavertis HTML obj)
melynas2.style.color = 'skyblue'; // objektui duodam savybe
melynas2.innerText = 'Barsukas'; // radom DOM elementa, spalvas, teksta kaitalioti
sekcija4.appendChild(melynas2); // objekta iterpiam i html


































