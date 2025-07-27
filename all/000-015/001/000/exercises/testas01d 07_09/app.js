

// 1. Programiškai ridenkite du žaidimo kauliukus- sugeneruokite du atsitiktinius skaičius nuo 1 iki 6 Jeigu kauliukų suma didesnė nei 8 jūs laimėjote, priešingu atveju pralošėte. 
// Išveskite atsakymą, kuriame būtų abiejų kauliukų reikšmės ir išvada laimėjote ar pralošėte.

// 2. Gyveno du katinukai, Pilkis ir Murklys. Jų svoriai kilogramais buvo atsitiktiniai dydžiai nuo 3 iki 6. Parašyti programą, kuri išvestų katinukų svorius ir apskaičiuotų, 
// kuris katinukas yra lengvesnis. Atsakymas turi būti katinukų vardai su jų svoriais ir lengvesnio katinuko vardas. Jeigu katinukai sveria vienodai, vietoj katinuko vardo parašykite, kad “katinukų svoriai vienodi”.

// 3. Nojus pasiruošė potvyniui ir nusipirko dvi valtis. Vienoje telpa 15 katinukų, kitoje 15 karvių (katinukus galima sodinti tik į katinukų valtis, 
//   o karves tik į karvių, maišyti negalima) Prasidėjus liūčiai pas Nojų atėjo atsitiktinis skaičius nuo 0 iki 30 katinukų ir toks pats atsitiktinis skaičius karvių. 
//   Išveskite atėjusių katinukų ir karvių skaičių ir ar Nojus galės juos sutalpinti į valtis. Jeigu netelpa tik katinukai arba tik karvės vistiek išveskite “Netelpa”. 
//   Kas konkrečiai netelpa išvedinėti nereikia. “Telpa” išveskite tik tuo atveju jeigu ir katinukai ir karvės telpa.

// 4. Antanas nusipirko naują butą ir pinigų jam liko nedaug. Dabar jis niekaip negali apsispręsti ką pirmiausiai pirkti: televizorių, skalbimo mašiną ar šaldytuvą. 
// Todėl nusprendžia ridenti kauliuką (atsitiktinis skaičius nuo 1 iki 6) ir jeigu iškris 1 arba 5 pirkti televizorių, jeigu 3 arba 4 pirkti skalbimo mašiną ir jeigu 2 arba 6 - šaldytuvą. Padėkite Antanui apsispręsti. 
// Ridenkite kauliuką ir parašykite atsakymą kokį daiktą jam pirkti.

// 5. (BOSO lygis) Sugeneruokite tris atsitiktinius skaičius nuo 1 iki 7 ir įrašykite juos į tris kintamuosius. Kintamuosius su skaičiais atspausdinkite nuo mažiausio iki didžiausio 
// (galima naudoti tik if, else operatorius, jokių masyvų ir rūšiavimų). Pavyzdžiui: sugeneravus 4, 2, 4 juos reikia atspausdinti tokia tvarka: 2 4 4;


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//1.

const k1 = rand(1, 6);
const k2 = rand(1, 6);
const sumaK = k1 + k2;

if (sumaK > 8) {
  console.log('I kauliukas = ', k1,'II kauliukas = ', k2, 'Jus Laimėjote! -', sumaK)
} else {console.log('I kauliukas = ', k1,'II kauliukas = ', k2, 'Jus Pralošėte! -', sumaK)}

//2.

const Pilkis = rand(3, 6);
const Murklys = rand(3, 6);
console.log('Pilkis-', Pilkis, 'kg Murklys-', Murklys, 'kg');

if (Pilkis < Murklys) {
  console.log('Lengvesnis katinas: Pilkis', Pilkis, ' kg');
} else if (Murklys < Pilkis) {
  console.log('Lengvesnis katinas: Murklys', Murklys, 'kg');
} else {
  console.log('Katinukų svoriai vienodi!');
}

//3.

const katinukai = rand(0, 30);
const karves = rand(0, 30);
// const telpa = 15;
console.log('Atejo katinukų:', katinukai, 'Atėjo karvių:', karves);

if (katinukai <= 15 && karves <= 15) {
  console.log('Telpa -',' katiunkai:', katinukai, ' karves:', karves);
} else {
  console.log('Netelpa!');
}

//4.

const kauliukas = rand(1, 6);
console.log(kauliukas);
let daiktas = '';

if (kauliukas == 1 || kauliukas == 5) {
  daiktas = 'televizorių';
} else if (kauliukas == 3 || kauliukas == 4) {
  daiktas = 'skalbimo mašiną';
} else {
  daiktas = 'šaldytuva';
}
console.log('Iskrito:', kauliukas, 'Antanui reikia pirkti -', daiktas);

//5.

const n1 = rand(1, 7);
const n2 = rand(1, 7);
const n3 = rand(1, 7);
console.log(n1, n2, n3)
let pirmas = '';
let antras  = '';
let trecias = '';

if (n1 <= n2 && n1 <= n3) {
  pirmas = n1;
  if (n2 <= n3) {
    antras = n2;
    trecias = n3;
  } else {
    antras = n3;
    trecias = n2;
  }
} else if (n2 <= n1 && n2 <= n3) {
  pirmas = n2;
  if (n1 <= n3) {
    antras = n1;
    trecias = n3;
  } else {
    antras = n3;
    trecias = n1;
  }
} else {
  pirmas = n3;
  if (n1 <= n2) {
    antras = n1;
    trecias = n2;
  } else {
    antras = n2;
    trecias = n1;
  }
}

console.log( n1, n2, n3, 'Eiliskumas:', pirmas, antras, trecias);












