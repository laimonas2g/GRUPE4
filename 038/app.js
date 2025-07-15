function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


/*
1. Programiškai ridenkite du žaidimo kauliukus- sugeneruokite du atsitiktinius skaičius nuo 1 iki 6 Jeigu kauliukų suma didesnė nei 8 jūs laimėjote, priešingu atveju pralošėte. 
Išveskite atsakymą, kuriame būtų abiejų kauliukų reikšmės ir išvada laimėjote ar pralošėte.

*/

const die1 = rand(1, 6);
const die2 = rand(1, 6);
const sum = die1 + die2;

if (sum > 8) {
    console.log(`Kaukiukai: ${die1} ir ${die2} - laimėjote!`);
} else {
    console.log(`Kaukiukai: ${die1} ir ${die2} - pralaimėjote!`);
}

/*
2. Gyveno du katinukai, Pilkis ir Murklys. Jų svoriai kilogramais buvo atsitiktiniai dydžiai nuo 3 iki 6. Parašyti programą, kuri išvestų katinukų svorius ir apskaičiuotų, 
kuris katinukas yra lengvesnis. Atsakymas turi būti katinukų vardai su jų svoriais ir lengvesnio katinuko vardas. Jeigu katinukai sveria vienodai, vietoj katinuko vardo parašykite, kad “katinukų svoriai vienodi”.
*/

const Pilkis = rand(3, 6);
const Murklys = rand(3, 6);

console.log(`Pilkis: ${Pilkis} kg, Murklys: ${Murklys} kg`);

if (Pilkis < Murklys) {
    console.log(`Lengvesnis katinukas: Pilkis`);
} else if (Pilkis > Murklys) {
    console.log(`Lengvesnis katinukas: Murklys`);
} else {
    console.log(`Katinukų svoriai vienodi`);
}

/*
3. Nojus pasiruošė potvyniui ir nusipirko dvi valtis. Vienoje telpa 15 katinukų, kitoje 15 karvių (katinukus galima sodinti tik į katinukų valtis, 
o karves tik į karvių, maišyti negalima) Prasidėjus liūčiai pas Nojų atėjo atsitiktinis skaičius nuo 0 iki 30 katinukų ir toks pats atsitiktinis skaičius karvių. 
Išveskite atėjusių katinukų ir karvių skaičių ir ar Nojus galės juos sutalpinti į valtis. Jeigu netelpa tik katinukai arba tik karvės vistiek išveskite “Netelpa”. 
Kas konkrečiai netelpa išvedinėti nereikia. “Telpa” išveskite tik tuo atveju jeigu ir katinukai ir karvės telpa.
*/

const cats = rand(0, 30);
const cows = rand(0, 30);
const catBoatCapacity = 15;
const cowBoatCapacity = 15;

console.log(`Atėjo katinukų: ${cats}, atėjo karvių: ${cows}`);

if (cats <= catBoatCapacity && cows <= cowBoatCapacity) {
    console.log(`Telpa: katinukai - ${cats}, karvės - ${cows}`);
} else {
    console.log(`Netelpa`);
}

/*
4. Antanas nusipirko naują butą ir pinigų jam liko nedaug. Dabar jis niekaip negali 
apsispręsti ką pirmiausiai pirkti: televizorių, skalbimo mašiną ar šaldytuvą. 
Todėl nusprendžia ridenti kauliuką (atsitiktinis skaičius nuo 1 iki 6) ir jeigu 
iškris 1 arba 5 pirkti televizorių, jeigu 3 arba 4 pirkti skalbimo mašiną ir 
jeigu 2 arba 6 - šaldytuvą. Padėkite Antanui apsispręsti. 
Ridenkite kauliuką ir parašykite atsakymą kokį daiktą jam pirkti.
*/

const roll = rand(1, 6);
let purchase;

