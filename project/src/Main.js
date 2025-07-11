import Frame from './Frame';
import LS from './LS';


export default class Main extends LS {



    static init() {
        if (document.querySelector('[data-create]')) {
            this.initCreate();
        }
    }


    static initCreate() {
        const f = document.querySelector('[data-create-frame]');
        const colorInput = document.querySelector('[type="color"]');
        const saveButton = document.querySelector('button[data-save]');
        const saveClear = document.querySelector('button[data-clear]');


        const frame = new Frame(10, 20, f, 'create');
        frame.addBorders('gray', 1);
        frame.setActiveColor(colorInput.value);

        colorInput.addEventListener('change', e => {
            frame.setActiveColor(e.target.value);
        })

        saveClear.addEventListener('click', _ => {
            frame.reset();
        })
    }


}