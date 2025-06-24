
// Duoti Masyvai //

const A = [
    'Bebras',
    'Zebras',
    'Vilkas',
    'Lapė',
    'Barsukas',
    'Voverė',
    'Laukinis katinas',
    'Šuo',
    'Naminis katinas',
];

const B = [
    'Kalakutas',
    'Višta',
    'Antis',
    'Žąsis',
    'Ančiasnapis'
];

const C = [
    'Višta',
    'Gaidys',
    'Šernas',
    'Lapė',
    'Vilkas',
    'Šuo dingo',
    'Barsukas',
    'Voverė',
    'Šuo',
    'Naminis katinas',
    'Laukinis katinas',
    'Šuo atsirado',
    'Bebras',
    'Ožys'
];

///////////// 1. /////////////
// Html faile sukurkite ul tagą (tiesiogiai). 
// Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais gyvūnais.

console.log(A, A.length);


let GyvList1 = '';

for (let index = 0; index < A.length; index++) {
  GyvList1 += '<li>' + A[index] + '</li>'; 
}
console.log(GyvList1);
console.log(A[1], A[2])

const kl1 = document.querySelector(`.klausimas1`); 
console.log(typeof kl1)
kl1.innerHTML = GyvList1;

///////////// 2. /////////////
// Html faile sukurkite ul tagą (tiesiogiai). 
// Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A 
// nuskaitytais gyvūnais išdėliotais abėcėline tvarka.

let GyvList2 = '';

A.sort();

for (let index = 0; index < A.length; index++) {
    GyvList2 += '<li>' + A[index] + '</li>'; 
}
let kl2 = document.querySelector(`.klausimas2`);

kl2.innerHTML = GyvList2;


///////////// 3. /////////////
// Html faile sukurkite ul tagą (tiesiogiai). 
// Į sukurtą tagą, su JS, sudėkite li tagus su iš 
// masyvų A ir B nuskaitytais gyvūnais išdėliotais abėcėline tvarka 
// (Rūšiavimas turi būti bendras tarp abiejų masyvų, NE kiekvieno atskirai).

let GyvList3 = '';

let AB = [...A, ...B].sort();

for (let index = 0; index < AB.length; index++) {
    GyvList3 += '<li>' + AB[index] + '</li>';
}

let kl3 = document.querySelector(`.klausimas3`);
kl3.innerHTML = GyvList3;

// ////////////// 4. //////////////
// // Html faile sukurkite section tagą (tiesiogiai). 
// // Į sukurtą tagą, su JS, sudėkite div tagus, 
// // kurie yra mėlyni apskritimai su centre užrašytais iš masyvo A nuskaitytais gyvūnais.

let section4 = document.querySelector('.klausimas4');
let div4 = document.createElement(`div`);
div4.innerHTML = GyvList1; // .innerHTML kai viduje .createElement neletina browserio?
section4.append(div4);
div4.style.width = `150px`;
div4.style.height = `150px`;
div4.style.borderRadius = `50%`;
div4.style.backgroundColor = `skyblue`;
div4.style.display = `flex`;
div4.style.justifyContent = `center`;
div4.style.flexDirection = `column`;
div4.style.padding = `100px`


// ///////////// 5. /////////////
// // Html faile sukurkite section tagą (tiesiogiai). 
// // Į sukurtą tagą, su JS, sudėkite div tagus, 
// // kurie yra raudoni apskritimai su centre centre užrašytais 
// // iš masyvo B nuskaitytais gyvūnais ir tų gyvūnų raidžių skaičiumi.

console.log(B.length);

let section5 = document.querySelector('.klausimas5');

let div5_1 = document.createElement(`div`);
div5_1.innerHTML = B[0] + ' ' + B[0].length;

section5.append(div5_1)
section5.style.display = `flex`;
section5.style.gap = `5px`;

