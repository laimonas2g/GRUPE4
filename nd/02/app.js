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
  body1.style.display = `flex`;
  body1.style.alignItems = 'center';

for (let index = 0; index < 14; index++) {
  let h1tagai = document.createElement(`h1`);
  h1tagai.innerText = 4;
  body1.append(h1tagai);
}

for (let index = 0; index < 14; index++) {
  let h4tagai = document.createElement(`h4`);
  h4tagai.style.display = `inline-block`;
  h4tagai.innerText = 1;
  body1.append(h4tagai);
}

///////////// 2. /////////////
// Naudodamiesi funkcija rand() naršyklėje eilute (tarp skaičių turi būti tarpai) surašykite 44 
// atsitiktinius skaičius nuo 14 iki 44. Skaičius, kurie iš 4 dalinasi be liekanos nuspalvinkite raudonai, 
// o kitus mėlynai.

for (let index = 0; index < 44; index++) {
  let a2 = rand(14, 44);
  console.log(a2)
  let div1tagai = document.createElement(`div.klase1`);
  div1tagai.innerText = a2;
  div1tagai.style.display = `flex`;
  body1.append(div1tagai);
  if (a2 % 4) div1tagai.style = `color: blue`;
  else div1tagai.style = `color: red`;
};

///////////// 3. /////////////
// In the browser, draw 14 blue circles arranged in a row.

for (let index = 0; index < 14; index++) {
  let a3 = document.createElement(`div`);
  a3.style.color = 'skyblue';
  body1.appendChild(a3)
  a3.style.width = `50px`;
  a3.style.height = `50px`;
  a3.style.borderRadius = `50%`;
  a3.style.backgroundColor = `skyblue`;
}

////////////// 4. //////////////
// In the browser, draw 4 blue and 4 red circles arranged in a “zebra” pattern
// (red, blue, red…).

for (let index = 0; index < 8; index++) {
  let a4 = document.createElement('div');
  a4.style.width = '50px';
  a4.style.height = '50px';
  a4.style.borderRadius = '50%';
  a4.style.backgroundColor = index % 2 == 0 ? 'red' : 'blue';
  body1.appendChild(a4);
}

///////////// 5. /////////////
// Naršyklėje nupieškite daygybos lentelę 4 dauginant iš skaičių nuo 4 iki 14.


///////////// 6. /////////////

// Naršyklėje nupieškite linija iš 444 “*” (tarp žvaigždučių tarpų nėra).
// Programiškai “suskaldykite” (naudodami tagus atskirom žvaigždučių grupėm)
// žvaigždutes taip, kad vienoje eilutėje nebūtų daugiau nei 44 “*”.


///////////// 7. /////////////




///////////// 8. /////////////




///////////// 9. /////////////




///////////// 10. /////////////




























