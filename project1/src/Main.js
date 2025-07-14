import Frame from './Frame';
import LS from './LS';

export default class Main extends LS {


    static init() {

        this.storageInit({
            key: 'niceArt'
        });

        if (document.querySelector('[data-create]')) {
            this.initCreate();
        } else if (document.querySelector('[data-read]')) {
            this.initRead();
        }
    }

    static initRead() {

        const frames = this.read();
        const template = document.querySelector('template');
        const listEl = document.querySelector('[data-list]');

        frames.forEach(activeFrame => {
            const clone = template.content.cloneNode(true);

            clone.querySelector('[data-title]').textContent = activeFrame.title;

            const f = clone.querySelector('[data-frame]');

            const frame = new Frame(4, activeFrame.frame, f, 'view');


            frame.addBorders('gray', 1);


            listEl.appendChild(clone);

        });

    }

    static initCreate() {
        const f = document.querySelector('[data-create-frame]');
        const colorInput = document.querySelector('[type="color"]');

        const titleInput = document.querySelector('input[data-title]');

        const saveButton = document.querySelector('button[data-save]');
        const clear = document.querySelector('button[data-clear]');


        const frame = new Frame(10, 20, f, 'create');


        frame.addBorders('gray', 1);
        frame.setActiveColor(colorInput.value);


        colorInput.addEventListener('change', e => {
            frame.setActiveColor(e.target.value);
        });

        clear.addEventListener('click', _ => {
            frame.reset();
        });

        saveButton.addEventListener('click', _ => {
            this.store({
                frame: frame.export(),
                title: titleInput.value
            });
            colorInput.value = '#000000';
            frame.reset();
            titleInput.value = '';
        });

    }


}