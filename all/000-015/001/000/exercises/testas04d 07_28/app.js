/*
Tarpinis žinių patikrinimas #4

const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];


Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką. Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir jį įrašykite į tago vidų naudojant innerText() metodą. Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai.

Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką. Susikurkite tuščią masyvą, skaičiams saugoti. Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. Sugeneruotą skaičių pridėkite į masyvą, o tą masyvą atspausdinkite konsolėle. <h3> tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių sumą.

Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. JS pagalba perskaitykite masyvą africa ir naudodami createElement()  ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po <li> tagą su elemento stringu viduje ir juos įrašykite į <ul> tago vidų. Elementus su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite.

Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius input laukelius, vieną <h5> tagą ir du mygtukus: “+” ir “-”. Suprogramuokite kalkuliatorių taip, kad įrašius skaičius į abu input laukelius ir paspaudus atitinkamą mygtuką su skaičiais būtų atlikta atitinkama aritmetinė operacija, o jos rezultatas būtų atvaizduotas <h5> tage. Pasirinkite patys sau patogiausius metodus tai atlikti.

(BOSO lygis) Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. JS pagalba perskaitykite masyvą australia ir kiekvieną masyvo elementą įrašykite į strigą su <li> tagais iš abiejų pusių, o visus gautus stringus sudėkite į vieną bendrą stringą. Tą stringą naudodami innerHTML() metodą įdėkite į <ul> tago vidų. Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai.

Visuose uždaviniuose jeigu jums reikia galite naudoti išorinį css stilių, o prie rankiniu būdu HTML’e kuriamų tagų galite pridėti savo klases, id ar panašiai.


rand funkcija (jūsų kodo viršuje):
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}



*/


function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

// 1.
/*
Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2> tagus ir vieną mygtuką.
 Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir 
 jį įrašykite į tago vidų naudojant innerText() metodą. 
 Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. 
 Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai.
*/

const pirmasH2 = document.querySelector('h2');
const antrasH2 = document.querySelector('h2:nth-of-type(2)');
const buttonas1 = document.querySelector('button');

function updateSk() {
  let pirmasSk = rand(1, 6);
  let antrasSk = rand(1, 6);
  console.log(pirmasSk)


  pirmasH2.textContent = pirmasSk;
  antrasH2.textContent = antrasSk;

  if (pirmasSk == antrasSk) {
    pirmasH2.style.color = 'red';
    antrasH2.style.color = 'red';
  };
}
buttonas1.addEventListener('click', updateSk);

// 2. 
/*
Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką. 
Susikurkite tuščią masyvą, skaičiams saugoti. 
Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. 
Sugeneruotą skaičių pridėkite į masyvą, o tą masyvą atspausdinkite konsolėle. 
<h3> tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių sumą.

*/
const skaiciaiArr = [];

const treciasH3 = document.getElementById('h3');
const buttonas2 = document.getElementById('btn2')

buttonas2.addEventListener('click', function () {
  let treciasSk = rand(1, 10);
  skaiciaiArr.push(treciasSk);
  console.log(skaiciaiArr);

  let suma = skaiciaiArr.reduce((a, b) => a + b);
  treciasH3.innerText = suma;
})

// 3.
/*
Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. 
JS pagalba perskaitykite masyvą africa ir naudodami createElement()  
ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po 
<li> tagą su elemento stringu viduje ir juos įrašykite į <ul> tago vidų. 
Elementus su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite.
*/
const africa = ['Zebras', 'Liūtas', '', 'Raganosis', '', 'Raganosis', 'Begemotas'];

const ul = document.getElementById('gyvunai');

africa.forEach(function (gyvunas) {
  if (gyvunas != "") {
    const li = document.createElement('li');
    li.textContent = gyvunas
    ul.appendChild(li);
  }
});

// 4.








