
// Duotos Funkcijos //

function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

///////////// 1. /////////////
// Naršyklėje įdėkite 14 h1 tagų su skaičiumi 4 ir 14 h4 tagų su skaičiumi 1. 
// Visi tagai turi rikiuotis į vieną eilutę.

let body1 = document.querySelector(`body`);
body1.style.display = `body`;
body1.style.flexWrap = `wrap`;
body1.style.alignItems = 'center';

for (let index = 0; index < 14; index++) {
  let h1tagai = document.createElement(`h1`);
  h1tagai.innerText = 4;
  h1tagai.style.display = 'inline-block';
  
  body1.append(h1tagai);
}

for (let index = 0; index < 14; index++) {
  let h4tagai = document.createElement(`h4`);
  h4tagai.style.display = `inline-block`;
  h4tagai.innerText = 1;
  body1.append(h4tagai);
}

body1.append(document.createElement('br'));
body1.append(document.createElement('br'));

///////////// 2. /////////////
// Naudodamiesi funkcija rand() naršyklėje eilute (tarp skaičių turi būti tarpai) surašykite 44 
// atsitiktinius skaičius nuo 14 iki 44. Skaičius, kurie iš 4 dalinasi be liekanos nuspalvinkite raudonai, 
// o kitus mėlynai.

for (let index = 0; index < 44; index++) {
  let a2 = rand(14, 44);
  let div1tagai = document.createElement(`span`);
  div1tagai.innerText = a2 + ' ';
  div1tagai.style.color = (a2 % 4) ? 'blue' : 'red';
  body1.append(div1tagai);
}

body1.append(document.createElement('br'));
body1.append(document.createElement('br'));

///////////// 3. /////////////
// In the browser, draw 14 blue circles arranged in a row.

for (let index = 0; index < 14; index++) {
  let a3 = document.createElement(`div`);
  a3.style.width = `50px`;
  a3.style.height = `50px`;
  a3.style.borderRadius = `50%`;
  a3.style.backgroundColor = `skyblue`;
  a3.style.display = 'inline-block';
  a3.style.marginRight = '4px';
  body1.appendChild(a3);
}

body1.append(document.createElement('br'));
body1.append(document.createElement('br'));

////////////// 4. //////////////
// In the browser, draw 4 blue and 4 red circles arranged in a “zebra” pattern
// (red, blue, red…).

for (let index = 0; index < 8; index++) {
  let a4 = document.createElement('div');
  a4.style.width = '50px';
  a4.style.height = '50px';
  a4.style.borderRadius = '50%';
  a4.style.backgroundColor = index % 2 == 0 ? 'red' : 'blue';
  a4.style.display = 'inline-block';
  a4.style.marginRight = '4px';
  body1.appendChild(a4);
}

body1.append(document.createElement('br'));
body1.append(document.createElement('br'));

///////////// 5. /////////////
// Naršyklėje nupieškite daygybos lentelę 4 dauginant iš skaičių nuo 4 iki 14.


for (let i = 4; i <= 14; i++) {
  let a5 = document.createElement('div');
  let product = 4 * i;
  a5.innerText = `4 × ${i} = ${product}`;
  a5.style.marginBottom = '2px';
  body1.appendChild(a5);
}

body1.append(document.createElement('br'));
body1.append(document.createElement('br'));

///////////// 6. /////////////

// Naršyklėje nupieškite linija iš 444 “*” (tarp žvaigždučių tarpų nėra).
// Programiškai “suskaldykite” (naudodami tagus atskirom žvaigždučių grupėm)
// žvaigždutes taip, kad vienoje eilutėje nebūtų daugiau nei 44 “*”.
const zvaigzdutes = 444;
const zvaigzdutesPerLinija = 44;

for (let i = 0; i < zvaigzdutes; i += zvaigzdutesPerLinija) {
  let starsai = '';
  for (let j = 0; j < zvaigzdutesPerLinija && i + j < zvaigzdutes; j++) {
    starsai += '*';
  }
  let divas6 = document.createElement('div');
  divas6.innerText = starsai;
  body1.appendChild(divas6);
}

body1.append(document.createElement('br'));
body1.append(document.createElement('br'));

///////////// 7. /////////////
// Naršyklėje nupieškite 14 atsitiktinių spalvų kvadratų esančių vienas kitame (“matrioška”).
// #pamastykKaip



///////////// 8. /////////////
// Iš simbolio &#9632; (kopijuoti visą žalią tekstą su kabliataškiu) sudėliokite žalią kvadratą 
// turintį 41x41 šių simbolių. Kad kvadratas atrodytų “kvadratiškai” panaudokite css stilių ir 
// papildomus tagus. #ciklasCikle



///////////// 9. /////////////
// Uždavinyje prieš tai nupieštam kvadratui nupieškite geltonas istrižaides (geltonai nudažykite 
// atitinkamus simbolius). #ciklasCikle



///////////// 10. /////////////
// Uždavinį atlikite atskirame html faile. Visame ekrane atsitiktine tvarka “išmėtykite“ 444 pusiau 
// permatomus atsitiktinės spalvos ir atsitiktinio skersmens nuo 44 iki 144 (px) apskritimus. 
// Apskritimai turi tolygiai (pagal funkciją rand()) dengti visą ekraną.#fun

// let body = document.querySelector('body');
// body.style.position = 'relative';

// for (let i = 0; i < 444; i++) {
//   let aDim = rand(44, 144);
//   let aDiv = document.createElement('div');
//   body.appendChild(aDiv);
//   aDiv.style.width = aDim + 'px';
//     aDiv.style.height = aDim + 'px';
//       aDiv.style.borderRadius = '50%';
//         aDiv.style.backgroundColor = randomColor() + '80';
//           aDiv.style.position = 'absolute';
//             aDiv.style.top = rand(0, 100) + 'vh';
//               aDiv.style.left = rand(0, 100) + 'vw';
// }


























