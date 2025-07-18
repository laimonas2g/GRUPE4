import './Invoice.js';
import './InvoiceRepository.js';
import { fetchInvoiceFromApi } from './invoiceApi.js';
import CreateInvoicePage from './CreateInvoicePage.js';
import EditInvoicePage from './EditInvoicePage.js';
import ListInvoicesPage from './ListInvoicesPage.js';
import ShowInvoicePage from './ShowInvoicePage.js';
import DeleteInvoicePage from './DeleteInvoicePage.js';

// Expose classes to window for HTML scripts to use directly
window.CreateInvoicePage = CreateInvoicePage;
window.EditInvoicePage = EditInvoicePage;
window.ListInvoicesPage = ListInvoicesPage;
window.ShowInvoicePage = ShowInvoicePage;
window.DeleteInvoicePage = DeleteInvoicePage;
window.fetchInvoiceFromApi = fetchInvoiceFromApi;