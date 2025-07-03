function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// if (--saugiklis1 == 0) {
//   console.log('Klaida, uzsiciklinai!!!');
//   break;
// }
// let kiekis = 0;
// let HS3kart = '';
// saugiklis3 = 10000;


// do {
//     if (--saugiklis3 == 0) {
//     console.log('BUM');
//     break;
//   }

//   const HS = rand(0, 1) ? 'H' : 'S';
//   console.log(HS);
//   if (HS == 'H') {
//     kiekis++; 
//   } 

// } while (kiekis != 3);

let metimuKiekis = 0;
saugiklis = 88;
let isEilesHeads = 0;
metimuKiekis = 0;

do {
  if (--saugiklis == 0) {
    console.log('Klaida, uzsiciklinai!!!');
    break;
  }

  const HS = rand(0, 1) ? 'H' : 'S';
  console.log(HS);
  metimuKiekis++;

  if (HS == 'H') {
    isEilesHeads++;
  } else {
    isEilesHeads = 0;
  }

} while (isEilesHeads != 3);


// 1. Sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš 
// intervalo 5…25;
// const sk1 = rand(5, 10);
// const sk2 = rand(5, 10);
// const sk3 = rand(5, 10);
// if (sk1 != sk2 && sk2 != sk3 ) {
// console.log(sk1, sk2, sk3);}

let sk1;
let sk2;
let sk3;

do {

  if (--saugiklis == 0) { 
    console.log('Klaida, uzsiciklinai!!!');
    break;
  }

  sk1 = rand(5, 25);
  sk2 = rand(5, 25);
  sk3 = rand(5, 25);
  console.log(sk1, sk2, sk3);

} while (sk1 == sk2 && sk2 == sk3);

// A. Paskaičiuokite jų sumą ir priskirkite ją kintamajam. 
// Pasinaudokite console.log atspauzdinkite sumos kintamąjį;
const skSuma = sk1 + sk2 + sk3;
console.log(typeof skSuma, skSuma);

// B. Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite 
// pasinaudodami console.log;
const skStringas = String(sk1) + String(sk2) + String(sk3);
console.log(typeof skStringas, skStringas);

// C. Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir 
// jį atspauszdinkite pasinaudodami console.log;
const skStringasTarpais1 = String(sk1) + ' ' + String(sk2) + ' ' + String(sk3);
const skStringasTarpais2 = `${sk1} ${sk2} ${sk3}`;

console.log(typeof skStringasTarpais1, 'Tarpai budas1: ', skStringasTarpais1);
console.log(typeof skStringasTarpais2, 'Tarpai budas2: ', skStringasTarpais2);

//  D. Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus 
// ir gale pridedėkite trijų skaičių sumą, paskaičiuotą A dalyje. 
// Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;
const skStringasTarpaisSuSuma = `${sk1} ${sk2} ${sk3} ${skSuma}`;
console.log(typeof skStringasTarpaisSuSuma, skStringasTarpaisSuSuma);

// 2. Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10), 
// kurį sugeneruoja funkcija rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log; 
const skaicius2 = rand(5, 10);
console.log(skaicius2);

// 3. Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. Pasinaudodami ciklu ir console.log atspauzdinkite 
// kintamąjį 5 kartus;
const labas = 'Labas';
for (let i = 0; i < 5; i++) {
  
  console.log(labas);
}
// 4. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus;
const skaicius2_7kart = skaicius2;
for (let i = 0; i < 7; i++) {
  console.log(skaicius2_7kart);
}

// 5. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, 
// koks skaičius yra sugeneruotas;
const skaicius2_rand = skaicius2;
for (let i = 0; i < skaicius2.legth; i++) {
  console.log(skaicius2_7kart);
}

// 6. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų,
// koks skaičius yra sugeneruotas, bet tik tada jeigu jis didesnis už 7;
if (skaicius2 > 7) {
  for (let i = 0; i < skaicius2; i++) {
    console.log(skaicius2);
  }
}

// 7. Deklaruokite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(),
// kurie yra iš intervalo 10…20. Ciklą kartokite 5 kartus;


// A. Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;

