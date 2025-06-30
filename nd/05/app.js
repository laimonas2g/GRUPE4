console.log('Kibiras!!!');

/* Question-1: Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. 
Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) 
ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). Sukurti vieną kibiro objektą 
ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą. */

class Kibiras1 {

    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis++; 
        // this.akmenuKiekis = this.akmenuKiekis + 1;
    }
    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis; 
        // this.akmenuKiekis = this.akmenuKiekis + kiekis;
    }
    kiekPririnktaAkmenu() {
        console.log('Kibire jau yra: ', this.akmenuKiekis);
    }

    // gautiAkmenuKieki() {
    //     return this.akmenuKiekis
    // }

}

const k1 = new Kibiras1();
const k2 = new Kibiras1();

k1.prideti1Akmeni();
k1.prideti1Akmeni();
k1.pridetiDaugAkmenu(5);

k2.pridetiDaugAkmenu(10);
k2.prideti1Akmeni();

k1.kiekPririnktaAkmenu();
k2.kiekPririnktaAkmenu();

// const k2Kiekis = k2.gautiAkmenuKieki();
// console.log(k2Kiekis);

/*
1.Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.
2.Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. 
Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.
3.Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.
4.(STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius). Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).
5.(MAP) Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas. Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). Parašyti metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). Pridėti tuos pačius produktus galima po kelis kartus, tokiu atveju produktų kiekis turėtų sumuotis.
6.Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek piniginėje yra monetų ir kiek banknotų. Parašyti metodą monetos(), kuris skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() - popierinių pinigų skaičiavimui. Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) laikykite vienu banknotu ar viena moneta.
7.(STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti metodą akmenuSkaiciusVisuoseKibiruose(), kuris rodytų bendrą visuose kibiruose pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose). Skaičiuoti akmenim, kurie buvo surinkti visuose objektuose, naudokite statinę savybę visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų skaičius). Taip pat atitinkamai modifikuokite metodus prideti1Akmeni(),  pridetiDaugAkmenu(kiekis).
8.Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo metu. Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną kiekį. Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.
9.Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys, kuri turi savybę dydis,kuriai konstruktoriuje yra priskiriama reikšmė 500 ir savybę prikrauta (kuri pradžioje lygi 0). Grybas turi tris savybes, kurios taip pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris. Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija) priskiriamos taip: valgomas- true arba false, sukirmijes- true arba false ir svoris- nuo 5 iki 45. Eiti grybauti, t.y. Kurti naujus Grybas objektus, jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą, t.y. Vykdyti deti(grybas) metodą kol bus pririnktas pilnas krepšys nesukirmijusių ir valgomų grybų (gali būti truputį daugiau nei dydis).
*/



























class Pinigine {
    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
    }

    ideti(kiekis) {
        if (kiekis <= 2) {
            this.metaliniaiPinigai = this.metaliniaiPinigai + kiekis;
        } else {
            this.popieriniaiPinigai = this.popieriniaiPinigai + kiekis;
        }
    }

    skaiciuoti() {
        console.log('Popieriniai pinigai:', this.popieriniaiPinigai, 'Metaliniai pinigai:', this.metaliniaiPinigai, 'Viso:', this.popieriniaiPinigai + this.metaliniaiPinigai);
    }
}

const Pinigine1 = new Pinigine();
Pinigine1.ideti(2);
Pinigine1.ideti(10);
Pinigine1.ideti(7);
Pinigine1.ideti(10);
Pinigine1.skaiciuoti();



class Troleibusas {

    constructor() {
        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius) { //setter
        this.keleiviuSkaicius = this.keleiviuSkaicius + keleiviuSkaicius;
    }

    islipa(keleiviuSkaicius) { //setter niekas niekam negrazina
        const liko = this.keleiviuSkaicius - keleiviuSkaicius;
        this.keleiviuSkaicius = Math.max(0, liko); // 1 budas
        // if (this.keleiviuSkaicius < 0) { // 2 budas
        //     this.keleiviuSkaicius = 0;
        // }
        // this.keleiviuSkaicius = Math.max(0, this.keleiviuSkaicius - keleiviuSkaicius); // 3 budas
    }
    vaziuoja() { //getter
        console.log('Troleibuse važiuoja keleivių:', this.keleiviuSkaicius);
        console.log(`Vaziuoja ${this.keleiviuSkaicius} keleiviai su troleibusu`);
    }
}

const t1 = new Troleibusas();
t1.ilipa(5);
t1.ilipa(15);
t1.islipa(10);
t1.vaziuoja();








class Troleibusas {
    constructor() {
        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius = this.keleiviuSkaicius + keleiviuSkaicius;
    }

    islipa(keleiviuSkaicius) {
        this.keleiviuSkaicius = this.keleiviuSkaicius - keleiviuSkaicius;
        if (this.keleiviuSkaicius < 0) {
            this.keleiviuSkaicius = 0;
        }
    }

    vaziuoja() {
        console.log('Troleibuse važiuoja keleivių:', this.keleiviuSkaicius);
    }
}

const t1 = new Troleibusas();
t1.ilipa(10);
t1.ilipa(5);
t1.islipa(8);
t1.vaziuoja();










// const preke1 = {
//   title: 'Plastikines samanos',
//   price: 45.4,
//   amount: 5,
//   cat: 'Bebro prekes',
//   vat: function () {
//     return this.price * this.amount / 100 * 21;
//   },
//   total: function () {
//     return (this.price * this.amount + this.vat()).toFixed(2);
//   }
// }

// const preke2 = {
//   title: 'Guminiai robotai',
//   price: 158.2,
//   amount: 3,
//   cat: 'Bebro prekes',
//   vat: function () {
//     return this.price * this.amount / 100 * 21;
//   },
//   total: function () {
//     return (this.price * this.amount + this.vat()).toFixed(2);
//   }

// console.log(preke1.title, preke1.total());
// console.log(preke2.title, preke2.total());


// class BebroPreke {

//   constructor(pavadinimas, kaina, kiekis) {
//     this.title = pavadinimas;
//     this.price = kaina;
//     this.amount = kiekis;
//     this.cat = 'Bebro prekes';
//   }
//   vat() {
//     return this.price * this.amount / 100 * 21;
//   }
//   total() {
//     return (this.price * this.amount + this.vat()).toFixed(2);
//   }
// };

// const preke3 = new BebroPreke('Plastikiniai maisai', 0.42, 10);
// const preke4 = new BebroPreke('Dziutiniai maisai', 0.77, 10);

// console.log(preke1, preke1.total());
// console.log(preke2, preke2.total());
// console.log(preke3, preke3.total());
// console.log(preke4, preke4.total());

// class Du {

//   constructor(t) { // pasileidzia pati
//     this.kiek = 2;
//     this.turi = t;
//   }

//   daug() {  // getter, funkcija kuri grazina, gaunu
//     return this.kiek * this.turi;
//   }

//   keistiKiek(k) { // setter, irasyt i objekta
//     if (k >= 10) {
//       this.kiek = k;
//     }
//   }
// }

// // ONA sukure, objekto kurimo metas
// const du01 = new Du(55);
// const du02 = new Du(33);

// du01.keistiKiek(40);

// console.log(du01.kiek);







