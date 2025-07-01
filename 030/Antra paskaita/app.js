console.log('labas, Statikai!');




class AuksoPuodas {

    static suma = 20200;

    static kiekiLikoPinigu() {
        console.log('Aukso puode liko:', this.suma);
        console.log(this.vardas); // negalima, nes tai yra nesamonė.
    }

    constructor(vardas) {
        this.vardas = vardas;
    }


    isleisti(kiek) {
        console.log('Leidžia pinigus:', this.vardas)
        if (this.constructor.suma < kiek) {
            console.log('Baigėsi pinigai');
            return;
        }
        this.constructor.suma -= kiek;
        console.log('Liko', this.constructor.suma);
    }
}



AuksoPuodas.kiekiLikoPinigu();


const Jonas = new AuksoPuodas('Jonas');
const Jeronimas = new AuksoPuodas('Jeronimas');
const Brigita = new AuksoPuodas('Brigita');

Jonas.isleisti(15000);

console.log(AuksoPuodas.suma);

Brigita.isleisti(3000);


console.clear();

const masyvas = new Array();
const objektas = new Object();

const mapas = new Map();


mapas.set('aukstis', '50');
mapas.set('turis', 20);

mapas.set('aukstis', '77');

mapas.set({ a: 1 }, 'a1 objektas 1'); // raktas yra objektas
mapas.set({ a: 1 }, 'a1 objektas 2');

console.log(mapas);

console.log(mapas.has({ a: 1 }));

// console.log(mapas.get('turis'));

mapas.set(_ => _, _ => _); // raktas yra funkcija

mapas.set(AuksoPuodas, '');

console.clear();

console.log(mapas.size);


mapas.forEach((value, key) => console.log(value, key));

console.clear();

const setas = new Set();

setas.add('Bebras');
setas.add('Barsukas');
setas.add('Bebras');
setas.add(AuksoPuodas);
setas.add(AuksoPuodas);
setas.add({ b: 1 });


console.log(setas.has(AuksoPuodas));


