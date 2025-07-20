// app.js
// Entry point: detects page and instantiates the appropriate class

import CreateInvoicePage from './CreateInvoicePage.js';
import ReadInvoicePage from './ReadInvoicePage.js';
import EditInvoicePage from './EditInvoicePage.js';
import ListInvoicesPage from './ListInvoicesPage.js';
import ShowInvoicePage from './ShowInvoicePage.js';
import DeleteInvoicePage from './DeleteInvoicePage.js';

// Detect page by file name and instantiate correct class
const page = window.location.pathname.split('/').pop();

switch (page) {
    case 'create.html':
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
        // Optionally, show an error or redirect
        break;
}