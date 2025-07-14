export default class Sq {

    #x;
    #y;
    #color;
    #gate = false;
    #activeColor;
    #el;
    #size;

    constructor(x, y, size, color = 'transparent') {
        this.#x = x;
        this.#y = y;
        this.#color = color;
        this.#size = size;
        this.#el = document.createElement('div');
        this.#el.style.left = this.#x + 'px';
        this.#el.style.top = this.#y + 'px';
        this.#el.style.width = this.#size + 'px';
        this.#el.style.height = this.#size + 'px';
        this.#el.style.backgroundColor = this.#color;
    }

    addTo(parent) {
        parent.appendChild(this.#el);
        this.#el.addEventListener('mouseover', _ => {
            console.log('OK');
        })
    }

    open(gate) {
        this.gate = gate;
    }

    set activeColor(color) {
        this.#activeColor = color;
    }


}