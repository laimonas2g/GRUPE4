
function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

/*

kai reiskia suskaiciuoti kartus kazkieno
for - 031
while
do while - 031 

specialus ir keistas ciklas
switch

kai reikia pereit per struktura
for in
for of

ciklus valdymas
continue - 031
break - 031

*/

console.log('Say Hello!');

// do...while, nuo 1 iki daug
// while, nuo 0 iki daug


// Stasys vairuoja BOLT ir nori nusipirkt meskere uz 200eur 
// per nakti uzdirba nuo 20 iki 80 eur


let stasys = 0;

do {
  const uzdarbis = rand(20, 80);
  stasys += uzdarbis;
  console.log(stasys);
} while (stasys < 200)

console.clear();

// turi mociute ir siandien jo gimtadienis

stasys = 0;

const mociute = rand(50, 300);

stasys = mociute;

console.log(stasys, 'po gimtadienio');

while (stasys < 200) {
  const uzdarbis = rand(20, 80);
  stasys += uzdarbis;
  console.log(stasys);
}

console.clear();

// pastomatas S, M, L, XL

const siunta = 'L';

console.log('Turim', siunta);

if (siunta == 'S') {
  console.log('Trikrinam S');
}
if (siunta == 'S' || siunta == 'M') {
  console.log('Trikrinam M');
}
if (siunta == 'S' || siunta == 'M' || siunta == 'L') {
  console.log('Trikrinam L');
}
console.log('Tikrinam XL');

console.log('----------');

switch (siunta) {
  case 'S': console.log('Trikrinam S');
  case 'M': console.log('Trikrinam M');
  case 'L': console.log('Trikrinam L');
  default: console.log('Trikrinam XL');
};

console.log('----------');

if (siunta == 'S') {
  console.log('Trikrinam S');
}
else if (siunta == 'S' || siunta == 'M') {
  console.log('Trikrinam M');
}
else if (siunta == 'S' || siunta == 'M' || siunta == 'L') {
  console.log('Trikrinam L');
} else {
  console.log('Tikrinam XL');
}

console.log('----------');

switch (siunta) {
  case 'S':
    console.log('Trikrinam S');
    break;
  case 'M':
    console.log('Trikrinam M');
    break;
  case 'L':
    console.log('Trikrinam L');
    break;
  default: console.log('Trikrinam XL');
};




























