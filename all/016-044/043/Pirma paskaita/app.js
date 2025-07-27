// KINTAMIEJI
// DUOMENU TIPAI
// PAPRASTIEJI IR KOMPLEKSINIAI

// PAPRASTIEJI

// KINTAMIEJI
var kintamasis = 'x';
kintamasis = 'y';

console.log(kintamasis);

let kitasKintamasis = 'x';
kitasKintamasis = 'y';

console.log(kitasKintamasis)

let naujas, naujesnis, naujiausias; // deklaravau
naujas = 'x';
console.log(naujas);

// DUOMENU TIPAI (paprastieji)

const tekstas = 'x';
const skaicius = 3;
const tusciaVerte = null;
console.log(tusciaVerte);
const neraVertes = undefined;
console.log(neraVertes);
const neskaicius = NaN;

const sandauga = tekstas * skaicius;
console.log(sandauga);

// KOMLEKSINIAI (sudetiniai)
const sarasas = [1, 2, 3];
sarasas[1] = 'x';
const vienasIsSaraso = sarasas[1];
console.log(vienasIsSaraso);

sarasas.push(4)
sarasas.splice(1, 2);
console.log(sarasas, sarasas.length);

const objektas = {
    pirmas: 'a',
    antras: 'b',
    "trecias daiktas": 'c',
};

const pirmasObjekte = objektas.pirmas;
console.log(pirmasObjekte);

const automobilis = {
    spalva: 'raudona',
    marke: 'ferrari',
    galia: '200hp',
}

console.log(automobilis);

// key and value pair, kintamasis objekto viduje tampa atributu, tarkim length


