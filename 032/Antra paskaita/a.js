function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

console.log('Hello');


// do while nuo 1 iki daug
// while nuo 0 iki daug


// Stasys vairuoja BOLT ir nori pirkti meškerę už 200eur
// per naktį uždirba nuo 20 iki 80eur


let stasys = 0;

do {
    const uzdarbis = rand(20, 80);
    stasys += uzdarbis;
    console.log(stasys);
} while (stasys < 200);

console.clear();

// turi močiutę ir šiandien Stasio gimtadienis

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
    console.log('Tikrinam S');
}
if (siunta == 'S' || siunta == 'M') {
    console.log('Tikrinam M');
}
if (siunta == 'S' || siunta == 'M' || siunta == 'L') {
    console.log('Tikrinam L');
}
console.log('Tikrinam XL');

console.log('------');

switch (siunta) {
    case 'S': console.log('Tikrinam S');
    case 'M': console.log('Tikrinam M');
    case 'L': console.log('Tikrinam L');
    default: console.log('Tikrinam XL');
}

console.log('------');


if (siunta == 'S') {
    console.log('Tikrinam S');
}
else if (siunta == 'M') {
    console.log('Tikrinam M');
}
else if (siunta == 'L') {
    console.log('Tikrinam L');
} else {
    console.log('Tikrinam XL');
}

console.log('------');

switch (siunta) {
    case 'S':
        console.log('Tikrinam S');
        break;
    case 'M':
        console.log('Tikrinam M');
        break;
    case 'L':
        console.log('Tikrinam L');
        break;
    default:
        console.log('Tikrinam XL');
}

console.clear();

const masyvas = ['Bijūnas', 'Jurginas', 'Rožė', 'Tulpė', 'Narcizas'];

for (let i = 0; i < masyvas.length; i++) {
    const gelyte = masyvas[i];
    console.log(gelyte);
}

console.log('------');

for (const gelyte of masyvas) {
    if (gelyte == 'Rožė') {
        continue;
    }
    console.log(gelyte);
}

// nesigauna taip
// masyvas.forEach(gelyte => {
//     if (gelyte == 'Rožė') {
//         break;
//     }
//     console.log(gelyte);
// })

console.log('------');

const objektas = {
    darze: 'Bijūnas',
    prie_kelio: 'Jurginas',
    po_langu888888: 'Rožė',
    sode: 'Tulpė',
    pamerktas: 'Narcizas'
};


for (const gelyte in objektas) {
    if (objektas[gelyte] == 'Rožė') {
        continue;
    }
    console.log(objektas[gelyte]);
}


// sukurkite masyvą su 5 elementais kurie yra random skaičiai nuo 5 iki 10;

const m = [];
for (let i = 0; i < 5; i++) {
    const sk = rand(5, 10);
    m.push(sk);
}

console.log(m);