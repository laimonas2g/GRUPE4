console.log('Labas, Ūdra!');

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


const stringas = 'A'.repeat(rand(1, 11)) + rand(10, 200) + 'A'.repeat(rand(1, 11));
const regex = /[0-9]{3}/g;

const found = stringas.match(regex); // gali nerast nieko tada bus NULL

console.log(stringas);

if (null === found) {
    console.log('nieko neradau');
} else {
    console.log(+found[0]);
}

const str1 = 'Ananasas';
// Atspausdinti konsolėje po vieną visas ne a raides (tiek ne mažas tiek ne didelias)


for (let i = 0; i < str1.length; i++) {

    // if (str1[i] != 'a' && str1[i] != 'A') {

    if (str1[i].toLowerCase() != 'a') {
        console.log(str1[i]);
    }
}

const str2 = 'Bananas';
// Iš stringo reikia padaryti kitą stringą, kuriame nebūtų 'a' raidžių. Padarius tokį stringą jį atspausdinti konsolėje

let result2 = '';
for (let i = 0; i < str2.length; i++) {

    if (str2[i].toLowerCase() != 'a') {
        result2 = result2 + str2[i];
    }
}

console.log(result2);

// Suskaičiuoti kiek 'a' raidžių yra str2 stringe

// Iš stringo reikia padaryti kitą stringą, kuriame vietoj 'a' raidžių būtų '*'. Padarius tokį stringą jį atspausdinti konsolėje


let resultC = 0;
for (let i = 0; i < str2.length; i++) {

    if (str2[i].toLowerCase() == 'a') {
        resultC++;
    }
}

console.log(resultC);


let result3 = '';
for (let i = 0; i < str2.length; i++) {

    if (str2[i].toLowerCase() != 'a') {
        result3 = result3 + str2[i];
    } else {
        result3 = result3 + '*';
    }
}

console.log(result3);


























