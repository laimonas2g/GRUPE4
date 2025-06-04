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

let GyvLis = '';

for (let i = 0; i < A.length; i++) {
  GyvLis += '<li>' + A[i] + '</li>';
}

console.log(GyvLis);

const ul = document.querySelector('ul'); 
ul.innerHTML = GyvLis;

///////////// 2. /////////////
// Html faile sukurkite ul tagą (tiesiogiai). 
// Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A 
// nuskaitytais gyvūnais išdėliotais abėcėline tvarka.

///////////// 3. /////////////
// Html faile sukurkite ul tagą (tiesiogiai). 
// Į sukurtą tagą, su JS, sudėkite li tagus su iš 
// masyvų A ir B nuskaitytais gyvūnais išdėliotais abėcėline tvarka 
// (Rūšiavimas turi būti bendras tarp abiejų masyvų, NE kiekvieno atskirai).

////////////// 4. //////////////
// Html faile sukurkite section tagą (tiesiogiai). 
// Į sukurtą tagą, su JS, sudėkite div tagus, 
// kurie yra mėlyni apskritimai su centre užrašytais iš masyvo A nuskaitytais gyvūnais.


///////////// 5. /////////////


///////////// 6. /////////////


///////////// 7. /////////////


///////////// 8. /////////////


///////////// 9. /////////////


///////////// 10. /////////////






















