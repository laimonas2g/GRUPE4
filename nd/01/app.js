
function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

///////////// 1. /////////////

let h1 = document.querySelector('h1');
h1.innerText = 1;
h1.style.color = 'crimson';

let h2 = document.querySelector('h2');
h2.innerText = 2;

let h3 = document.querySelector('h3');
h3.innerText = 3;
h3.style.color = 'crimson';

let h4 = document.querySelector('h4');
h4.innerText = 4;
h4.style.color = 'blue';

console.log('h1');

///////////// 2. /////////////

let keturkampis = document.querySelector('code + div');
keturkampis.style.width = '150px';
keturkampis.style.height = '150px';
keturkampis.style.backgroundColor = 'blue';

let apskritimas = document.querySelector('code + div + div');
apskritimas.style.width = '150px';
apskritimas.style.height = '150px';
apskritimas.style.backgroundColor = 'red';
apskritimas.style.borderRadius = '50%';

///////////// 3. /////////////

// Sukurkite du kintamuosius ir naudodamiesi funkcija rand() 
// jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. 
// Didesnę reikšmę padalinkite iš mažesnės. 
// Kintamuosius ir gautą rezultatą įrašykite į atitinkamus span tagus, 
// esančius section tage su id=go3.

let iksas1 = rand(0, 4);
let iksas2 = rand(0, 4);
console.log(iksas1);
console.log(iksas2);

let span3_1 = document.querySelector('#go3 span');
let span3_2 = document.querySelector('#go3 span:nth-child(2)');

span3_1.innerText = iksas1;
span3_2.innerText = iksas2;

if (iksas1 > iksas2) {
  let iksasR1 = (iksas1 / iksas2);
  let span3_3 = document.querySelector('#go3 span:nth-child(3)');
  span3_3.innerText = iksasR1;
}

else if (iksas1 < iksas2) {
  let iksasR1 = (iksas2 / iksas1);
  let span3_3 = document.querySelector('#go3 span:nth-child(3)');
  span3_3.innerText = iksasR1;
};

////////////// 4. //////////////

// Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems 
// priskirkite atsitiktines reikšmes nuo 50 iki 200. Iš section tage su 
// id=go4 esančių div tagų padarykite atitinkamo dydžio (px) apskritimus. 
// Apskritimai turi būti išdėlioti eilute nuo mažiausio iki didžiausio.

let a1 = rand(50, 200);
let a2 = rand(50, 200);
let a3 = rand(50, 200);

let dydziai4 = [
  { dydis: a1, color: 'green' },
  { dydis: a2, color: 'blue' },
  { dydis: a3, color: 'red' }
];

// Sort from smallest to largest
dydziai4.sort((a, b) => a.dydis - b.dydis);

let go4 = document.querySelector('#go4');
let divai = go4.querySelectorAll('div');

for (let index = 0; index < 3; index++) {
  let d = divai[index];
  d.style.width = dydziai4[index].dydis + 'px';
  d.style.height = dydziai4[index].dydis + 'px';
  d.style.backgroundColor = dydziai4[index].color;
  d.style.borderRadius = '50%';
  d.innerText = dydziai4[index].dydis;
}

///////////// 5. /////////////

// Naudokite funkcija rand(). 
// Į section tage su id=go5 esančius span įrašykite 3 skaičius nuo -10 iki 10. 
// Skaičius mažesnių už 0 spausdinkite raudonai,  
// didesnius už 0 mėlynai, 
// o 0 žaliai.

let b1 = rand(-10, 10);
console.log(b1);
let b2 = rand(-10, 10);
console.log(b2);
let b3 = rand(-10, 10);
console.log(b3);

let spanas1 = document.querySelector('#go5 span');
let spanas2 = document.querySelector('#go5 span:nth-child(2)');
let spanas3 = document.querySelector('#go5 span:nth-child(3)');
console.log(spanas1);
console.log(spanas2);
console.log(spanas3);
spanas1.innerText = b1;
spanas2.innerText = b2;
spanas3.innerText = b3;

