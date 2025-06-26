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