// B. Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų.
// Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
// C. Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Stringo tipo
// kintamąjį atspauzdinkite už ciklo ribų jam pasibaigus;
// D. Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Ciklui pasibaigus prie stringo tipo kintamojo pridėkite ciklo viduje generuotų skaičių sumą, paskaičiuotą kaip B dalyje. Stringo tipo kintamąjį atspausdinkite pasinaudodami console.log;
// 8. Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…25. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;
// A. Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
// B. Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
// C. Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) skaičius, kurie yra didesni nei 18, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
// D. Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį, kuriame suskaičiuokite kiek reikšmių atmetėte (nesumavote). Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;
// E. Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus.
// F. Ciklą iš dalies B kartokite tol,  kol to ciklo iteracijų kiekis bus didesnis nei 20 (vieno ciklo). Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspauzdinkite pabaigoje.
// 9. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 5-10. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;
// A. Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas. Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas. Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
// B. Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;
// C. Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš eilės;
// 10. Kazys ir Petras žaidžiai bingo. Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20, Kazys - surenka taškų kiekį nuo 5 iki 25. Console.log išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222 arba daugiau taškų.






















// const skString = '';
// // String(suma1)
// const skString = String(sk1) + String(sk2) + String(sk3);
// console.log(typeof skString, skString);

// // C. Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį atspauszdinkite pasinaudodami console.log;
// const skStringTarpais = `${sk1} ${sk2} ${sk3}`;
// console.log(typeof skStringTarpais, skStringTarpais);

// // D. Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą, paskaičiuotą A dalyje. Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;
// const skStringTarpaisSuSuma = `${sk1} ${sk2} ${sk3} ${suma1}`;
// console.log(typeof skStringTarpaisSuSuma, skStringTarpaisSuSuma);

// // 2. Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10), kurį sugeneruoja funkcija rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log;
// const skaicius2 = rand(5, 10);
// console.log(skaicius2);

// // 3. Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį 5 kartus;
// const labas = 'Labas';
// for (let i = 0; i < 5; i++) {
//   console.log(labas);
// }

// // 4. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus;
// for (let i = 0; i < 7; i++) {
//   console.log(skaicius2);
// }

// // 5. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas;
// for (let i = 0; i < skaicius2; i++) {
//   console.log(skaicius2);
// }

// // 6. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas, bet tik tada jeigu jis didesnis už 7;
// if (skaicius2 > 7) {
//   for (let i = 0; i < skaicius2; i++) {
//     console.log(skaicius2);
//   }
// }

// // 7. Deklaruokite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…20. Ciklą kartokite 5 kartus;
// // A. Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
// let atsitiktinis7 = 0;
// for (let i = 0; i < 5; i++) {
//   atsitiktinis7 = rand(10, 20);
//   console.log(atsitiktinis7);
// }

// // B. Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
// let suma7 = 0;
// for (let i = 0; i < 5; i++) {
//   suma7 += rand(10, 20);
// }
// console.log(suma7);

// // C. Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Stringo tipo kintamąjį atspauzdinkite už ciklo ribų jam pasibaigus;
// let string7 = '';
// for (let i = 0; i < 5; i++) {
//   string7 += rand(10, 20) + ' ';
// }
// console.log(string7.trim());

// // D. Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Ciklui pasibaigus prie stringo tipo kintamojo pridėkite ciklo viduje generuotų skaičių sumą, paskaičiuotą kaip B dalyje. Stringo tipo kintamąjį atspausdinkite pasinaudodami console.log;
// let string7d = '';
// let suma7d = 0;
// for (let i = 0; i < 5; i++) {
//   let sk = rand(10, 20);
//   string7d += sk + ' ';
//   suma7d += sk;
// }
// string7d += suma7d;
// console.log(string7d);

// // 8. Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…25. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;
// // A. Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
// let atsitiktinis8;
// let iteracijos8 = 0;
// do {
//   atsitiktinis8 = rand(10, 25);
//   console.log(atsitiktinis8);
//   iteracijos8++;
// } while (atsitiktinis8 >= 12);

// // B. Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
// console.log('Iteracijų:', iteracijos8);

// // C. Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) skaičius, kurie yra didesni nei 18, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
// let suma8c = 0;
// let sk8c;
// do {
//   sk8c = rand(10, 25);
//   if (sk8c <= 18) {
//     suma8c += sk8c;
//   }
// } while (sk8c >= 12);
// console.log('Suma <=18:', suma8c);

