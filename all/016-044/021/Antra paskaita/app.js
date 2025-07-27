console.log('Labas, 3taski!');
// Spread'as turinio paskleidimas, Kopija, Masyvas = tvarka, Objektas = nera tvarkos (tik overwrite)

const skaiciai = [5, 8, 7];

const skaiciai1 = skaiciai; // by reference, pagal nuoroda

const skaiciai2 = [88, ...skaiciai, 44]; // => [88, 5, 8, 7, 44] ant ko tepam (masyvo) ir ka tepam ...skaiciai

const skaiciai3 = { obuolys1: 'pradzia', ...skaiciai, obuolys2: 'pabaiga' }; // => {5, 8, 7} objektas (propsai, kaip shakos obuoliai), nera tvarkos, svarbu propso pavadinimas

skaiciai1[0] = 88;

console.log(skaiciai, skaiciai1, skaiciai2, skaiciai3);

const medis = { sakos: 10, obuoliai: 22, aukstis: 15 };

const medis2 = { obuoliai: 200, ...medis, sakos: 15 }; // "...medis" overwritina obuoliai, grieztai pagal varda

console.log(medis, medis2);

// REST tai kas liko

const funSpread = function (a, b) {
  console.log(a - b);
}

const manoSK = [7, 10];

funSpread(...manoSK);


const funRest = function (ab, bc, ...argumentai) { // Rest atvirksciai nuo spread'o, argumentai funkcijoje turi labai aisku eiliskuma
  let suma = 0;
  argumentai.forEach(el => suma += el);
  console.log('suma ish: ', argumentai.length, 'lygi: ', suma);
}

funRest(100, 4, 7, 9, 21); // 100 eina i ab, Rest susemia viska likusi
funRest(4, 21); // Restui nieko nelieka, 0
funRest(4, 7, 9, 21, 87, 7, 9, 7);



const stebuklas = [
  4,
  [88, 77],  // masyvas masyve (stulpelis)
  5,
  8
];

const kitasStebuklas = [...stebuklas]; // seklus kopijavimas (shallow copy)
const deepStebuklas = structuredClone(stebuklas); // // gilus kopijavimas (deep copy)

stebuklas[0] = 100; // taip pat galim ir spread'e padaryti?
stebuklas[1][1] = 200; // tik shallow copy?

console.log(stebuklas, kitasStebuklas, deepStebuklas);

const skaiciaiPaprasti = [7, 9, 7, 9];
// sukurti naują masyvą, kuriame kiekvienas skaičius yra padaugintas iš 5

const padaugintiSkaiciai = skaiciaiPaprasti.map(sk => sk * 5);

console.log(padaugintiSkaiciai);

const skaiciaiObjekte = [
  { skaicius: 4 },
  { skaicius: 7 },
  { skaicius: 56 },
  { skaicius: 14 },
  { skaicius: 11 }
];
// sukurti naują masyvą, kuriame kiekvienas skaičius yra padaugintas iš 5 skaicius 
// turi likti duotam objekte, objekto savybės vardas turi likti toks pat

const padaugintiSkaiciai2 = skaiciaiObjekte.map(el => { return { 'skaicius': el.skaicius * 5 }; }
);

// const skaiciaiObjekte2 = skaiciaiObjekte.map(el => 
//   {return {'skaicius': obj.skaicius * 5};}
// );
console.log(padaugintiSkaiciai2);

// const skaiciaiObjekte2 = skaiciaiObjekte.map(obj => ({skaicius: obj.skaicius * 5}));

const skaiciaiObjekte2 = skaiciaiObjekte.map(obj => {
  return { skaicius: obj.skaicius * 5 };
});

console.log(skaiciaiObjekte2);

const cart = [
  { id: 877, title: 'Pieniškos dešros', price: 2.45, count: 2 },
  { id: 8974, title: 'Sviestukas sintetinis', price: 3.20, count: 1 },
  { id: 16548, title: 'Batonas studentų', price: 1.22, count: 1 },
  { id: 974, title: 'Bulvės 4kl', price: 0.88, count: 2 }
];
// padidintu visu produktu kiekius 1;

const cart2 = cart.map(obj => ({ ...obj, count: obj.count + 1 }));

console.log(cart2);

const cartPlus1 = cart.map(obj => ({ ...obj, count: obj.count + 1 }))

console.log(cartPlus1);

// padidinti 8974 produkto kieki 2


const cartPlus3 = cart.map(obj =>
  obj.id === 8974 ? { ...obj, count: obj.count + 2 } : { ...obj }
);

console.log(cartPlus3);



const cartPlus4 = cart.map(obj => obj.id === 8974 ? { ...obj, count: obj.count + 2 } : obj);
//grazini sena        

console.log(cartPlus3);

// parduotuve su produktais, dejimasi krepsheli, kiekis, ishemimas idejimas, kaina














































