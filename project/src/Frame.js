import Sq from './Sq';

export default class Frame {

    #size;
    #mode;
    #frameSize;
    #data;
    #frameHolderElement;
    #sqs = []; // kvadratuku objektai


    constructor(size, frameSizeOrFrameData, frameHolderElement, mode = 'view') {
        this.#size = size;
        this.#mode = mode;
        this.#frameHolderElement = frameHolderElement;
        if (typeof frameSizeOrFrameData === 'number') {
            this.#frameSize = frameSizeOrFrameData;
            this.#data = null;
        } else if (typeof frameSizeOrFrameData === 'object' && Array.isArray(frameSizeOrFrameData)) {
            this.#frameSize = Math.sqrt(frameSizeOrFrameData.length);
            this.#data = frameSizeOrFrameData;
        } else {
            throw new Error('Invalid argument: frameSizeOrFrameData must be a number or an array');
        }
        this.makeFrame();

    }


    makeFrame() {
        let sqNumber = 0;
        for (let i = 0; i < this.#frameSize; i++) {
            for (let j = 0; j < this.#frameSize; j++) {
                const args = [this.#size * j, this.#size * i, this.#size];
                this.#data !== null && args.push(this.#data[sqNumber]);
                const sq = new Sq(...args);
                sq.addTo(this.#frameHolderElement, this.#mode);
                this.#sqs.push(sq);
                sqNumber++;
            }
        }

        if (mode == 'view') {
            return;
        }

        this.#frameHolderElement.addEventListener("mousedown", _ => this.openGates())
        this.#frameHolderElement.addEventListener("mouseup", _ => this.closeGates())
    }

    reset() {
        this.#sqs.forEach(sq => sq.reset(true));
    }

    openGates() {
        this.#sqs.forEach(sq => sq.open(true));
    }

    closeGates() {
        this.#sqs.forEach(sq => sq.open(false));
    }

    setActiveColor(color) {
        this.#sqs.forEach(sq => sq.activeColor = color)
    }

    addBorders(color, borderSize) {
        this.#frameHolderElement.style.border = `${borderSize}px solid ${color}`;
        const elSize = this.#frameSize * this.#size + 2 * borderSize;
        this.#frameHolderElement.style.width = elSize + 'px';
        this.#frameHolderElement.style.height = elSize + 'px';
    }


}