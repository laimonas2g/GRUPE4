
// // importuoja puslapiu klases, atsakingas uz skirtingu pusl.funkcionaluma

import CreateInvoicePage from './CreateInvoicePage.js';
import ReadInvoicePage from './ReadInvoicePage.js';
import EditInvoicePage from './EditInvoicePage.js';
import ListInvoicesPage from './ListInvoicesPage.js';
import ShowInvoicePage from './ShowInvoicePage.js';
import DeleteInvoicePage from './DeleteInvoicePage.js';

// get the current HTML file name from the URL path
const page = window.location.pathname.split('/').pop();

// pagal puslapio pavadinima sukuria atitinkamos klases egzemplioriu
switch (page) {
    case 'create.html':
        new CreateInvoicePage();
        break;
    case 'edit.html':
        // jei atidarytas edit.html => EditInvoicePage klase
        new EditInvoicePage();
        break;
    case 'read.html':
        new ListInvoicesPage();
        break;
    case 'show.html':
        new ShowInvoicePage();
        break;
    case 'delete.html':
        new DeleteInvoicePage();
        break;
    default:
        // Jei puslapio pavadinimas neatpažintas, nieko nedaro
        break;
}