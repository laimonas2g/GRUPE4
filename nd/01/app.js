/////// 1. ///////

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

/////// 2. ///////

let keturkampis = document.querySelector('code + div');
keturkampis.style.width = '150px';
keturkampis.style.height = '150px';
keturkampis.style.backgroundColor = 'blue';

let apskritimas = document.querySelector('code + div + div');
apskritimas.style.width = '150px';
apskritimas.style.height = '150px';
apskritimas.style.backgroundColor = 'red';
apskritimas.style.borderRadius = '50%';

/////// 3. ///////

// Sukurkite du kintamuosius ir naudodamiesi funkcija rand() 
// jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. 
// Didesnę reikšmę padalinkite iš mažesnės. 
// Kintamuosius ir gautą rezultatą įrašykite į atitinkamus span tagus, 
// esančius section tage su id=go3.

function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

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

/////// 4. ///////

// Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems 
// priskirkite atsitiktines reikšmes nuo 50 iki 200. Iš section tage su 
// id=go4 esančių div tagų padarykite atitinkamo dydžio (px) apskritimus. 
// Apskritimai turi būti išdėlioti eilute nuo mažiausio iki didžiausio.

let a1 = rand(50, 200);
let a2 = rand(50, 200);
let a3 = rand(50, 200);
console.log(a1);
console.log(a2);
console.log(a3);
let span4_1 = document.querySelector('#go4 div');
let span4_2 = document.querySelector('#go4 div:nth-child(2)');
let span4_3 = document.querySelector('#go4 div:nth-child(3)');
span4_1.innerText = a1;
span4_2.innerText = a2;
span4_3.innerText = a3;

if (a1 > a2 && a1 > a3) {
  console.log(a1 + " largest number.");
  // apskritimas1 = document.getElementById("go4");
  // apskritimas1.style.width = '{a1}px';
  // apskritimas1.style.height = '{a1}px';
  // apskritimas1.style.backgroundColor = 'green';
  // apskritimas1.style.borderRadius = '50%';
}

else if (a2 > a1 && a2 > a3) {
  console.log(a2 + " largest number.");
  // let apskritimas2 = document.querySelector('section + div + div');
  // apskritimas2.style.width = '{a2}px';
  // apskritimas2.style.height = '{a2}px';
  // apskritimas2.style.backgroundColor = 'green';
  // apskritimas2.style.borderRadius = '50%';
}

else {
  console.log(a3 + " largest number.");
}

// document.querySelector('section + div');

// apskritimas1 = document.getElementById("go4");
// apskritimas1.style.width = 'a3';
// apskritimas1.style.style.height = 'a3';
// apskritimas1.style.style.backgroundColor = 'green';
// apskritimas1.style.borderRadius = '50%';


/////// 5. ///////

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
} else 
{spanas1.style.color = 'green';
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

/////// 6. ///////

// Įmonė parduoda žvakes po 1 EUR. 
// Perkant daugiau kaip 1000 EUR taikoma 3 % nuolaida, 
// daugiau kaip už 2000 EUR - 4 % nuolaida. 
// Parašykite skriptą, kuris skaičiuos žvakių kainą ir užpildykite formą 
// easnčią section tage su id=go6. Žvakių kiekį generuokite ​rand() funkcija nuo 5 iki 3000.




/////// 7. ///////

// Naudokite funkciją rand(). Parašykite skriptą, 
// kuris atsitiktine tvarka generuotų ir iš section su  id=go7 esančio div tago padarytų apskritimą, 
// arba keturkampį arba trikampį.




/////// 8. ///////

// Suskaičiuoti kiek kiekvienos spalvos apskritimų yra section su id=go8. 
// Rezultatus įrašyti į šalia tam skirtas vietas.




// 9. #go9
// 2 X 8 = console.log(2*8);
// 3 X 3 = console.log(3*3);
// 1 X 3 =
// 3 X 6 =
// 3 X 4 =

// let daugyba1 = document.querySelector('#go9')
// console.log('2*9 = 18');


// 10.
// <div data-sq-1="" style="width:190px; height:65px;"></div>
// <div data-sq-2="" style="width:192px; height:67px;"></div>
// <div data-sq-3="" style="width:86px; height:107px;"></div>
// <div data-sq-4="" style="width:55px; height:82px;"></div>
// <div data-sq-5="" style="width:157px; height:92px;"></div>

// x1 * x2 = x3; if x3 > 10000 px,
// then background-color: red;





















