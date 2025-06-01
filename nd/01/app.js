// 1.

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

// 2.

let keturkampis = document.querySelector('code + div');
keturkampis.style.width = '150px';
keturkampis.style.height = '150px';
keturkampis.style.backgroundColor = 'blue';

let apskritimas = document.querySelector('code + div + div');
apskritimas.style.width = '150px';
apskritimas.style.height = '150px';
apskritimas.style.backgroundColor = 'red';
apskritimas.style.borderRadius = '50%';

// 3.


// let pirmasKint = function rand(min, max) {
//     const minCeiled = Math.ceil(min);
//     const maxFloored = Math.floor(max);
//     return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);                                                             

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
console.log(iksas1);

let iksas2 = rand(0, 4);
console.log(iksas2);

if (iksas1 > iksas2) {
  let atsakymas = document.getElementById("go3").innerHTML = (iksas1 / iksas2);
  // console.log(iksas1 / iksas2);
}

else if (iksas1 < iksas2) {
  let atsakymas = document.getElementById("go3").innerHTML = (iksas2 / iksas1);
  // console.log(iksas2 / iksas1);
}

// else if (iksas1 == 0 || iksas2 == 0) {
// let atsakymas = document.getElementById("go3").innerHTML = "Nulis!";
// console.log('nulis');
// };

/////// 4. /////// NEISPRESTAS!
// Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 50 iki 200. 
// Iš section tage su id=go4 esančių div tagų padarykite atitinkamo dydžio (px) apskritimus. 
// Apskritimai turi būti išdėlioti eilute nuo mažiausio iki didžiausio.

let a1 = rand(50, 200);
console.log(a1);

let a2 = rand(50, 200);
console.log(a2);

let a3 = rand(50, 200);
console.log(a3);

if (a1 > a2 && a1 > a3) {
  console.log(a1 + " largest number.");
  // apskritimas1 = document.getElementById("go4");
  // apskritimas1.style.width = '${a1}px';
  // apskritimas1.style.height = '${a1}px';
  // apskritimas1.style.backgroundColor = 'green';
  // apskritimas1.style.borderRadius = '50%';
}

else if (a2 > a1 && a2 > a3) {
  console.log(a2 + " largest number.");
  // let apskritimas2 = document.querySelector('section + div + div');
  // apskritimas2.style.width = '${a2}px';
  // apskritimas2.style.height = '${a2}px';
  // apskritimas2.style.backgroundColor = 'green';
  // apskritimas2.style.borderRadius = '50%';
}

else {
  console.log(a3 + " largest number.");
}

// document.querySelector('section + div');

// apskritimas1 = document.getElementById("go4");
// apskritimas1.style.width = 'a1';
// apskritimas1.style.style.height = 'a1';
// apskritimas1.style.style.backgroundColor = 'green';
// apskritimas1.style.borderRadius = '50%';

/////// 5. /////// NEISPRESTAS!

// Naudokite funkcija rand(). 
// Į section tage su id=go5 esančius span įrašykite 3 skaičius nuo -10 iki 10. 
// Skaičius mažesnių už 0 spausdinkite raudonai,  
// didesnius už 0 mėlynai, 
// o 0 žaliai.

let b1 = rand(-10, 10);
console.log(b1)
let b2 = rand(-10, 10);
console.log(b2)
let b3 = rand(-10, 10);
console.log(b3)

if (b1 > 0 && b2 > 0 && b3 > 0 ) {
  console.log('green')
}

else if (b2 > 0) {
  console.log('blue')
}

else if (b3 > 0) {
  console.log('red')
} 


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





