div5_1.style.width = `70px`;
div5_1.style.height = `70px`;
div5_1.style.borderRadius = `50%`;
div5_1.style.backgroundColor = `#f63737`;
div5_1.style.display = `flex`;
div5_1.style.color = `black`;
div5_1.style.justifyContent = `center`;
div5_1.style.flexDirection = `column`;
div5_1.style.padding = `10px`

let div5_2 = document.createElement(`div`);
div5_2.innerHTML = B[1] + ' ' + B[1].length;
section5.append(div5_2)

div5_2.style.width = `70px`;
div5_2.style.height = `70px`;
div5_2.style.borderRadius = `50%`;
div5_2.style.backgroundColor = `#f63737`;
div5_2.style.display = `flex`;
div5_2.style.color = `black`;
div5_2.style.justifyContent = `center`;
div5_2.style.flexDirection = `column`;
div5_2.style.padding = `10px`

let div5_3 = document.createElement(`div`);
div5_3.innerHTML = B[2] + ' ' + B[2].length;
section5.append(div5_3)

div5_3.style.width = `70px`;
div5_3.style.height = `70px`;
div5_3.style.borderRadius = `50%`;
div5_3.style.backgroundColor = `#f63737`;
div5_3.style.display = `flex`;
div5_3.style.color = `black`;
div5_3.style.justifyContent = `center`;
div5_3.style.flexDirection = `column`;
div5_3.style.padding = `10px`

let div5_4 = document.createElement(`div`);
div5_4.innerHTML = B[3] + ' ' + B[3].length;
section5.append(div5_4)

div5_4.style.width = `70px`;
div5_4.style.height = `70px`;
div5_4.style.borderRadius = `50%`;
div5_4.style.backgroundColor = `#f63737`;
div5_4.style.display = `flex`;
div5_4.style.color = `black`;
div5_4.style.justifyContent = `center`;
div5_4.style.flexDirection = `column`;
div5_4.style.padding = `10px`

let div5_5 = document.createElement(`div`);
div5_5.innerHTML = B[4] + ' ' + B[4].length;
section5.append(div5_5)

div5_5.style.width = `70px`;
div5_5.style.height = `70px`;
div5_5.style.borderRadius = `50%`;
div5_5.style.backgroundColor = `#f63737`;
div5_5.style.display = `flex`;
div5_5.style.color = `black`;
div5_5.style.justifyContent = `center`;
div5_5.style.flexDirection = `column`;
div5_5.style.padding = `10px`



// ///////////// Question 6. /////////////
// // Html faile sukurkite section tagą (tiesiogiai). 
// // Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra žali apskritimai su centre užrašytais gyvūnais, 
// // nuskaityto iš masyvo A. Dėkite tik tuos gyvūnus, kurie savo pavadinime turi tik vieną žodį.


let section6 = document.querySelector('.klausimas6');
section6.style.display = 'flex';
section6.style.gap = '5px';

A.forEach(animal => {
    if (animal.trim().split(' ').length === 1) {
        let div = document.createElement('div');
        div.innerHTML = animal;
        div.style.width = '70px';
        div.style.height = '70px';
        div.style.borderRadius = '50%';
        div.style.backgroundColor = 'lightgreen';
        div.style.display = 'flex';
        div.style.color = 'black';
        div.style.justifyContent = 'center';
        div.style.alignItems = 'center';
        div.style.flexDirection = 'column';
        div.style.padding = '10px';
        section6.append(div);
    }
});

///////////// Question 7. /////////////
// Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite span tagus, 
// kurie yra geltoni apskritimai su centre užrašytais iš masyvo B nuskaitytų gyvūnų pavadinimų raidėm. 
// Kiekvienas span tagas- atskira raidė. (visų gyvūnų visos raidės atskiruose span taguose).#ciklasCikle

let section7 = document.querySelector('.klausimas7');
section7.style.display = 'flex';
section7.style.flexWrap = 'wrap';
section7.style.gap = '5px';

