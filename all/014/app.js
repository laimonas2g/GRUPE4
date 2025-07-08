console.log("NSO");
// . - savybe; ' ' - tarpas del grozio
// const nso = {}; tuscias ne = o { : }; dedam , - kablelis yra privalomas

const nso = {
  aliensCount: 4,
  starSystem: 'Gama Epsilon 4587-888'
};

nso.speed = 50;
nso.speedType = 'km/s';


console.log(nso.speed + ' ' + nso.speedType);

console.log(nso);


// Sukurti objekta me, kuris turi turet savybes vardui, pavardei, metams ir svoriui.
// Tada naudokite objekta ir konsoleje atspausdinskite;
// "Vardenis Pavardenis gime pries 50 metu ir uzaugo iki 50 svorio"

// I objekta me prideti savybe kurioje butu paskaiciuotas svoris po 10 metu

let me = {
  rajonas: 'Kaunas',
  salis: 'Lietuva'
}

me.vardas = 'Vardas';
me.pavarde = 'Pavardenis';
me.amzius = 50;
me.amziusMatavVNT = 'm';
me.svoris = 50;
me.svorisatavVNT = 'kg';
me.svoriPo10metu = 'me.amzius' + 10; 

console.log(me.vardas + ' ' + me.pavarde  + ' '+ me.amzius + me.amziusMatavVNT  + ' '+ me.svoris  +me.svorisatavVNT);

console.log(me);

// I objekta me prideti savybe kurioje butu paskaiciuotas svoris po 10 metu

console.log(me.amzius / me.svoris * 10 + me.svoriPo10metu);
console.log('me.svoriPo10metu');

const jis = {
  v: 'Arvydas',
  p: 'Kijakauskas',
  m: 51,
  s: 71
}

console.log('${jis.v} ${jis.p} gime pries ${jis.m} metu ir uzaugo iki ${jis.s} svorio');

jis.s10 = jis.s / jis.m * 10 + jis.s;

console.log(jis);
// const svorisPo10Metu = 71 / 51 *10 + me.s;

// Geriau viskas BackTicke!!!
// Variables, functions, properties, events, and objects can 
// be identified by the $ sign. Because of this, the $ symbol 
// is not used in the same manner as other special symbols. 
// Although JavaScript treats $ as an alphabetic character, 
// that's why it can be used as a variable name also in javascript.


let A = 5;
let B = A; // by value, padidinu kint A reiksme

A = A + 2;

console.log(A, B);
//////////////////////////////////////
let C = {
  sk: 5 // savybe galima keisti ir konstantoje, C vidu galima keisti
}

let D = C; // by reference, kint C turi varda C, nesukuriu dar vieno kintamojo, D kriksto vardas, tas pats kintamasis ar C ar 9 tas pats kintamasis, 
// todel jeigu prie c pridejau 2, bet jie yra tas pats C = D, tas pats kintamasis

C.sk = C.sk + 2;
D.sk = D.sk + 2;

console.log(C, D);

// lygybe yra priskyrimas, yra svarbu kitnamojo tipas,
// lygybe veikia skirtingai, primityvas, skaicius, priskirymas
// pagal reiksmia. Jeigu priskirymas tarp objektu

// objektas - Reference, kitkas (string, number) - pagal Value

console.log(5 === 5);

o1 = { sk: 5 };
o2 = { sk: 5 };

console.log(o1 === o2);
/////////////////////////////////////////////////
const barsukas = document.querySelector('h1');
const barsukas2 = document.querySelector('h1 + h1');

barsukas2.style.color = 'green';


console.log(barsukas);
console.log(barsukas2);

// savybe kitas obketas, DOWN

const namas = {
  stogas: 'Skardinis',
  kambariai: { //maisas maishe, dar viena savybe
      virtuve: 'didele',
      svetaine: 'dar didesne'
    }
};

console.log(namas.stogas, namas.kambariai.virtuve);

namas.durys = 'Medinis';
// pridet kambari, DOWN
namas.kambariai.miegamasis = 'Gigantiskas';

// let ABC;

// console.log(ABC);

console.log(namas?.langai?.pirmas); //Optional chaining (?.) 


const noriuPaziuret = 'virtuve';


console.log(namas.kambariai[noriuPaziuret]);
// kada nezinai ka paziureti, kai ateina is vartotojo info

// 