if (roll === 1 || roll === 5) {
    purchase = 'televizorių';
} else if (roll === 3 || roll === 4) {
    purchase = 'skalbimo mašiną';
} else {
    purchase = 'šaldytuvą';
}
console.log(`Antanas turi nusipirkti: ${purchase} (kauliuko metimas: ${roll})`);

/*
5. Antanas nusipirko naują butą ir pinigų jam liko nedaug. Dabar jis niekaip negali 
apsispręsti ką pirmiausiai pirkti: televizorių, skalbimo mašiną ar šaldytuvą. 
Todėl nusprendžia ridenti kauliuką (atsitiktinis skaičius nuo 1 iki 6) ir jeigu 
iškris 1 arba 5 pirkti televizorių, jeigu 3 arba 4 pirkti skalbimo mašiną ir 
jeigu 2 arba 6 - šaldytuvą. Padėkite Antanui apsispręsti. 
Ridenkite kauliuką ir parašykite atsakymą kokį daiktą jam pirkti.
*/

// const n1 = rand(1, 7);
// const n2 = rand(1, 7);
// const n3 = rand(1, 7);
// console.log(n1, n2, n3)
// let pirmas = '';
// let antras  = '';
// let trecias = '';

// if (n1 <= n2 && n1 <= n3) {
//   pirmas = n1;
//   if (n2 <= n3) {
//     antras = n2;
//     trecias = n3;
//   } else {
//     antras = n3;
//     trecias = n2;
//   }
// } else if (n2 <= n1 && n2 <= n3) {
//   pirmas = n2;
//   if (n1 <= n3) {
//     antras = n1;
//     trecias = n3;
//   } else {
//     antras = n3;
//     trecias = n1;
//   }
// } else {
//   pirmas = n3;
//   if (n1 <= n2) {
//     antras = n1;
//     trecias = n2;
//   } else {
//     antras = n2;
//     trecias = n1;
//   }
// }

// console.log( n1, n2, n3, 'Eiliskumas:', pirmas, antras, trecias);

const num1 = rand(1, 7);
const num2 = rand(1, 7);
const num3 = rand(1, 7);

console.log(`Sugeneruoti skaičiai: ${num1}, ${num2}, ${num3}`);

if (num1 <= num2 && num1 <= num3) {
    if (num2 <= num3) {
        console.log(`${num1} ${num2} ${num3}`);
    } else {
        console.log(`${num1} ${num3} ${num2}`);
    }
} else if (num2 <= num1 && num2 <= num3) {
    if (num1 <= num3) {
        console.log(`${num2} ${num1} ${num3}`);
    } else {
        console.log(`${num2} ${num3} ${num1}`);
    }
} else {
    if (num1 <= num2) {
        console.log(`${num3} ${num1} ${num2}`);
    } else {
        console.log(`${num3} ${num2} ${num1}`);
    }
}

// Su masyvu ir sort metodu

const arr = [num1, num2, num3];
arr.sort((a, b) => a - b);
console.log(`(Su masyvu ir sort) ${arr.join(' ')}`);


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/*
1. Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų. 
Suprogramuokite for ciklą, kuris imituotų 10 ratų automobilio važiavimą ir kiekviename 
cikle pateiktų (atspausdintų) kiek ratų dar liko automobiliui nuvažiuoti. 
Paskutinis skaičius turėtų būti 1. Visas rezultatas turėtų būti toks:  
10 9 8 7 6 5 4 3 2 1 (skaičiai gali būti atspausdinti stulpeliu).
*/

let go = ''

for (let i = 10; i >= 1; i--) {
    go += `${i} `;
}
console.log(go.trim());

/*
2. Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų. 
Kiekvieną ratą automobilis važiuoja skirtingu nuo 120 iki 220 km/h greičiu. 
Suprogramuokite for ciklą, kuris imituotų 10 ratų automobilio važiavimą, rand() funkcija 
generuokite atsitiktinį automobilio greitį o visiems ciklams pasibaigus pateikite 
bendrą visų 10 ratų vidutinį greitį.*/