B.forEach(animal => {
    for (let i = 0; i < animal.length; i++) {
        let span = document.createElement('span');
        span.innerText = animal[i];
        span.style.width = '30px';
        span.style.height = '30px';
        span.style.borderRadius = '50%';
        span.style.backgroundColor = 'yellow';
        span.style.display = 'flex';
        span.style.justifyContent = 'center';
        span.style.alignItems = 'center';
        span.style.margin = '2px';
        span.style.fontWeight = 'bold';
        section7.append(span);
    }
});

///////////// Question 8. /////////////
// Html faile sukurkite du ul tagus (tiesiogiai). 
// Į  vieną sukurtą tagą, su JS, sudėkite li tagus su iš masyvo C nuskaitytais gyvūnais, 
// kurių pavadinimas ne ilgesnis kaip 6 raidės, į kitą likusius.

ul8_1 = document.querySelector('.klausimas8_1');
ul8_2 = document.querySelector('.klausimas8_2');

shortList = '';
longList = '';

C.forEach(animal => {
    const trimmedAnimal = animal.trim();
    if (trimmedAnimal.length <= 6) {
        shortList += `<li>${trimmedAnimal}</li>`;
    } else {
        longList += `<li>${trimmedAnimal}</li>`;
    }
});

if (ul8_1) {
    ul8_1.innerHTML = shortList;
} else {
    console.error('Element with class .klausimas8_1 not found in HTML.');
}
if (ul8_2) {
    ul8_2.innerHTML = longList;
} else {
    console.error('Element with class .klausimas8_2 not found in HTML.');
}

///////////// Question 9. /////////////
// Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, 
// sudėkite li tagus su iš masyvo B nuskaitytais gyvūnais. Išfiltruokite ir nedėkite šunų.
  
let ul9 = document.querySelector('.klausimas9');
let list9 = '';

B.forEach(animal => {
    if (!animal.toLowerCase().includes('šuo')) {
        list9 += `<li>${animal}</li>`;
    }
});

if (ul9) {
    ul9.innerHTML = list9;
} else {
    console.error('Element with class .klausimas9 not found in HTML.');
}


///////////// Question 10. /////////////
// Uždavinį atlikite atskirame html faile. Visame ekrane atsitiktine tvarka “išmėtykite“ 
// iš masyvo C nuskaitytus gyvūnus. Kad būtų daugiau gyvūnų, tą patį masyvą nuskaitykite 10 kartų. 
// Gyvūnų pavadinimų raidžių dydis- atsitiktinis nuo 10px iki 100px. Gyvūnų pavadinimų 
// raidžių spalva atsitiktinė. Pavadinimai turi tolygiai (pagal funkciją rand()) dengti 
// visą ekraną (funkcijos duotos 02. DOM ir Cycles (one & four edition)).#fun

// Question 10

// Helper functions for random values
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randColor() {
    return `rgb(${rand(0,255)},${rand(0,255)},${rand(0,255)})`;
}

// Assuming you have a container in your HTML, e.g. <div class="klausimas10"></div>
const container10 = document.querySelector('.klausimas10');
container10.style.position = 'relative';
container10.style.width = '100vw';
container10.style.height = '100vh';
container10.style.overflow = 'hidden';

// Get viewport size
const vw = window.innerWidth;
const vh = window.innerHeight;

for (let k = 0; k < 10; k++) {
    C.forEach(animal => {
        const span = document.createElement('span');
        const fontSize = rand(10, 100);
        span.innerText = animal;
        span.style.position = 'absolute';
        span.style.fontSize = fontSize + 'px';
        span.style.color = randColor();
        span.style.whiteSpace = 'nowrap';
        // Calculate random position, ensuring the text stays within the viewport
        const left = rand(0, Math.max(0, vw - fontSize * animal.length * 0.6));
        const top = rand(0, Math.max(0, vh - fontSize));
        span.style.left = left + 'px';
        span.style.top = top + 'px';
        container10.append(span);
    });
}


















