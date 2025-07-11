
export default class Sq {

    #color;
    #gate = false;
    #activeColor;
    #el;

    constructor(x, y, size, color = 'transparent') {
        this.#color = color;
        this.#el = document.createElement('div');
        this.#el.style.left = x + 'px';
        this.#el.style.top = y + 'px';
        this.#el.style.width = size + 'px';
        this.#el.style.height = size + 'px';
        this.#el.style.backgroundColor = this.#color;
        this.#el.style.position = 'absolute';
    }

    addTo(parent, mode = 'view') {
        parent.appendChild(this.#el);
        if (mode == 'view') {
            return;
        }
        this.#el.addEventListener('mouseover', _ => {
            if (this.#gate) {
                this.#color = this.#activeColor;
                this.#el.style.backgroundColor = this.#color;
            }
        });
    }

    reset() {
        this.#color = 'transparent';
        this.#el.style.backgroundColor = this.#color;
    }


    open(gate) {
        this.#gate = gate;
    }


    /**
     * @param {string} color
     */
    set activeColor(color) {
        this.#activeColor = color;
    }


}