// // D. Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį, kuriame suskaičiuokite kiek reikšmių atmetėte (nesumavote). Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;
// let suma8d = 0;
// let atmesta8d = 0;
// let sk8d;
// do {
//   sk8d = rand(10, 25);
//   if (sk8d <= 18) {
//     suma8d += sk8d;
//   } else {
//     atmesta8d++;
//   }
// } while (sk8d >= 12);
// console.log('Suma <=18:', suma8d, 'Atmesta:', atmesta8d);

// // E. Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus.
// let lyginiai8e = 0;
// let nelyginiai8e = 0;
// let sk8e;
// do {
//   sk8e = rand(10, 25);
//   if (sk8e % 2 === 0) {
//     lyginiai8e++;
//   } else {
//     nelyginiai8e++;
//   }
// } while (sk8e >= 12);
// console.log('Lyginiai:', lyginiai8e, 'Nelyginiai:', nelyginiai8e);

// // F. Ciklą iš dalies B kartokite tol,  kol to ciklo iteracijų kiekis bus didesnis nei 20 (vieno ciklo). Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspauzdinkite pabaigoje.
// let pakartojimai8f = 0;
// let maxIter8f = 0;
// do {
//   let iter8f = 0;
//   let sk8f;
//   do {
//     sk8f = rand(10, 25);
//     iter8f++;
//   } while (sk8f >= 12);
//   if (iter8f > 20) {
//     break;
//   }
//   pakartojimai8f++;
//   if (iter8f > maxIter8f) maxIter8f = iter8f;
// } while (true);
// console.log('Pakartojimų:', pakartojimai8f, 'Didžiausias iteracijų kiekis:', maxIter8f);

// // 9. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 5-10. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;
// // A. Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas. Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas. Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
// let iter9a = 0;
// let vidines9a = 0;
// let sk9a;
// do {
//   sk9a = rand(5, 10);
//   iter9a++;
//   for (let i = 0; i < sk9a; i++) {
//     vidines9a++;
//   }
// } while (sk9a !== 5);
// console.log('Išorinis:', iter9a, 'Vidinis:', vidines9a);

// // B. Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;
// let iter9b = 0;
// let vidines9b = 0;
// let sk9b;
// let kiek5b = 0;
// do {
//   sk9b = rand(5, 10);
//   iter9b++;
//   if (sk9b === 5) kiek5b++;
//   for (let i = 0; i < sk9b; i++) {
//     vidines9b++;
//   }
// } while (kiek5b < 3);
// console.log('Išorinis:', iter9b, 'Vidinis:', vidines9b);

// // C. Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš eilės;
// let iter9c = 0;
// let vidines9c = 0;
// let sk9c;
// let eil5c = 0;
// do {
//   sk9c = rand(5, 10);
//   iter9c++;
//   if (sk9c === 5) {
//     eil5c++;
//   } else {
//     eil5c = 0;
//   }
//   for (let i = 0; i < sk9c; i++) {
//     vidines9c++;
//   }
// } while (eil5c < 3);
// console.log('Išorinis:', iter9c, 'Vidinis:', vidines9c);

// // 10. Kazys ir Petras žaidžiai bingo. Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20, Kazys - surenka taškų kiekį nuo 5 iki 25. Console.log išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222 arba daugiau taškų.
// let petras = 0;
// let kazys = 0;
// while (petras < 222 && kazys < 222) {
//   let p = rand(10, 20);
//   let k = rand(5, 25);
//   petras += p;
//   kazys += k;
//   let laimetojas = p > k ? 'Petras' : 'Kazys';
//   console.log(`Petras: ${petras} (${p}), Kazys: ${kazys} (${k}). Partiją laimėjo: ${laimetojas}`);
// }
// if (petras >= 222 && kazys >= 222) {
//   if (petras > kazys) {
//     console.log('Žaidimą laimėjo: Petras');
//   } else if (kazys > petras) {
//     console.log('Žaidimą laimėjo: Kazys');
//   } else {
//     console.log('Lygiosios!');
//   }
// } else if (petras >= 222) {
//   console.log('Žaidimą laimėjo: Petras');
// } else {
//   console.log('Žaidimą laimėjo: Kazys');
// }


// console.log(typeof skString, skString);