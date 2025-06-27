console.log('Hello, little one!');

// Janina kodina
class Cart {

    #max = 14; // nes taip sugalvojo Antanas Tai yra PRIVATU

    constructor() {
        this.count = 0;
    }

    get max() {
        return this.#max;
    }

    set max(val) {
        // console.error(`Tu negali ${val} pridėti, nes tu ne Janina`);
        this.#max = val - 50;
    }

    #toServer() {
        // žinome, kad serveris krepšelį skaičiuoja kaip kažkokį skaičių; Koduoja Antanas.
        console.log('Liko įdėti:', this.#max - this.count);
    }


    putToCart(amount) {
        if (amount + this.count > this.#max) {
            console.log(`Daugiau nei ${this.#max}. Blogai. Netelpa`);
        } else {
            this.count += amount;
            console.log('Pridėta. Dabar yra:', this.count);
            this.#toServer();
        }
    }


}


// Ieva kodina

const c = new Cart();

c.max = 111;

console.log(c.max);



c.putToCart(5);
c.putToCart(4);
c.putToCart(4);



// 1. Sukurti klasę Color, konstruktoriuje nustatykite savybę color (kokią norite);
// 2. Sukurkite metodą fullBody, kuri html body tagą padaro 100% aukščio ir pločio;
// 3. Metodą fullBody padarykite privačiu ir kad jis pasileistų automatiškai sukuriant Color objektą;
// 4. Savybę color padaryti privačią
// 5. Padarius objektą, fonas turi nusidažyti ta spalva
// 6. Padaryti spalvos setterį bodyColor, kuriam priskyrus spalvą, ta spalva nusidažytų ir fonas






class Color {

    #color = 'crimson';

    constructor() {
        this.#fullBody();
        const body = document.querySelector('body');
        body.style.backgroundColor = this.#color;
    }

    set bodyColor(c) {
        this.#color = c;
        const body = document.querySelector('body');
        body.style.backgroundColor = this.#color;
    }

    #fullBody() {
        const body = document.querySelector('body');
        body.style.margin = 0;
        body.style.height = '100vh';
    }
}





const color = new Color();

color.bodyColor = 'skyblue';

console.log(color);