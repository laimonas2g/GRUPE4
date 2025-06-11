console.log('labas, Marsai!')
console.log('labas, Venera!')

let funRezultatas;

function fun1(a) {  // vardine funkcija (nera kintamojo)
  return a * 7;
}

funRezultatas = fun1(3);
console.log(funRezultatas);

//-------------------------------

const fun2 = function (a) { // anonimine funkcija (bevarde)
  return a * 7;
}
funRezultatas = fun2(3);
console.log(funRezultatas);

//-------------------------------

const fun3 = (a) => {
  return a * 7;
}

funRezultatas = fun3(3);
console.log(funRezultatas);

//-------------------------------



const obuoliai = function () {
  console.log('Paprasta:', this);
  return this.sakos * 8;
}

const obuoliaiRodykle = () => {
  console.log('Rodykle:', this);
  return this.sakos * 8;
}

const medis = {};
medis.sakos = 10;
medis.obuoliai = obuoliai;
medis.obuoliaiRodykle = obuoliaiRodykle;

console.log('Paprasta:', this);
console.log('Rodykle:', this);

// -----------

// jeigu parametru skaicius yra 1 tai galim praleist argumentu () skliaustelius
const fun4 = a => {
  return a * 7;
}

funRezultatas = fun4(3);
console.log(funRezultatas);

// -----------

// jeigu funkcijos kodo eilute tik 1 galim praleisti bloko {} skliaustelius ir negalima 'return'
const fun5 = a => a * 7;

funRezultatas = fun5(3);
console.log(funRezultatas);

// -----------

const fun6 = _ => 'Bebras '.repeat(5); // _ vietoje tusciu skliaustu, funkcija be argumentu

funRezultatas = fun6();
console.log(funRezultatas);


console.clear();
// --------------------------------------------------------------------------------------
// M A S Y V A S //                          
// --------------------------------------------------------------------------------------

const colors = ['green', 'blue', 'yellow', 'pink', 'black'];

// su ciklu konsolėje atspausdinkite spalvas po vieną spalvą (stulpeliu)

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

//---------------------------------------------------------------------------
// forEach - Ciklo pakaitalas, naudojamas tik MASYVAM, ir nod listam mapam
// pirmas elementas, antras index'as
const elemPrint = function (el, index) {
  console.log(index, el);
}

// masyvas turi funkcija forEach
// forEach veikia tik su funkcija
// colors.forEach(elemPrint);  

colors.forEach((el, index) => console.log(index, el));

colors.forEach(el => console.log(el));

const digits = [5, 8, 74, 0, 32, 75, 4];

// su ciklu forEach konsolėje atspausdinkite skaičius po vieną skaičių (stulpeliu)
digits.forEach(el => console.log(el));

// su ciklu forEach konsolėje atspausdinkite skaičius po vieną skaičių padauginta is 3 (stulpeliu)
console.clear();

// su ciklu forEach konsolėje atspausdinkite skaičius po vieną skaičių (stulpeliu) bet ne == 0

digits.forEach(el => {
  if (el != 0) {
    console.log(el);
  }
});

digits.forEach(el => el != 0 ? console.log(el) : 0);

digits.forEach(el => el && console.log(el)); // true false

digits.forEach(el => {
  if (el != 0) {
    console.log(el);
  }
});

// --------------------------------------------------------------------------------------
// map //              React'o pagrindinis metodas             
// --------------------------------------------------------------------------------------

// NEGALIMA KEISTI MASYVO SU MAP IR FOREACH

console.clear();

const fe = colors.forEach(el => console.log(el)); // for each negrazins rezultatu, undefined
console.log(fe)

console.clear();

const mp = colors.map(el => el.toUpperCase()); // masyvo modifikacijai, kopijos modifikacija
console.log(mp);  // map'as, perenka ir nukopijuoja i nauja masyva, pasidaryti tikra kopija, modifikuota

const np = colors.map(el => '<li>' + el + '</li>'); // React'e
console.log(np);

const digits2 = [5, 8, 74, 0, 32, 75, 4];
// su map metodu sukurkite nauja masyva, kuriame butu seno masyvo skaiciai padauginti is 8

const lp = digits2.map(el => el * 8)
console.log(lp);

const d2 = digits2.map(petras => petras * 8)
console.log(d2);


















