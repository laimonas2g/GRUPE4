console.log('Hello, little one!');

// Janina kodina
class Cart {

    #max = 14; // nes taip sugalvojo Antanas Tai yra PRIVATU

    constructor() {
        this.count = 0;
    }

    maxIs() {
        return this.#max;
    }

    toServer() {
        // žinome, kad serveris krepšelį skaičiuoja kaip kažkokį skaičių; Koduoja Antanas.
        console.log('Liko įdėti:', this.#max - this.count);
    }


    putToCart(amount) {
        if (amount + this.count > this.#max) {
            console.log(`Daugiau nei ${this.#max}. Blogai. Netelpa`);
        } else {
            this.count += amount;
            console.log('Pridėta. Dabar yra:', this.count);
        }
    }


}


// Ieva kodina

const c = new Cart();

console.log(c.maxIs());

c.putToCart(5);
c.putToCart(4);
c.putToCart(4);

c.toServer();