if (b1 < 0) {
  spanas1.style.color = 'red';
} else if (b1 > 0) {
  spanas1.style.color = 'blue';
} else {
  spanas1.style.color = 'green';
};

if (b2 < 0) {
  spanas2.style.color = 'red';
} else if (b2 > 0) {
  spanas2.style.color = 'blue';
} else {
  spanas2.style.color = 'green';
};

if (b3 < 0) {
  spanas3.style.color = 'red';
} else if (b3 > 0) {
  spanas3.style.color = 'blue';
} else {
  spanas3.style.color = 'green';
};

///////////// 6. /////////////

// Įmonė parduoda žvakes po 1 EUR. 
// Perkant daugiau kaip 1000 EUR taikoma 3 % nuolaida, 
// daugiau kaip už 2000 EUR - 4 % nuolaida. 
// Parašykite skriptą, kuris skaičiuos žvakių kainą ir užpildykite formą 
// easnčią section tage su id=go6. Žvakių kiekį generuokite ​rand() funkcija nuo 5 iki 3000.

let ZvakeQuantity = rand(5, 3000);
console.log(ZvakeQuantity);

let unitPrice = 1; 
let subtotal = ZvakeQuantity * unitPrice;
let discount = 0;

if (subtotal > 2000) {
  discount = 4;
  subtotal *= 0.96;
} else if (subtotal > 1000) {
  discount = 3;
  subtotal *= 0.97;
}

let totalPrice = subtotal;

console.log(totalPrice);

document.querySelector('[data-amount] span').textContent = ZvakeQuantity;
document.querySelector('[data-subtotal] span').textContent = ZvakeQuantity * unitPrice;
document.querySelector('[data-discount] span').textContent = discount;
document.querySelector('[data-total] span').textContent = totalPrice.toFixed(2);


///////////// 7. /////////////

// Naudokite funkciją rand(). Parašykite skriptą, 
// kuris atsitiktine tvarka generuotų ir iš section su  id=go7 esančio div tago padarytų apskritimą, 
// arba keturkampį arba trikampį.

let n7 = rand(1, 3);
let a7 = document.querySelector('#go7 div');

if (n7 == 1) {
  a7.style.backgroundColor = 'red';
  a7.style.borderRadius = '50%';
  a7.style.width = '70px';
  a7.style.height = '70px';
  console.log('Apskritimas');
}

else if (n7 == 2) {
  a7.style.backgroundColor = 'red';
  a7.style.width = '70px';
  a7.style.height = '70px';
  console.log('Keturkampis');
}

else if (n7 == 3) {
  a7.style.borderBottom = '70px solid red';
  a7.style.borderRight = '70px solid transparent';
  a7.style.borderLeft = '70px solid transparent';
  a7.style.width = '0px';
  a7.style.height = '0px';
  console.log('Trikampis');
}


///////////// 8. /////////////

// Suskaičiuoti kiek kiekvienos spalvos apskritimų yra section su id=go8.


let go8 = document.querySelector('#go8');
let apskritimai8 = go8.querySelectorAll('div:not([data-result])');

let raudoni = 0;
let zali = 0;
let melyni = 0;

for (let i = 0; i < apskritimai8.length; i++) {
  let color = apskritimai8[i].style.backgroundColor;
  if (color === 'red') raudoni++;
  else if (color === 'green') zali++;
  else if (color === 'blue') melyni++;
}

go8.querySelector('p[data-green] span').innerText = zali;
go8.querySelector('p[data-red] span').innerText = raudoni;
go8.querySelector('p[data-blue] span').innerText = melyni;



///////////// 9. /////////////

// Užpildyti daugybos lentelę, esančią tage section su id=go9.

let go9 = document.querySelector('#go9');
let eilutes = go9.children;

for (let i = 0; i < eilutes.length; i++) {
  let spanai = eilutes[i].children;
  let a = +spanai[0].textContent;
  let b = +spanai[1].textContent;
  spanai[2].textContent = a * b;
}


///////////// 10. /////////////

// Keturkapius, esančius tage section su id=go10, 
// kurių plotas didesnis nei 10000 (px) nuspalvinkite raudonai.



















