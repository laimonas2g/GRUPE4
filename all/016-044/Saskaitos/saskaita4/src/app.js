
import CreateInvoicePage from './CreateInvoicePage.js';
import ReadInvoicePage from '../../ReadInvoicePage.js';
import EditInvoicePage from './EditInvoicePage.js';
import ListInvoicesPage from './ListInvoicesPage.js';
import ShowInvoicePage from './ShowInvoicePage.js';
import DeleteInvoicePage from './DeleteInvoicePage.js';

const page = window.location.pathname.split('/').pop(); // get the current HTML file name from the URL path

switch (page) {  // pagal puslapio pavadinima sukuria atitinkamos klases egzemplioriu

    case 'create.html': // jei atidarytas create.html => CreateInvoicePage klase
        new CreateInvoicePage();
        break;
    case 'edit.html':
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
        break;  // jei puslapio pavadinimas neatpazintas = nieko nedaro
}