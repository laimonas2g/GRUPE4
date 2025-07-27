import { Main } from '../nd/saskaita CRUD 2/src/Main.js';
import { Create } from '../nd/saskaita CRUD 2/src/Create.js';
import { View } from '../nd/saskaita CRUD 2/src/View.js';
import { Update } from '../nd/saskaita CRUD 2/src/Update.js';
import { LocalStorage } from './LocalStorage.js';
import { LocalStorage } from './LocalStorage.js';
import { LocalStorage } from './LocalStorage.js';
import { LocalStorage } from './LocalStorage.js';

function route() {
    const hash = window.location.hash;
    const app = document.getElementById('app');
    if (hash.startsWith('#create')) {
        new Create(app);
    } else if (hash.startsWith('#view/')) {
        const number = hash.split('/')[1];
        new View(app, number);
    } else if (hash.startsWith('#edit/')) {
        const number = hash.split('/')[1];
        new Update(app, number);
    } else {
        new Main(app);
    }
}

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', route);