let totalSpeed = 0;
for (let i = 0; i < 10; i++) {
    const speed = rand(120, 220);
    totalSpeed += speed;
    console.log(`Ratas ${i + 1}: Greitis ${speed} km/h`);
}
const averageSpeed = totalSpeed / 10;
console.log(`Vidutinis greitis per 10 ratų: ${averageSpeed.toFixed(2)} km/h`);

/*
3. Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų. 
Jo kuro bake liko 44 litrai kuro. Kiekviename rate automobilis sunaudoja atsitiktinį 
kiekį kuro: nuo 3 iki 6 litrų. Suprogramuokite for ciklą, kuris imituotų 10 ratų 
automobilio važiavimą, o ciklams pasibaigus pateikite išvadą ar automobiliui užteko 
kuro įveikti visus 10 ratų. Kurui pasibaigus ciklą nutraukite anksčiau laiko.*/

let fuel = 44;
let lapsCompleted = 0;
for (let i = 0; i < 10; i++) {
    const fuelUsed = rand(3, 6);
    fuel -= fuelUsed;
 
    if (fuel <= 0) {
        console.log("Kuras baigėsi anksčiau laiko.");
        break;
    }
 
    lapsCompleted++;
    console.log(`Ratas ${i + 1}: Sunaudota ${fuelUsed} litrų, liko ${fuel} litrų kuro`);
 
}

/*
4. Vyksta automobilių žiedinės lenktynės. Automobiliui Nr. 55 liko nuvažiuoti 10 ratų 
(žiedų). Kiekviename žiede yra 5 posūkiai, kuriuose automobilio greitis yra atsitiktinis 
dydis nuo 20 iki 120 km/h. Imituokite tokią situaciją dviem for ciklais 
(vienas 10 ratų, kitas 5 posūkiai) ir ciklams pasibaigus atspausdinkite mažiausią 
automobilio greitį kažkuriame iš posūkių.*/

let minSpeed = Infinity;
for (let lap = 0; lap < 10; lap++) {
    for (let turn = 0; turn < 5; turn++) {
        const speed = rand(20, 120);
        if (speed < minSpeed) {
            minSpeed = speed;
        }
        console.log(`Ratas ${lap + 1}, Posūkis ${turn + 1}: Greitis ${speed} km/h`);
    }
}
console.log(`Mažiausias greitis posūkiuose: ${minSpeed} km/h`);

/*
5. (BOSO lygis) Dykumoje vyksta lenktynės. Automobilis Nr. 55 juose dalyvauja. 
Kiekviename kilometre gali atsitikti arba neatsitikti rand(0, 1) tokie trys įvykiai: 
netikėtai iššokti - neiišokti ant kelio kengūra, vairuotojas gali nespėti - spėti 
pasukti vairą ir vairuotojas gali nespėti - spėti paspausti stabdžius. Imituokite 
tokią situaciją do while ciklu- vienas kilometras vienas ciklo prasisukimas. 
Cikle rand() funkciją atsitiktinai generuokite visų įvykių tikimybę. Jeigu viename 
cikle įvyksta visi nepalankūs įvykiai: iššoka kengūra, vairuotojas nespėja pasukti 
vairo ir nespėja paspausti stabdžių while ciklą baikite. Ciklo pabaigoje 
atspausdinkite kiek kilometų sugebėjo nuvažiuoti automobilis be avarijos.*/

let kilometers = 0;
let kangaroo, steer, brakes;
do {
    kangaroo = rand(0, 1);
    steer = rand(0, 1);
    brakes = rand(0, 1);
    kilometers++;
} while (kangaroo != 1 || steer != 0 || brakes != 0);
 
console.log(`Automobilis Nr. 55 sugebėjo nuvažiuoti ${kilometers} kilometrų be avarijos.`);
console.log(`Paskutinis įvykis: kengūra iššoko: ${kangaroo}, vairuotojas nespėjo pasukti vairo: ${steer}, vairuotojas nespėjo paspausti stabdžių: ${brakes}`);
 










