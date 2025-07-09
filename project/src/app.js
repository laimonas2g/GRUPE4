console.log('Labas, Projektai');

import Frame from './Frame';


const tf = document.querySelector('.test-frame');


const F = new Frame(10, 100, tf, 'edit');

F.openGates();

F.setActiveColor('crimson');