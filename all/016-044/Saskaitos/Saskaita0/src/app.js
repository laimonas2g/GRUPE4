
// Entry point: detects page and instantiates the appropriate class for each page

import CreateInvoicePage from './CreateInvoicePage.js';
import ReadInvoicePage from './ReadInvoicePage.js';
import EditInvoicePage from './EditInvoicePage.js';
import ListInvoicesPage from './ListInvoicesPage.js';
import ShowInvoicePage from './ShowInvoicePage.js';
import DeleteInvoicePage from './DeleteInvoicePage.js';

// Get the current HTML file name from the URL path
const page = window.location.pathname.split('/').pop();

// Instantiate the corresponding page logic class based on the current HTML file
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
        // Optionally, show an error or redirect if page is not recognized
        break;
}