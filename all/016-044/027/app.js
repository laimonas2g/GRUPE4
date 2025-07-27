console.log('Sveiki, Objektai!');


const preke1 = {
  title: 'Plastikines samanos',
  price: 45.4,
  amount: 5,
  cat: 'Bebro prekes',
  vat: function () {
    return this.price * this.amount / 100 * 21;
  },
  total: function () {
    return (this.price * this.amount + this.vat()).toFixed(2);
  }
}

const preke2 = {
  title: 'Guminiai robotai',
  price: 158.2,
  amount: 3,
  cat: 'Bebro prekes',
  vat: function () {
    return this.price * this.amount / 100 * 21;
  },
  total: function () {
    return (this.price * this.amount + this.vat()).toFixed(2);
  }
}

console.log(preke1.title, preke1.total());
console.log(preke2.title, preke2.total());

class BebroPreke {

  constructor(pavadinimas, kaina, kiekis) {
    this.title = pavadinimas;
    this.price = kaina;
    this.amount = kiekis;
    this.cat = 'Bebro prekes';
  }
  vat() {
    return this.price * this.amount / 100 * 21;
  }
  total() {
    return (this.price * this.amount + this.vat()).toFixed(2);
  }
};

const preke3 = new BebroPreke('Plastikiniai maisai', 0.42, 10);
const preke4 = new BebroPreke('Dziutiniai maisai', 0.77, 10);

console.log(preke1, preke1.total());
console.log(preke2, preke2.total());
console.log(preke3, preke3.total());
console.log(preke4, preke4.total());

// Question-1, Sukurti klasę Du pagal tą klasę pagaminti objektą ir tą objektą atspausdinti konsolėje
// Question-2, Patobulinkit klasę, pridėdami savybę "kiek", kuri lygi 2;
// Question-3, Patobulinkit klasę, pridėdami savybę "turi", kurią galima įrašyti objekto kūrimo metu
// Question-4, Patobulinkit klasę, pridėdami metodą "daug", kuris sudaugina kiek ir turiu ir grąžina rezultatą
// Question-4, Patobulinkit klasę, pridėdami metodą "daug", kuris sudaugina kiek ir turiu ir grąžina rezultatą
// Question-5, Patobulinkit klasę, pridėdami metodą, kuris įgalina pakeisti savybe "kiek"
// Question-6, Patobulinkit klasę, pridėdami metodą, kuris įgalina pakeisti savybe "kiek", jeigu norime keisti, į skaičių kuris yra didesnis nei 10, keitimo NEATLIEKAME

// PETRAS sukure:
class Du {

  constructor(t) { // pasileidzia pati
    this.kiek = 2;
    this.turi = t;
  }

  daug() {  // getter, funkcija kuri grazina, gaunu
    return this.kiek * this.turi;
  }

  keistiKiek(k) { // setter, irasyt i objekta
    if (k >= 10) {
      this.kiek = k;
    }
  }
}

// ONA sukure, objekto kurimo metas
const du01 = new Du(55);
const du02 = new Du(33);

du01.keistiKiek(40);

console.log(du01.kiek);

// console.log(du01, du02, du01.keistiKiek(5), du01.daug(), du02.daug());

// console.log(typeof Du, typeof du01);






































