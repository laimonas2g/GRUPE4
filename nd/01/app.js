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
//                                   
//                              
//       document.getElementById("go3").innerHTML = `
//     <span id="var1">Variable 1: ${a}</span>
//     <span id="var2">Variable 2: ${b}</span>
//     <span id="result">Result: ${result}</span>
//   `;                        
// }

// 3.

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



if (iksas1 > iksas2) {

let atsakymas = document.getElementById("go3").innerHTML = "I have changed!";
}

else if (iksas1 < iksas2) {

let atsakymas = document.getElementById("go3").innerHTML = "I changed!";
}

else if (iksas1 == 0 || iksas2 == 0) {

let atsakymas = document.getElementById("go3").innerHTML = "Nulis!";
    
}










// console.log(pirmasKint);

// let antrasKint = function random(number) {
//   const result = Math.floor(Math.random() * number);
//   return result;
// }

// console.log(antrasKint);


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





















