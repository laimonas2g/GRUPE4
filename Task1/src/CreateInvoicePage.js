import InvoiceRepository from './InvoiceRepository';
import { fetchInvoiceFromApi } from './invoiceApi';

export default class CreateInvoicePage {
  constructor() {
    this.invoice = null;
    this.init();
  }
  async init() {
    this.invoice = await fetchInvoiceFromApi();
    this.renderInvoice();
    this.setupButtons();
  }
  renderInvoice() {
    document.getElementById('invoice-number').textContent = this.invoice.number;
    document.getElementById('invoice-date').textContent = this.invoice.date;
    // Render more fields as needed
  }
  setupButtons() {
    document.getElementById('save-btn').onclick = () => {
      this.invoice.id = crypto.randomUUID ? crypto.randomUUID() : (Date.now() + Math.random()).toString(36);
      InvoiceRepository.save(this.invoice);
      alert('Invoice saved!');
      window.location.href = 'read.html';
    };
    document.getElementById('update-btn').onclick = async () => {
      this.invoice = await fetchInvoiceFromApi();
      this.renderInvoice();
    };
    document.getElementById('cancel-btn').onclick = () => {
      window.location.href = 'read.html';
    };
  }
}