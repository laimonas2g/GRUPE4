console.log('Hello, hello...');


class Miskas {
    constructor(kiekis, miskoPlotas) {
        this.kiekis = kiekis;
        this.miskoPlotas = miskoPlotas;
    }

    vienamGyvunuiTenkantisPlotas() {
        return (this.miskoPlotas / this.kiekis).toFixed(1);
    }

    bendra() {
        console.log('Aš miškas');
    }
}


class Bebrai extends Miskas {

    constructor(kiekis, miskoPlotas) {
        super(kiekis, miskoPlotas); // tevo konstruktoriaus paleidimas
    }

    uztvankuKiekis() {
        return Math.floor(this.kiekis / 11);
    }

    bendra() {
        console.log('Mes Bebrai');
    }
}


class Barsukai extends Miskas {


    urvuKiekisPlotoVienete() {
        return (this.miskoPlotas / this.kiekis * 5).toFixed(1);
    }

}


const bebrai = new Bebrai(68, 1587);
const barsukai = new Barsukai(158, 5698);

bebrai.bendra();
barsukai.bendra();

console.log(bebrai.vienamGyvunuiTenkantisPlotas(), bebrai.uztvankuKiekis());
console.log(barsukai.vienamGyvunuiTenkantisPlotas(), barsukai.urvuKiekisPlotoVienete());

console.clear();

// Janinos kodas

class Matematika {

    suma(a, b) {
        return a + b;
    }

    daugyba(a, b) {
        return a * b;
    }
}



// Tomo kodas


class Skirtumas extends Matematika {

    skirtumas(a, b) { // prisideti kazko papildomo
        return a - b;
    }

    suma(a, b) { // pakeisti kazka savaip
        return Math.abs(a) + Math.abs(b);
    }
}

const m = new Skirtumas();

console.log(m.suma(5, -11), m.daugyba(3, 7), m.skirtumas(3, 7));


// Jaronimas

class SuDalyba extends Skirtumas {

    dalyba(a, b) {
        return a / b;
    }
}

const d = new SuDalyba();

console.log(d.suma(5, -11), d.daugyba(3, 7), d.skirtumas(3, 7), d.dalyba(8, 7));

console.clear();


// Janinos kodas

class Matematika2 {

    #janininosSk = 11;

    constructor(a, b) {
        this.a = a;
        this.b = b;
        this.janininosSk2 = 15;
        console.log(this.janininosSk2, this.#janininosSk, 'Janinos klases vidus');
    }

    suma() {
        return this.a + this.b;
    }

    daugyba() {
        return this.a * this.b;
    }
}

const m2 = new Matematika2(5, -11);

console.log(m2.suma(), m2.daugyba());


// Simonos kodas


class Matematika3 extends Matematika2 {

    constructor(a, b, c) {
        super(a, b); // kvieciamas Janinos konstruktorius
        this.c = c; // daromas papildomas darbas kaip reikia Simonai
        console.log(this.janininosSk2, 'Simonos klases vidus');
    }

    skirtumas() {
        return this.a - this.b - this.c;
    }


}


const m3 = new Matematika3(5, -11, 18);

console.log(m3.suma(), m3.daugyba(), m3.skirtumas());


const str = new String('Bebras');

const abc = 'abc';


String.prototype.addStarToEnd = function() {
    return this + '*';
};


console.log(abc.addStarToEnd());